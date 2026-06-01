const logos = [
  { input: 'public/share-india-transparent.png', output: 'public/share-india-transparent.webp' },
  {
    input: 'public/share-india-transparent_header.png',
    output: 'public/share-india-transparent_header.webp',
  },
  { input: 'public/logo.png', output: 'public/logo.webp' },
];

async function main() {
  console.log('🎨 Logo Optimization\n');

  let totalOriginal = 0;
  let totalWebp = 0;
  let count = 0;

  for (const { input, output } of logos) {
    const inputPath = path.join(__dirname, '..', input);
    const outputPath = path.join(__dirname, '..', output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Not found: ${input}`);
      continue;
    }

    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${path.basename(input)} (WebP exists)`);
      continue;
    }

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = stats.size;

      await sharp(inputPath)
        .webp({ quality: 85 }) // Higher quality for logos
        .toFile(outputPath);

      const webpStats = fs.statSync(outputPath);
      const webpSize = webpStats.size;
      const savingsPercent = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);

      console.log(
        `✅ ${path.basename(input)}: ${(originalSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB (${savingsPercent}% savings)`,
      );

      totalOriginal += originalSize;
      totalWebp += webpSize;
      count++;
    } catch (error) {
      console.error(`❌ Failed to optimize ${path.basename(input)}:`, error.message);
    }
  }

  if (count === 0) {
    console.log('\n✨ No new logos to optimize!');
    return;
  }

  const totalSavingsPercent = (((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1);

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Optimized: ${count} logos`);
  console.log(`📊 Original: ${(totalOriginal / 1024).toFixed(0)} KB`);
  console.log(`📊 WebP: ${(totalWebp / 1024).toFixed(0)} KB`);
  console.log(`💰 Total savings: ${totalSavingsPercent}%`);
  console.log('='.repeat(70));
}

main().catch(console.error);

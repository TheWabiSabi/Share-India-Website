const TEAM_DIR = path.join(__dirname, '../public/team');
const LEADERSHIP_DIR = path.join(__dirname, '../public/leadership');

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();

  // Only process PNG/JPG
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return null;
  }

  const fileName = path.basename(inputPath, ext);
  const dirName = path.dirname(inputPath);
  const outputPath = path.join(dirName, `${fileName}.webp`);

  // Skip if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipping ${path.basename(inputPath)} (WebP exists)`);
    return null;
  }

  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

    const webpStats = fs.statSync(outputPath);
    const webpSize = webpStats.size;
    const savingsPercent = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);

    console.log(
      `✅ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(webpSize / 1024 / 1024).toFixed(2)}MB (${savingsPercent}% savings)`,
    );

    return {
      original: inputPath,
      originalSize,
      webpSize,
      savingsPercent: parseFloat(savingsPercent),
    };
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(inputPath)}:`, error.message);
    return null;
  }
}

async function optimizeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return [];
  }

  const files = fs.readdirSync(dirPath);
  const imageFiles = files
    .filter((f) => ['.png', '.jpg', '.jpeg'].includes(path.extname(f).toLowerCase()))
    .map((f) => path.join(dirPath, f));

  console.log(`\n📂 Processing ${dirPath}`);
  console.log(`   Found ${imageFiles.length} images\n`);

  const results = [];
  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) results.push(result);
  }

  return results;
}

async function main() {
  console.log('🚀 Team Image Optimization\n');

  const teamResults = await optimizeDirectory(TEAM_DIR);
  const leadershipResults = await optimizeDirectory(LEADERSHIP_DIR);

  const allResults = [...teamResults, ...leadershipResults];

  if (allResults.length === 0) {
    console.log('\n✨ No new images to optimize!');
    return;
  }

  const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebp = allResults.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSavingsPercent = (((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1);

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`✅ Optimized: ${allResults.length} images`);
  console.log(`📊 Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📊 WebP: ${(totalWebp / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💰 Total savings: ${totalSavingsPercent}%`);
  console.log('='.repeat(70));
}

main().catch(console.error);

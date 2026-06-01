#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts large JPEG/PNG images to WebP format
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  {
    input: 'public/be-a-posp/img2.jpg',
    output: 'public/be-a-posp/img2.webp',
    quality: 85
  },
  {
    input: 'public/be-a-posp/img4.jpg',
    output: 'public/be-a-posp/img4.webp',
    quality: 85
  },
  {
    input: 'public/images/about/hero-background.jpg',
    output: 'public/images/about/hero-background.webp',
    quality: 80
  },
  {
    input: 'public/leadership/ajay-kumar.png',
    output: 'public/leadership/ajay-kumar.webp',
    quality: 85
  }
];

async function optimizeImage(config) {
  const inputPath = path.join(__dirname, '..', config.input);
  const outputPath = path.join(__dirname, '..', config.output);
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Input file not found: ${config.input}`);
    return { success: false, config };
  }
  
  try {
    const inputStats = fs.statSync(inputPath);
    const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
    
    console.log(`\n📸 Processing: ${config.input}`);
    console.log(`   Original size: ${inputSizeMB} MB`);
    
    await sharp(inputPath)
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`   ✅ WebP size: ${outputSizeMB} MB`);
    console.log(`   💰 Savings: ${savings}%`);
    
    return {
      success: true,
      config,
      inputSize: inputStats.size,
      outputSize: outputStats.size,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error processing ${config.input}:`, error.message);
    return { success: false, config, error: error.message };
  }
}

async function main() {
  console.log('=' .repeat(70));
  console.log('IMAGE OPTIMIZATION — JPEG/PNG → WebP');
  console.log('=' .repeat(70));
  
  const results = [];
  
  for (const config of imagesToOptimize) {
    const result = await optimizeImage(config);
    results.push(result);
  }
  
  console.log('\n' + '=' .repeat(70));
  console.log('SUMMARY');
  console.log('=' .repeat(70));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  if (successful.length > 0) {
    const totalInputSize = successful.reduce((sum, r) => sum + r.inputSize, 0);
    const totalOutputSize = successful.reduce((sum, r) => sum + r.outputSize, 0);
    const totalSavings = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
    
    console.log(`✅ Successfully optimized: ${successful.length}/${imagesToOptimize.length}`);
    console.log(`📊 Total original size: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Total WebP size: ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💰 Total savings: ${totalSavings}%`);
  }
  
  if (failed.length > 0) {
    console.log(`\n❌ Failed: ${failed.length}`);
    failed.forEach(r => {
      console.log(`   - ${r.config.input}: ${r.error || 'Unknown error'}`);
    });
  }
  
  console.log('\n✅ Optimization complete!');
  console.log('=' .repeat(70));
  
  process.exit(failed.length > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

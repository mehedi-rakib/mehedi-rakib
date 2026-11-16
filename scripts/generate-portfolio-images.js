#!/usr/bin/env node

/**
 * Portfolio Image Generator using Canva API
 * Generates 800x500px feature images for all portfolio projects
 *
 * Usage: node scripts/generate-portfolio-images.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);

// Project configurations
const projects = [
  {
    id: 'savers-pharma',
    name: 'Savers Pharma',
    fileName: 'savers-pharma',
    type: 'healthcare',
    description: 'Healthcare mobile commerce',
    colors: {
      primary: '#66b9ff',
      accent: '#0047AB'
    },
    keywords: 'pharmacy mobile app medicine health',
    width: 800,
    height: 500
  },
  {
    id: 'azan-android',
    name: 'Azan Wholesale Android',
    fileName: 'azan-android-app',
    type: 'ecommerce',
    description: 'Mobile dropshipping app',
    colors: {
      primary: '#ff83aa',
      accent: '#E91E63'
    },
    keywords: 'android app dropshipping mobile commerce',
    width: 800,
    height: 500
  },
  {
    id: 'azan-shopify',
    name: 'Azan Wholesale Shopify',
    fileName: 'azan-shopify',
    type: 'automation',
    description: 'Shopify automation app',
    colors: {
      primary: '#c8ff00',
      accent: '#9ACD32'
    },
    keywords: 'shopify app automation ecommerce',
    width: 800,
    height: 500
  },
  {
    id: 'azan-web',
    name: 'Azan Wholesale Web',
    fileName: 'azan-site',
    type: 'platform',
    description: 'B2B wholesale platform',
    colors: {
      primary: '#ffb3b3',
      accent: '#FF69B4'
    },
    keywords: 'b2b wholesale ecommerce platform',
    width: 800,
    height: 500
  },
  {
    id: 'japan-ambition',
    name: 'Japan Ambition',
    fileName: 'japan_banner',
    type: 'education',
    description: 'Language academy platform',
    colors: {
      primary: '#ff7547',
      accent: '#FF6347'
    },
    keywords: 'education language learning platform japan',
    width: 800,
    height: 500
  },
  {
    id: 'custom-print',
    name: 'Custom Print Supplies',
    fileName: 'custom_print',
    type: 'shopify',
    description: 'Print e-commerce store',
    colors: {
      primary: '#66b9ff',
      accent: '#4169E1'
    },
    keywords: 'print shopify ecommerce store',
    width: 800,
    height: 500
  },
  {
    id: 'eurasia-supplies',
    name: 'Eurasia Supplies',
    fileName: 'eurasia-supplies',
    type: 'ai',
    description: 'Beauty e-commerce with AI',
    colors: {
      primary: '#7cf2cb',
      accent: '#00CED1'
    },
    keywords: 'beauty ecommerce ai virtual try-on',
    width: 800,
    height: 500
  }
];

/**
 * Run shell command
 */
async function runCommand(cmd, verbose = false) {
  try {
    if (verbose) console.log(`  Running: ${cmd}`);
    const { stdout, stderr } = await execPromise(cmd);
    if (stderr && verbose) console.log(`  Output: ${stderr}`);
    return stdout.trim();
  } catch (error) {
    throw new Error(`Command failed: ${error.message}`);
  }
}

/**
 * Parse JSON safely
 */
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error('Failed to parse JSON:', str);
    throw e;
  }
}

/**
 * Create a design using Canva API
 */
async function createDesign(project) {
  console.log(`\n📸 Creating: ${project.name}`);
  console.log(`   Theme: ${project.colors.primary}`);
  console.log(`   Size: ${project.width}×${project.height}px`);

  try {
    // Create design with Canva API
    const cmd = `canva api designs create \
      --design-type custom \
      --title "${project.name} - Portfolio (${project.width}x${project.height})" \
      --width ${project.width} \
      --height ${project.height} \
      --print`;

    const output = await runCommand(cmd);
    const result = parseJSON(output);

    if (!result.ok || !result.data?.design?.id) {
      throw new Error(`API returned invalid response: ${output}`);
    }

    const designId = result.data.design.id;
    console.log(`✅ Design created: ${designId}`);

    return {
      success: true,
      designId,
      editUrl: `https://www.canva.com/design/${designId}/edit`,
      project
    };

  } catch (error) {
    console.error(`❌ Error creating ${project.name}:`, error.message);
    return {
      success: false,
      error: error.message,
      project
    };
  }
}

/**
 * Export design as PNG
 */
async function exportDesign(designId, fileName) {
  try {
    console.log(`   Exporting as PNG...`);

    const cmd = `canva api exports create \
      --design-id ${designId} \
      --file-type PNG \
      --print`;

    const output = await runCommand(cmd);
    const result = parseJSON(output);

    if (!result.ok || !result.data?.export?.urls?.full) {
      console.warn(`   ⚠️  Export response: ${JSON.stringify(result)}`);
      return { success: false };
    }

    console.log(`✅ Export URL: ${result.data.export.urls.full}`);
    return {
      success: true,
      exportUrl: result.data.export.urls.full,
      fileName
    };

  } catch (error) {
    console.warn(`   ⚠️  Could not export: ${error.message}`);
    return { success: false };
  }
}

/**
 * Download image from URL
 */
async function downloadImage(url, filePath) {
  try {
    console.log(`   Downloading to: ${filePath}`);
    const cmd = `curl -L "${url}" -o "${filePath}" 2>/dev/null && echo "Downloaded"`;
    await runCommand(cmd);
    console.log(`✅ Image saved`);
    return true;
  } catch (error) {
    console.warn(`   ⚠️  Download failed: ${error.message}`);
    return false;
  }
}

/**
 * Generate placeholder image (fallback)
 */
function createPlaceholderImage(project, filePath) {
  console.log(`   Creating placeholder image...`);

  // Create a simple PNG placeholder using ImageMagick or fallback
  const cmd = `convert -size ${project.width}x${project.height} \
    xc:"${project.colors.primary}" \
    -pointsize 40 -fill white -gravity center \
    -annotate +0+0 "${project.name}" \
    "${filePath}" 2>/dev/null || echo "ImageMagick not available"`;

  try {
    exec(cmd, (error) => {
      if (error) {
        console.warn(`   ⚠️  Could not create placeholder: ${error.message}`);
        console.log(`   📝 Manual creation required for: ${project.name}`);
      } else {
        console.log(`✅ Placeholder created`);
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Main generation function
 */
async function generateAllImages() {
  console.log('\n🎨 Portfolio Image Generator');
  console.log('=' .repeat(50));
  console.log(`Generating ${projects.length} project images...`);
  console.log(`Size: 800×500px`);
  console.log(`Format: PNG`);
  console.log('=' .repeat(50));

  // Ensure output directory exists
  const outputDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`\n📁 Created directory: ${outputDir}`);
  }

  const results = {
    created: [],
    exported: [],
    failed: [],
    skipped: []
  };

  // Process each project
  for (const project of projects) {
    try {
      // Create design
      const designResult = await createDesign(project);

      if (!designResult.success) {
        results.failed.push({
          name: project.name,
          reason: designResult.error
        });
        continue;
      }

      results.created.push(project.name);

      // Try to export and download
      const exportResult = await exportDesign(
        designResult.designId,
        project.fileName
      );

      if (exportResult.success) {
        const filePath = path.join(outputDir, `${project.fileName}.png`);
        const downloaded = await downloadImage(exportResult.exportUrl, filePath);

        if (downloaded) {
          results.exported.push(project.name);
        } else {
          // Create placeholder if download fails
          createPlaceholderImage(project, filePath);
          results.skipped.push(project.name);
        }
      } else {
        // If export fails, create placeholder
        const filePath = path.join(outputDir, `${project.fileName}.png`);
        createPlaceholderImage(project, filePath);
        results.skipped.push(project.name);
      }

      // Brief delay between API calls
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`\n❌ Fatal error for ${project.name}:`, error.message);
      results.failed.push({
        name: project.name,
        reason: error.message
      });
    }
  }

  // Print summary
  console.log('\n' + '=' .repeat(50));
  console.log('📊 Generation Summary');
  console.log('=' .repeat(50));

  console.log(`✅ Designs created: ${results.created.length}/${projects.length}`);
  if (results.created.length > 0) {
    results.created.forEach(name => console.log(`   • ${name}`));
  }

  if (results.exported.length > 0) {
    console.log(`\n✅ Images exported: ${results.exported.length}`);
    results.exported.forEach(name => console.log(`   • ${name}`));
  }

  if (results.skipped.length > 0) {
    console.log(`\n⚠️  Placeholders created: ${results.skipped.length}`);
    results.skipped.forEach(name => console.log(`   • ${name}`));
  }

  if (results.failed.length > 0) {
    console.log(`\n❌ Failed: ${results.failed.length}`);
    results.failed.forEach(item => console.log(`   • ${item.name}: ${item.reason}`));
  }

  console.log(`\n📁 Images saved to: ${outputDir}`);
  console.log('\n' + '=' .repeat(50));
  console.log('✨ Next steps:');
  console.log('   1. Review generated images');
  console.log('   2. npm run build');
  console.log('   3. git push');
  console.log('   4. Deploy to production');
  console.log('=' .repeat(50));

  // Summary JSON
  const summaryFile = path.join(__dirname, '../image-generation-summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalProjects: projects.length,
    results
  }, null, 2));

  console.log(`\n📄 Summary saved to: image-generation-summary.json`);

  return results;
}

/**
 * Main execution
 */
(async () => {
  try {
    // Check if user is logged in to Canva CLI
    console.log('\n🔍 Checking Canva CLI setup...');
    try {
      await runCommand('canva api designs list --print', false);
      console.log('✅ Canva CLI authenticated');
    } catch (error) {
      console.error('\n❌ Canva CLI not authenticated');
      console.log('\nPlease run:');
      console.log('  npm install -g @canva/cli@latest');
      console.log('  canva login');
      process.exit(1);
    }

    // Generate images
    await generateAllImages();

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
})();

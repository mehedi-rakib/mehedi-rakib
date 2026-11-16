#!/usr/bin/env node

/**
 * Savers Pharma Feature Image Generator
 * Creates a professional 800x500px feature image for portfolio
 * Uses brand colors from figma-colors.json
 *
 * Usage: node scripts/generate-savers-pharma-image.js
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const execPromise = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Savers Pharma Brand Colors (from figma-colors.json)
const COLORS = {
  primary: '#003D7A',      // Dark navy blue - main brand color
  primaryDark: '#012E58',  // Darker navy
  accent: '#10B981',       // Emerald green - healthcare
  accentLight: '#10C693',  // Lighter green
  accentBright: '#51B81D', // Bright lime green
  light: '#E8F0F7',        // Light blue background
  lightGray: '#DBE1E6',    // Light gray
  white: '#FFFFFF',        // White
  text: '#111827',         // Dark text
  textMedium: '#192C3E'    // Medium text
};

const project = {
  name: 'Savers Pharma',
  description: 'Healthcare Mobile Commerce',
  tagline: 'Affordable Medicines, Fast Delivery',
  width: 800,
  height: 500,
  colors: COLORS
};

/**
 * Run shell command
 */
async function runCommand(cmd, verbose = true) {
  try {
    if (verbose) console.log(`  Running: ${cmd}`);
    const { stdout, stderr } = await execPromise(cmd);
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
 * Create Savers Pharma design using Canva API
 */
async function createSaversPharmImage() {
  console.log('\n' + '='.repeat(60));
  console.log('🏥 Savers Pharma Feature Image Generator');
  console.log('='.repeat(60));
  console.log(`\n📸 Creating: ${project.name}`);
  console.log(`   Description: ${project.description}`);
  console.log(`   Size: ${project.width}×${project.height}px`);
  console.log(`   Primary Color: ${project.colors.primary} (Navy Blue)`);
  console.log(`   Accent Color: ${project.colors.accent} (Green)`);
  console.log(`   Theme: Healthcare, Modern, Professional`);

  try {
    // Step 1: Create design using Canva API
    console.log(`\n🔨 Step 1: Creating design in Canva...`);

    const createCmd = `canva api designs create \
      --design-type custom \
      --title "Savers Pharma - Portfolio (${project.width}x${project.height})" \
      --width ${project.width} \
      --height ${project.height} \
      --print`;

    const output = await runCommand(createCmd);
    const result = parseJSON(output);

    if (!result.ok || !result.data?.design?.id) {
      throw new Error(`API returned invalid response: ${output}`);
    }

    const designId = result.data.design.id;
    console.log(`✅ Design created!`);
    console.log(`   Design ID: ${designId}`);

    // Step 2: Provide design guidance
    console.log(`\n🎨 Step 2: Design Elements to Add in Canva...`);
    console.log(`
   Your design should include:

   COLORS (from your brand):
   ├─ Primary: ${project.colors.primary} (Navy Blue) - Header/Main
   ├─ Accent: ${project.colors.accent} (Green) - Highlights
   ├─ Light: ${project.colors.light} (Light Blue) - Background
   └─ Text: ${project.colors.text} (Dark) - Body text

   LAYOUT SUGGESTION (800×500px):
   ├─ Top 60px: Navy header with "SAVERS PHARMA" logo
   ├─ Main (250px): Light blue background with healthcare icon/image
   │  └─ Medicine bottle, pharmacy cross, or person with medicine
   ├─ Center (100px): Green accent line or shape
   └─ Bottom (90px): White section with key features
      └─ "Affordable" • "Fast Delivery" • "24/7 Support"

   DESIGN TIPS:
   ✓ Keep it clean and professional
   ✓ Use the navy blue (#003D7A) prominently
   ✓ Add green (#10B981) for healthcare feel
   ✓ Include pharmacy/health imagery
   ✓ Add "Healthcare Mobile Commerce" subtitle
   ✓ Make it match your website's professional style
    `);

    // Step 3: Provide edit URL
    console.log(`\n📝 Step 3: Edit Your Design`);
    const editUrl = `https://www.canva.com/design/${designId}/edit`;
    console.log(`   Open in Canva: ${editUrl}`);

    // Step 4: Export instructions
    console.log(`\n⬇️  Step 4: When Done, Download as PNG`);
    console.log(`   1. Click Download (top right)
   2. Select "PNG"
   3. Save as: savers-pharma.png
   4. Move to: public/images/savers-pharma.png`);

    // Step 5: Summary
    console.log(`\n✅ DESIGN READY FOR EDITING`);
    console.log(`   Edit URL: ${editUrl}`);
    console.log(`   Brand Colors loaded from: figma-colors.json`);

    console.log(`\n${'='.repeat(60)}`);
    console.log(`✨ Next Steps:`);
    console.log(`   1. Open the Canva edit URL above`);
    console.log(`   2. Design using the colors and elements suggested`);
    console.log(`   3. Download as PNG when done`);
    console.log(`   4. Save to: public/images/savers-pharma.png`);
    console.log(`   5. Run: npm run build && git push`);
    console.log(`${'='.repeat(60)}\n`);

    return {
      success: true,
      designId,
      editUrl,
      project
    };

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    console.log(`\n💡 Troubleshooting:`);
    console.log(`   1. Make sure you ran: canva login`);
    console.log(`   2. Verify Canva CLI is installed: npm ls -g @canva/cli`);
    console.log(`   3. Check internet connection`);
    console.log(`\n📝 Alternative: Create manually`);
    console.log(`   1. Go to: https://www.canva.com`);
    console.log(`   2. Create → Custom size → 800×500px`);
    console.log(`   3. Use colors from figma-colors.json`);
    console.log(`   4. Add healthcare/pharmacy theme`);
    console.log(`   5. Download as PNG`);

    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Main execution
 */
(async () => {
  try {
    // Check if user is logged in
    console.log('\n🔍 Checking Canva CLI setup...');
    try {
      await runCommand('canva api designs list --print', false);
      console.log('✅ Canva CLI authenticated');
    } catch (error) {
      console.error('\n❌ Canva CLI not authenticated');
      console.log('\nPlease run:');
      console.log('  npm install -g @canva/cli@latest');
      console.log('  canva login');
      console.log('\nThen try again.');
      process.exit(1);
    }

    // Create the design
    const result = await createSaversPharmImage();

    if (result.success) {
      console.log(`\n🎉 SUCCESS!`);
      console.log(`\nYour Savers Pharma design is ready to edit.`);
      console.log(`Open this URL in your browser:`);
      console.log(`${result.editUrl}`);
    }

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
})();

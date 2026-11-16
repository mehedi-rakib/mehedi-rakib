# 🎨 Canva Portfolio Image Generator Setup

## Quick Start (5 minutes)

### Option 1: Automated Generation (Recommended)

```bash
# Step 1: Install Canva CLI globally
npm install -g @canva/cli@latest

# Step 2: Log in to Canva
canva login

# Step 3: Run the image generator
node scripts/generate-portfolio-images.js

# Step 4: Check the generated images
ls -la public/images/

# Step 5: Build and deploy
npm run build
git push
```

---

## Setup Details

### 1. Install Canva CLI

```bash
npm install -g @canva/cli@latest
```

Verify installation:
```bash
canva --version
```

### 2. Authenticate

```bash
canva login
```

This will:
- Open browser to authorize
- Generate auth token (stored locally)
- Ready for API calls

### 3. Verify Authentication

```bash
canva api designs list --print
```

Should return JSON with your existing designs.

### 4. Run Image Generator

```bash
cd /Users/azanwholesale/Projects/mehedi-rakib
node scripts/generate-portfolio-images.js
```

---

## What the Script Does

### Generates 7 Images:

1. **Savers Pharma** - Blue (#66b9ff), healthcare
2. **Azan Wholesale Android** - Pink (#ff83aa), e-commerce
3. **Azan Wholesale Shopify** - Lime (#c8ff00), automation
4. **Azan Wholesale Web** - Rose (#ffb3b3), B2B
5. **Japan Ambition** - Orange (#ff7547), education
6. **Custom Print Supplies** - Blue (#66b9ff), print
7. **Eurasia Supplies** - Mint (#7cf2cb), beauty

### For Each Image:

1. ✅ Creates design via Canva API (800×500px)
2. ✅ Exports as PNG
3. ✅ Downloads to `/public/images/`
4. ✅ Or creates placeholder if download fails

---

## Output

### Success:
```
✅ Images created: 7/7
✅ Images exported: 7/7
📁 Images saved to: /public/images/
```

### With Placeholders:
```
✅ Designs created: 7/7
✅ Images exported: 7/7
⚠️  Placeholders created: 0/7
```

### Summary File:
```
image-generation-summary.json
```

Contains: timestamps, results, status for each project

---

## Troubleshooting

### "Canva CLI not authenticated"

```bash
# Re-run login
canva login

# Verify
canva api designs list --print
```

### "Command failed: curl"

The export worked but download failed. Images were created as designs in Canva.

**Manual fix:**
1. Go to: https://www.canva.com/designs
2. Find the generated designs
3. Download each as PNG
4. Move to: `/public/images/`

### "ImageMagick not available"

This is for placeholder creation only. Not critical.

To install (optional):
```bash
# macOS
brew install imagemagick

# Ubuntu
sudo apt-get install imagemagick

# Windows
choco install imagemagick
```

---

## Option 2: Manual Creation (Backup)

If automation doesn't work:

### Create in Canva UI

1. Go to: https://www.canva.com
2. Click "Create" → "Custom size"
3. Enter: **800 × 500 px**
4. Add project design:
   - Background color (from palette)
   - Project name text
   - Optional: icons or graphics
5. Download as PNG
6. Save to: `/public/images/{project-name}.png`

### File Naming:
```
savers-pharma.png
azan-android-app.png
azan-shopify.png
azan-site.png
japan_banner.png
custom_print.png
eurasia-supplies.png
```

---

## Next Steps After Generation

### 1. Verify Images
```bash
ls -la public/images/
# Should show 7 PNG files
```

### 2. Test Locally
```bash
npm run dev
# Check images load correctly
```

### 3. Build
```bash
npm run build
# Creates optimized dist/
```

### 4. Deploy
```bash
git add public/images/
git commit -m "feat: add portfolio project feature images"
git push
```

---

## API Limits

- **Free tier:** 100 API calls/day
- **Each image:** 2-3 API calls (create + export)
- **7 images:** ~20 API calls total ✅ Well within limit

---

## File Locations

```
Project root: /Users/azanwholesale/Projects/mehedi-rakib/

Script:       scripts/generate-portfolio-images.js
Output:       public/images/
Summary:      image-generation-summary.json
```

---

## Example Output

```
🎨 Portfolio Image Generator
==================================================
Generating 7 project images...
Size: 800×500px
Format: PNG
==================================================

📸 Creating: Savers Pharma
   Theme: #66b9ff
   Size: 800×500px
✅ Design created: DAF...abc
   Exporting as PNG...
✅ Export URL: https://...
   Downloading to: public/images/savers-pharma.png
✅ Image saved

[... 6 more projects ...]

==================================================
📊 Generation Summary
==================================================
✅ Designs created: 7/7
✅ Images exported: 7/7
📁 Images saved to: /Users/azanwholesale/Projects/mehedi-rakib/public/images

✨ Next steps:
   1. Review generated images
   2. npm run build
   3. git push
   4. Deploy to production
==================================================
```

---

## Advanced Options

### Generate Specific Project Only

Edit `scripts/generate-portfolio-images.js`:
- Comment out projects you don't want
- Run normally

### Custom Colors

Edit project object:
```javascript
{
  colors: {
    primary: '#YOUR-COLOR',
    accent: '#YOUR-COLOR-2'
  }
}
```

### Custom Sizes

Edit dimensions:
```javascript
{
  width: 1200,   // Change width
  height: 600    // Change height
}
```

---

## Quick Decision Matrix

| Situation | Action |
|-----------|--------|
| First time | Try automated, fallback to manual |
| No Canva account | Create free account first |
| API fails | Check `canva login` status |
| Want custom designs | Use Canva UI manually |
| Want to automate 100+ images | Use this script as template |
| Need different aspect ratios | Edit width/height in script |

---

## Getting Help

### Canva CLI Docs
https://www.canva.dev/docs/apps/canva-cli/

### Canva API Docs
https://www.canva.dev/docs/connect/

### Common Issues
- https://www.canva.dev/docs/apps/faq/
- https://community.canva.dev/

---

## Summary

**Automated path: 5 minutes to 7 images**
- Install CLI
- Login
- Run script
- Deploy

**Manual path: 30 minutes to 7 images**
- Open Canva
- Create each design
- Download
- Upload to project

**Hybrid: 10 minutes**
- Run script for 5 images
- Manually create 2 custom ones
- Deploy

**Recommended: Start with automated, use manual for any that don't work.** ✨

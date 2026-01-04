# Images Directory

This folder contains all images for your website.

## Folder Structure:

- **`hero/`** - Profile photos, background images for hero section
- **`research/`** - Research project images, lab photos
- **`outreach/`** - Conference photos, workshop images, collaboration pictures
- **`publications/`** - Graphical abstracts, paper illustrations

## How to Add Images:

### Method 1: GitHub Website (Easiest)
1. Go to your repository on GitHub
2. Navigate to `public/images/[folder]`
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Click "Commit changes"

### Method 2: Git Command Line
```bash
# Add images to appropriate folder
cp ~/your-image.jpg public/images/outreach/

# Commit and push
git add public/images/
git commit -m "Add conference photos"
git push
```

## Image Guidelines:

- **Format**: JPG (photos), PNG (graphics/logos), SVG (icons)
- **Size**:
  - Profile: 400x400px
  - Outreach: 1200x800px
  - Graphical abstracts: 800x600px
- **File size**: Keep under 500KB (use tinypng.com to compress)
- **Naming**: Use descriptive names like `conference-nims-2025.jpg`

## Update Component After Adding Images:

After uploading images, edit the corresponding component file:
- Hero images → `src/components/Hero.jsx`
- Research images → `src/components/About.jsx`
- Outreach images → `src/components/Gallery.jsx`
- Publication images → `src/components/Publications.jsx`

See `CUSTOMIZATION_GUIDE.md` in the root folder for detailed instructions!

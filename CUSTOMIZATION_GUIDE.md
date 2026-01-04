# 📖 Website Customization Guide

This guide will help you update your academic portfolio website yourself over time.

## 🖼️ 1. Adding Images

### Step 1: Prepare Your Images
1. **Resize images** to web-friendly sizes:
   - Profile photo: 400x400px (square)
   - Outreach photos: 1200x800px (landscape)
   - Graphical abstracts: 800x600px
   - Research images: 600x400px

2. **Optimize images** (use tools like tinypng.com to reduce file size)

3. **Rename files** clearly:
   - `conference-nims-2025.jpg`
   - `graphical-abstract-ga2o3.png`
   - `workshop-taiwan-2024.jpg`

### Step 2: Upload Images to Repository

**Via GitHub Website:**
1. Go to your repository: `https://github.com/chandru6789/chandrasekarsivakumar`
2. Navigate to `public/images/` folder
3. Click **"Add file"** → **"Upload files"**
4. Drag your images into the appropriate folder:
   - `public/images/hero/` - Hero section background images
   - `public/images/research/` - Research highlights images
   - `public/images/outreach/` - Conference, workshop photos
   - `public/images/publications/` - Graphical abstracts
5. Click **"Commit changes"**

### Step 3: Update Component Files

**For Outreach Gallery** (`src/components/Gallery.jsx`):
```javascript
const outreachImages = [
  {
    src: '/images/outreach/conference-nims-2025.jpg',  // ← Your image filename
    title: 'NIMS International Conference',            // ← Your title
    description: 'Presented research on neuromorphic computing',  // ← Your description
    year: '2025'
  },
  // Add more images...
];
```

**For Research Highlights** (`src/components/About.jsx`):
Add images to the research cards by editing around line 80:
```javascript
<div className="card">
  <img src="/images/research/2d-materials.jpg" alt="2D Materials" className="w-full h-48 object-cover rounded-t-lg mb-4" />
  <h4 className="text-xl font-semibold">...</h4>
</div>
```

---

## 📚 2. Updating Publications

### Easy Method (Recommended):

1. Go to `src/components/Publications.jsx`
2. Find the `publications` array (around line 8)
3. Add new publication at the TOP:

```javascript
const publications = [
  // NEW PUBLICATION - Add here
  {
    year: 2026,  // Publication year
    authors: "Sivakumar, C., et al.",  // Authors
    title: "Your paper title here",  // Full title
    journal: "Journal Name",  // Journal name
    volume: "10",  // Volume (optional)
    pages: "12345",  // Pages (optional)
    doi: "10.1234/example"  // DOI (optional)
  },
  // Existing publications below...
  {
    year: 2025,
    authors: "Yang, S.-H., et al.",
    // ...
  },
];
```

4. **Commit changes** on GitHub:
   - Click the **pencil icon** (Edit)
   - Make changes
   - Scroll down → **"Commit changes"**
   - Your site will auto-update in 1-2 minutes!

---

## 🎨 3. Changing Website Icons

### Favicon (Browser Tab Icon):

1. **Create your icon**:
   - Size: 512x512px (PNG or SVG)
   - Simple design (like your initials "CS" or graduation cap)
   - Use tools like: canva.com or favicon.io

2. **Convert to multiple sizes**:
   - Use: realfavicongenerator.net
   - Upload your icon → Download package

3. **Replace files in `public/`**:
   - Upload `favicon.ico`
   - Upload `apple-touch-icon.png`
   - Upload `favicon-32x32.png`
   - Upload `favicon-16x16.png`

4. **Update `index.html`** (already set up, but verify):
```html
<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
```

### Navbar Logo:

Edit `src/components/Navbar.jsx` (around line 55):
```javascript
<GraduationCap className="w-7 h-7 text-gold-500" />
// Replace with your custom icon or image
<img src="/images/logo.png" alt="Logo" className="w-7 h-7" />
```

---

## 🔄 Quick Update Workflow

### For Regular Updates:

1. **Via GitHub Website** (No coding needed!):
   ```
   GitHub.com → Your Repo → Navigate to file → Click pencil icon → Edit → Commit
   ```

2. **Changes auto-deploy** in 1-2 minutes via GitHub Actions

3. **Check your live site**: `https://chandru6789.github.io/chandrasekarsivakumar/`

### For Adding Multiple Images:

1. **Clone repo to your computer** (one-time setup):
   ```bash
   git clone https://github.com/chandru6789/chandrasekarsivakumar.git
   cd chandrasekarsivakumar
   ```

2. **Add images** to `public/images/` folders

3. **Push changes**:
   ```bash
   git add public/images/
   git commit -m "Add outreach photos from NIMS conference"
   git push
   ```

---

## 🎯 Common Customization Tasks

### Add Profile Photo to Hero:

Edit `src/components/Hero.jsx` (around line 35):
```javascript
<div className="mb-6">
  <img
    src="/images/hero/profile.jpg"
    alt="Dr. Chandrasekar Sivakumar"
    className="w-48 h-48 rounded-full mx-auto border-4 border-gold-400 shadow-2xl"
  />
</div>
```

### Add Graphical Abstracts to Publications:

Edit `src/components/Publications.jsx` in the `PublicationCard` component:
```javascript
<div className="card">
  <img
    src={`/images/publications/${pub.year}-${pub.id}.jpg`}
    alt="Graphical Abstract"
    className="w-full h-40 object-cover rounded-lg mb-4"
  />
  {/* Existing content */}
</div>
```

### Update Contact Information:

Edit `src/components/Contact.jsx` (around line 20):
```javascript
<p className="text-sm">your.new.email@nims.go.jp</p>
```

---

## 📱 Testing Your Changes Locally

Before pushing to GitHub, test locally:

```bash
# Install dependencies (first time only)
npm install

# Run development server
npm run dev

# Open browser to: http://localhost:5173
```

---

## 🆘 Need Help?

- **Images not showing?** Check file path matches exactly (case-sensitive!)
- **Site not updating?** Wait 2 minutes, clear browser cache (Ctrl+Shift+R)
- **Workflow failing?** Check Actions tab on GitHub for error messages

---

## 📋 Quick Reference

| Task | File to Edit | Line Number (approx) |
|------|-------------|---------------------|
| Add publications | `src/components/Publications.jsx` | Line 8 |
| Add outreach photos | `src/components/Gallery.jsx` | Line 10 |
| Change email | `src/components/Contact.jsx` | Line 30 |
| Update bio | `src/components/About.jsx` | Line 35 |
| Add employment | `src/components/Experience.jsx` | Line 12 |

---

**Remember:** After any change via GitHub web editor, your site auto-deploys in 1-2 minutes! ✨

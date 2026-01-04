# Setup & Development Guide

This guide provides instructions for developers who want to run, modify, or deploy this portfolio website.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- Git

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/chandru6789/chandrasekarsivakumar.git
cd chandrasekarsivakumar
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is busy).

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Automatic Deployment

The deployment is handled by GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The workflow:

1. Triggers on push to `main`, `master`, or `claude/**` branches
2. Installs dependencies using `npm ci`
3. Builds the project using `npm run build`
4. Deploys the `dist/` folder to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to the repository on GitHub
2. Navigate to Actions → Deploy to GitHub Pages
3. Click "Run workflow"

## Customization

### Content Updates

**For non-technical users**: See [`CUSTOMIZATION_GUIDE.md`](./CUSTOMIZATION_GUIDE.md) for step-by-step instructions on updating content without coding knowledge.

**For developers**: Edit the component files directly in `src/components/`:

- `Hero.jsx` - Profile information and hero section
- `About.jsx` - Biography and research highlights
- `Experience.jsx` - Employment and education timeline
- `Publications.jsx` - Publications list
- `Gallery.jsx` - Outreach gallery with photos
- `Contact.jsx` - Contact information and footer

### Styling

The site uses Tailwind CSS for styling. The color palette is defined in the "Academic Modern" theme:

- **Navy**: Primary headings and professional elements
- **Gold**: Accent color for buttons and highlights
- **Slate**: Body text and secondary elements

To modify colors, update the Tailwind configuration in `tailwind.config.js` or use inline Tailwind classes in components.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Navbar.jsx` if needed

## Project Structure

```
chandrasekarsivakumar/
├── src/
│   ├── components/     # React components
│   ├── assets/         # Images and static assets
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Public assets
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind configuration
```

## Common Tasks

### Adding Images

Place images in `public/` directory and reference them as `/image-name.jpg` in your components.

### Updating Publications

Edit the `publications` array in `src/components/Publications.jsx`.

### Modifying Navigation

Update the `Navbar.jsx` component to add/remove navigation items.

## Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version: `node --version` (should be 20+)

### Deployment Issues

- Check GitHub Actions logs in the repository's Actions tab
- Ensure GitHub Pages is enabled in repository settings
- Verify the `gh-pages` branch exists and has content

## License

© 2026 Chandrasekar Sivakumar. All rights reserved.

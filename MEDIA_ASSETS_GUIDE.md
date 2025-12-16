# Media Assets Guide for JMC Construction & Remodeling

## 📁 Folder Structure

Your project now has the following structure for media assets:

```
JMC/
└── public/
    └── assets/
        ├── images/
        │   ├── hero/           # Hero/banner images for pages
        │   ├── services/       # Service-related images
        │   ├── gallery/        # Project gallery images
        │   ├── team/           # Team member photos
        │   ├── projects/       # Before/after project photos
        │   ├── blog/           # Blog post images
        │   └── logos/          # Company logo and branding
        └── videos/             # Promotional and project videos
```

---

## 📷 Where to Add Your Images

### 1. **Hero/Banner Images** → `public/assets/images/hero/`
Place large hero images for:
- Home page hero banner
- Service page headers
- About Us page banner

**Recommended naming:**
- `home-hero.jpg`
- `services-hero.jpg`
- `about-hero.jpg`

---

### 2. **Service Images** → `public/assets/images/services/`
Place images for each service:
- Framing & Siding
- Doors & Windows
- Electrical & Plumbing
- HVAC & AC Services
- Flooring & Drywall
- Painting
- Roofing
- Decks & Carports
- Concrete & Masonry

**Recommended naming:**
- `framing-siding.jpg`
- `doors-windows.jpg`
- `electrical-plumbing.jpg`
- `hvac-services.jpg`
- etc.

---

### 3. **Gallery/Portfolio Images** → `public/assets/images/gallery/`
Place completed project photos:
- Before/after transformations
- Finished project showcases
- Detail shots

**Recommended naming:**
- `project-001.jpg`
- `project-002.jpg`
- `before-after-kitchen.jpg`
- etc.

---

### 4. **Team Photos** → `public/assets/images/team/`
Place team member photos for the About Us page:

**Recommended naming:**
- `team-member-1.jpg`
- `joe-mora.jpg`
- `matthew-cano.jpg`
- etc.

---

### 5. **Project Photos** → `public/assets/images/projects/`
Place specific project documentation:
- Individual project albums
- Work in progress photos

**Recommended naming:**
- `residential-remodel-001.jpg`
- `commercial-project-001.jpg`
- etc.

---

### 6. **Blog Images** → `public/assets/images/blog/`
Place blog post featured images:

**Recommended naming:**
- `blog-post-1.jpg`
- `remodeling-tips.jpg`
- etc.

---

### 7. **Logos & Branding** → `public/assets/images/logos/`
Place company logos and branding assets:
- Main logo
- Favicon
- Partner logos

**Recommended naming:**
- `jmc-logo.png`
- `jmc-logo-white.png`
- `favicon.ico`

---

## 🎥 Where to Add Your Videos

### `public/assets/videos/`
Place promotional and project videos:
- Company introduction video
- Project showcase videos
- Testimonial videos
- Time-lapse construction videos

**Recommended naming:**
- `company-intro.mp4`
- `project-showcase-001.mp4`
- `testimonial-001.mp4`
- `timelapse-remodel.mp4`

---

## 🔧 How to Use These Images in Your Code

Once you add images to the folders, you can reference them in your React components like this:

### Example 1: Using in JSX
```jsx
<img src="/assets/images/hero/home-hero.jpg" alt="JMC Construction Hero" />
```

### Example 2: Using in CSS (via Tailwind)
```jsx
<div 
  className="bg-cover bg-center h-96" 
  style={{ backgroundImage: "url('/assets/images/hero/home-hero.jpg')" }}
>
  {/* Content */}
</div>
```

### Example 3: Using Video
```jsx
<video controls>
  <source src="/assets/videos/company-intro.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

---

## 📝 Image Optimization Tips

Before adding images, consider:

1. **Resize large images** - Max width: 1920px for hero images, 800px for thumbnails
2. **Compress images** - Use tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)
3. **Use appropriate formats**:
   - **JPG** - Photos, complex images
   - **PNG** - Logos, images needing transparency
   - **WebP** - Modern format, best compression (recommended)
4. **Video optimization**:
   - Compress videos before uploading
   - Max file size: 10-20MB per video
   - Use H.264 codec for best browser compatibility

---

## 🎯 Next Steps

1. **Copy your images** into the appropriate folders
2. **Update component files** to reference your actual images instead of placeholder URLs
3. **Test locally** - View at http://localhost:3000
4. **Commit to Git**:
   ```bash
   git add public/assets
   git commit -m "Add media assets (images and videos)"
   git push
   ```

---

## 🔄 Replacing Placeholder Images

Currently, the project uses Figma placeholder URLs. Here are the files you'll need to update:

### Files with Placeholder Images:
- `src/pages/Home.jsx` - Hero, services, gallery images
- `src/pages/AboutUs.jsx` - Team photos, company images
- `src/pages/Gallery.jsx` - Project gallery
- `src/pages/Blog.jsx` - Blog post images
- `src/components/layout/Header.jsx` - Logo
- All service pages in `src/pages/Services/` - Service-specific images

### Quick Find & Replace:
Search for: `https://www.figma.com/api/mcp/asset/` or `https://via.placeholder.com`
Replace with: `/assets/images/[category]/[your-image-name].jpg`

---

## 💡 Pro Tips

1. **Consistent naming** - Use lowercase, hyphens (not spaces)
2. **Organized structure** - Keep similar images together
3. **Backup originals** - Keep high-res originals in a separate folder
4. **Alt text** - Always add descriptive alt text for accessibility
5. **Lazy loading** - For gallery images, consider implementing lazy loading

---

## 🆘 Need Help?

If you need help replacing specific placeholder images with your actual assets, just let me know which page or component you'd like to update!


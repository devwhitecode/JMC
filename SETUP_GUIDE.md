# JMC Construction & Remodeling - Setup Guide

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```
This creates an optimized build in the `dist/` folder.

4. **Preview Production Build**
```bash
npm run preview
```

## Important Notes Before Production

### 1. Replace Figma Images
The current implementation uses temporary Figma API URLs for images. These expire after 7 days.

**Action Required:**
- Download all images from Figma
- Create `public/assets/images/` folder
- Place images in appropriate subfolders (e.g., `services/`, `gallery/`, `hero/`)
- Update all image paths in components

**Example:**
```jsx
// Current (temporary)
src="https://www.figma.com/api/mcp/asset/..."

// Change to
src="/assets/images/services/framing-siding.jpg"
```

### 2. Configure Contact Form
The contact form currently logs to console.

**Action Required:**
- Set up backend API endpoint
- Update form submission in `src/pages/Contact.jsx`
- Add form validation
- Implement email notifications
- Add reCAPTCHA for spam protection

**Example Integration:**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', email: '', message: '', freeEstimate: false });
    }
  } catch (error) {
    alert('Error sending message. Please call us directly.');
  }
};
```

### 3. Add SEO Meta Tags
Add proper meta tags to `index.html` and consider using React Helmet.

**Recommended Meta Tags:**
```html
<meta name="description" content="JMC Construction & Remodeling - Family-owned construction company serving Texas since 2003. Licensed & insured. Free estimates." />
<meta name="keywords" content="construction, remodeling, San Antonio, Texas, roofing, painting, HVAC" />
<meta property="og:title" content="JMC Construction & Remodeling" />
<meta property="og:description" content="Quality construction and remodeling services since 2003" />
<meta property="og:image" content="/assets/images/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

### 4. Add Google Analytics
```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Integrate Service Area Map
Replace the placeholder map in `src/pages/Contact.jsx`

**Options:**
- Google Maps Embed API
- Mapbox
- Leaflet.js

**Google Maps Example:**
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### 6. Environment Variables
Create `.env` file for sensitive data:

```env
VITE_API_URL=https://api.jmcconstruction.com
VITE_GA_ID=GA_MEASUREMENT_ID
VITE_RECAPTCHA_SITE_KEY=your_site_key
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

### 7. Custom Fonts
The site uses custom fonts. Ensure they're properly loaded:

**Option 1: Google Fonts (Current)**
Already configured in `index.html`

**Option 2: Self-Host (Better Performance)**
1. Download font files
2. Place in `public/fonts/`
3. Update font-face declarations in `src/index.css`

### 8. Performance Optimization

**Image Optimization:**
```bash
# Install sharp for image optimization
npm install sharp
```

**Lazy Loading:**
Already implemented with native loading="lazy"

**Code Splitting:**
Already implemented via React Router

### 9. Testing Checklist

Before going live, test:
- [ ] All 17 pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu functions properly
- [ ] Contact form submits successfully
- [ ] All images load
- [ ] Responsive design works on:
  - [ ] Desktop (1920px+)
  - [ ] Laptop (1366px)
  - [ ] Tablet (768px)
  - [ ] Mobile (375px, 414px)
- [ ] Links work correctly
- [ ] Phone numbers are clickable
- [ ] SEO meta tags are present
- [ ] Page load speed is acceptable
- [ ] No console errors

### 10. Deployment

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Traditional Hosting:**
1. Build the project: `npm run build`
2. Upload `dist/` folder contents to your web server
3. Configure server for client-side routing (see below)

**Server Configuration for React Router:**

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Production Checklist

- [ ] Replace all Figma image URLs with actual images
- [ ] Configure contact form backend
- [ ] Add SEO meta tags
- [ ] Set up Google Analytics
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure service area map
- [ ] Set up environment variables
- [ ] Test on all devices and browsers
- [ ] Optimize images
- [ ] Configure CDN (if applicable)
- [ ] Set up SSL certificate
- [ ] Configure domain DNS
- [ ] Test contact form in production
- [ ] Submit to Google Search Console
- [ ] Create Google My Business listing

## Support

For questions or issues:
- Review the code comments
- Check React and Vite documentation
- Contact the development team

## License

© 2025 JMC Construction & Remodeling. All Rights Reserved.


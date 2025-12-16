# JMC Construction & Remodeling - Quick Start Guide

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:3000`

---

## That's It! 🎉

The website is now running locally on your machine.

---

## Available Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Create production build
npm run preview      # Preview production build

# Deployment
npm run deploy       # Deploy to production (configure first)
```

---

## Project Overview

### What's Included
- ✅ 17 fully functional pages
- ✅ Responsive design (Desktop, Tablet, Mobile)
- ✅ Pixel-perfect Figma conversion
- ✅ Modern React architecture
- ✅ Tailwind CSS styling
- ✅ React Router navigation

### Pages
1. Home
2. About Us
3. Why Choose Us
4. Services (Parent)
5-13. 9 Individual Service Pages
14. Gallery
15. Blog
16. FAQ
17. Contact

---

## Navigation Structure

```
Home (/)
├── About Us (/about)
├── Why Choose Us (/why-choose-us)
├── Services (/services)
│   ├── Framing & Siding (/services/framing-siding)
│   ├── Doors & Windows (/services/doors-windows)
│   ├── Electrical & Plumbing (/services/electrical-plumbing)
│   ├── HVAC & AC (/services/hvac)
│   ├── Flooring & Drywall (/services/flooring-drywall)
│   ├── Painting (/services/painting)
│   ├── Roofing (/services/roofing)
│   ├── Decks & Carports (/services/decks-carports)
│   └── Concrete & Masonry (/services/concrete-masonry)
├── Gallery (/gallery)
├── Blog (/blog)
├── FAQ (/faq)
└── Contact (/contact)
```

---

## Key Features to Test

### 1. Navigation
- Click through all menu items
- Test mobile menu (click "Menu" button on mobile)
- Verify all links work

### 2. Responsive Design
- Resize browser window
- Test on mobile device
- Check tablet view

### 3. Interactive Elements
- Hover over cards and buttons
- Open FAQ accordions
- Filter gallery images
- Fill out contact form

### 4. Contact Information
All phone numbers should be clickable:
- (210) 216-8022 - Español
- (210) 840-3360 - English
- (210) 502-4254 - Office

---

## Need Help?

### Common Issues

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
# Then run dev server again
npm run dev
```

**Module not found?**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear cache and rebuild
npm run build -- --force
```

---

## Documentation

For detailed information, see:
- `README.md` - Project overview
- `PROJECT_STRUCTURE.md` - File structure
- `SETUP_GUIDE.md` - Deployment guide
- `IMPLEMENTATION_SUMMARY.md` - Complete feature list

---

## Contact

**JMC Construction & Remodeling**
- 📞 Español: (210) 216-8022
- 📞 English: (210) 840-3360
- 📞 Office: (210) 502-4254
- ⏰ Monday–Saturday | 8:00 AM – 6:00 PM

---

## Next Steps

1. ✅ **Review** - Browse all 17 pages
2. ✅ **Test** - Try on different devices
3. ✅ **Customize** - Replace images and content
4. ✅ **Deploy** - Follow SETUP_GUIDE.md

---

Enjoy your new website! 🚀


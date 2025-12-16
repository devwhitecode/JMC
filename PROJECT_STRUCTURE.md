# JMC Construction & Remodeling - Project Structure

## Overview
This is a fully responsive, pixel-perfect React.js website for JMC Construction & Remodeling, converted from Figma designs.

## Technology Stack
- **React.js 18** - UI Library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server

## Project Structure

```
JMC/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.jsx    # Main navigation header
│   │   │   ├── Footer.jsx    # Site footer
│   │   │   └── MobileMenu.jsx # Mobile navigation
│   │   └── common/           # Reusable components
│   │       ├── Button.jsx    # Button component
│   │       ├── ServiceCard.jsx # Service card component
│   │       ├── StatsCard.jsx # Statistics card
│   │       └── ServiceTemplate.jsx # Service page template
│   ├── pages/                # All page components
│   │   ├── Home.jsx          # Homepage
│   │   ├── AboutUs.jsx       # About page
│   │   ├── WhyChooseUs.jsx   # Why choose us page
│   │   ├── Gallery.jsx       # Gallery page
│   │   ├── Blog.jsx          # Blog listing page
│   │   ├── FAQ.jsx           # FAQ page with accordion
│   │   ├── Contact.jsx       # Contact form page
│   │   └── Services/         # Service pages
│   │       ├── ServicesParent.jsx    # Services overview
│   │       ├── FramingSiding.jsx     # Service detail page
│   │       ├── DoorsWindows.jsx      # Service detail page
│   │       ├── ElectricalPlumbing.jsx # Service detail page
│   │       ├── HVAC.jsx              # Service detail page
│   │       ├── FlooringDrywall.jsx   # Service detail page
│   │       ├── Painting.jsx          # Service detail page
│   │       ├── Roofing.jsx           # Service detail page
│   │       ├── DecksCarports.jsx     # Service detail page
│   │       └── ConcreteMasonry.jsx   # Service detail page
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .gitignore                # Git ignore file
└── README.md                 # Project documentation
```

## Pages (17 Total)

### 1. Home (`/`)
- Hero section with company tagline
- Stats section (20+ years, 1500+ projects, 9+ cities)
- Features overview
- Services grid (9 services)
- About section preview
- Gallery preview
- CTA section

### 2. About Us (`/about`)
- Company history since 2003
- Family-owned values
- Service coverage map
- Certifications and licenses

### 3. Why Choose Us (`/why-choose-us`)
- 6 key differentiators
- Trust signals
- Comparison table
- CTA section

### 4. Our Services (`/services`)
- Services overview
- All 9 services displayed
- Service benefits
- CTA section

### 5-13. Individual Service Pages
- `/services/framing-siding`
- `/services/doors-windows`
- `/services/electrical-plumbing`
- `/services/hvac`
- `/services/flooring-drywall`
- `/services/painting`
- `/services/roofing`
- `/services/decks-carports`
- `/services/concrete-masonry`

Each service page includes:
- Hero section with service image
- Features grid
- Benefits section
- Process steps
- Gallery of related projects
- CTA section

### 14. Gallery (`/gallery`)
- Filterable project gallery
- Categories: All, Residential, Commercial, Remodeling, Exterior, Interior
- Responsive grid layout
- Image hover effects
- Stats section

### 15. Blog (`/blog`)
- Featured post
- Blog listing grid
- Category filters
- Pagination
- Newsletter signup
- Sample blog posts

### 16. FAQ (`/faq`)
- Accordion-style questions
- 6 categories:
  - General Questions
  - Services & Projects
  - Cost & Estimates
  - Timeline & Process
  - Communication & Service
  - Quality & Warranty
- Contact information
- CTA section

### 17. Contact (`/contact`)
- Contact form (Name, Phone, Email, Message)
- Free estimate checkbox
- Three phone numbers listed
- Business hours
- Service area information
- Bilingual support highlighted
- Map placeholder

## Key Features

### Responsive Design
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (< 768px)
- All breakpoints match Figma designs

### Components
- **Header**: Fixed navigation with mobile menu
- **Footer**: Comprehensive footer with all links
- **MobileMenu**: Full-screen mobile navigation
- **Button**: Reusable button with variants
- **ServiceCard**: Service display cards
- **StatsCard**: Statistics display
- **ServiceTemplate**: Reusable template for service pages

### Color Palette
- Primary: #ECB373 (Gold)
- Primary Light: #EBBB78
- Primary Dark: #9F7B49
- Dark: #000000
- Neutral Light: #FAF5EF
- White: #FFFFFF

### Typography
- Display: NCS Radhiumz (custom font)
- Body: Poppins
- Alt: Montserrat

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact Information

**JMC Construction & Remodeling**
- Español: (210) 216-8022 – Mattew Cano
- English: (210) 840-3360 – Joe Mora
- Office: (210) 502-4254 – Julio Vasaldua
- Hours: Monday–Saturday | 8:00 AM – 6:00 PM

## Service Areas
San Antonio, TX (HQ) | Austin | Houston | Dallas | Fort Worth | Odessa | Louisiana | Alabama

## Notes
- All images are sourced from Figma API (expire after 7 days)
- Replace with actual images before production deployment
- Forms currently log to console - integrate with backend API
- SEO meta tags should be added for production
- Consider adding Google Analytics
- Add sitemap.xml for SEO
- Implement actual map integration for service area

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization
- Images should be optimized (WebP format recommended)
- Lazy loading implemented for images
- Code splitting via React Router
- Minified production build


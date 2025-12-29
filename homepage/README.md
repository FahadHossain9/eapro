# EAPRO Homepage - Lifestyle Oriented Design

A modern, lifestyle-oriented homepage for EAPRO, designed to promote Indian products and connect with Indian families.

## 🎯 Project Overview

This Next.js project transforms EAPRO's website from B2B-focused to lifestyle-oriented, emphasizing:
- **Made in India** messaging
- **Home and family** use cases
- **Consumer-friendly** language
- **Lifestyle imagery** and stories
- **Indian pride** and heritage

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd homepage
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
homepage/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   └── sections/
│       ├── HeroSection.tsx
│       ├── WhyChooseSection.tsx
│       ├── ProductsSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── StoriesSection.tsx
│       ├── MadeInIndiaSection.tsx
│       ├── SmartFeaturesSection.tsx
│       ├── CalculatorSection.tsx
│       ├── SupportSection.tsx
│       ├── BlogSection.tsx
│       └── FinalCTASection.tsx
└── public/                 # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#1a4d2e` - Trust, growth, nature
- **Accent Gold**: `#d4af37` - Premium, warmth, Indian heritage
- **Background Cream**: `#f5f5dc` - Warmth, comfort
- **Text**: Dark Green, White, Gold

### Typography
- Clean, modern sans-serif fonts
- Clear hierarchy with varying weights
- Excellent readability

## 📋 Homepage Sections

1. **Hero Section** - "Power Your Home, Power Your Life"
2. **Why Choose EAPRO?** - Key features with lifestyle imagery
3. **Products for Your Home** - Consumer product showcase
4. **How It Works** - Simple 3-step process
5. **Stories from Indian Families** - Customer testimonials
6. **Made in India** - Indian pride and heritage
7. **Smart Features** - Technology benefits
8. **Energy Savings Calculator** - Interactive tool
9. **Installation & Support** - Service excellence
10. **Blog Section** - Consumer education
11. **Final CTA** - Conversion banner

## 🔧 WordPress Optimization

This design is optimized for WordPress export:

- **Modular Components**: Each section is a separate component, easy to convert to WordPress blocks
- **Content Management**: Text content is easily editable
- **Image Placeholders**: Clear placeholders for lifestyle images
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Friendly**: Proper semantic HTML and metadata

## 📝 Content Notes

### Image Placeholders
All sections include placeholder indicators where lifestyle images should be placed:
- Indian families in modern homes
- Home installations
- Product usage in home settings
- Indian lifestyle contexts

### Text Content
All text is consumer-friendly, avoiding technical jargon:
- Focus on benefits, not features
- Lifestyle-oriented language
- Emotional connection
- Indian context throughout

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Modern, clean UI
- ✅ Lifestyle-oriented content
- ✅ Indian heritage emphasis
- ✅ Consumer-focused messaging
- ✅ Interactive calculator
- ✅ Testimonials section
- ✅ Blog/resources section
- ✅ Comprehensive footer

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted

## 📄 License

This project is created for EAPRO.

## 👥 Development Notes

- All components use TypeScript
- Tailwind CSS for styling
- Next.js App Router
- Client components marked with 'use client' where needed
- Server components by default for better performance

## 🔄 Next Steps

1. Replace placeholder images with actual lifestyle photography
2. Connect forms to backend/CRM
3. Add actual blog content
4. Implement search functionality
5. Add animations/transitions
6. Optimize images
7. Add analytics
8. Export to WordPress format if needed

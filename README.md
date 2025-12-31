# M I Multipurpose Enterprise Website

A modern, responsive Next.js website for M I Multipurpose Enterprise - a poultry and livestock farm based in Benin City, Edo State, Nigeria.

## Features

- **Next.js 14** - React framework with app router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Responsive Design** - Works on all devices
- **Optimized Images** - Next.js Image optimization
- **SEO Friendly** - Meta tags and semantic HTML
- **Vercel Ready** - Deploy instantly to Vercel

## Project Structure

```
mienterprise/
├── public/
│   └── images/              # Image assets
│       └── IMAGE_REQUIREMENTS.md  # Image guide
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/          # React components
│       ├── Navbar.tsx       # Navigation bar
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Products.tsx     # Products showcase
│       ├── WhyChoose.tsx    # Benefits section
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── vercel.json             # Vercel deployment config
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ (Download from https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Adding Images

**IMPORTANT:** For the best visual experience, add your farm images!

1. Add your hero background image:
   - Place image at: `/public/images/hero-background.jpg`
   - Recommended: 1920x1080px, JPG or WebP format
   - Subject: Your poultry farm, chickens, or livestock

2. See full image guide: [public/images/IMAGE_REQUIREMENTS.md](public/images/IMAGE_REQUIREMENTS.md)

## Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy!

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables

If you add a contact form backend or analytics, set environment variables in Vercel:

- Go to your project settings
- Add variables under "Environment Variables"
- Redeploy to apply changes

## Website Sections

1. **Hero** - Eye-catching banner with call-to-action
2. **About** - Business overview and key features
3. **Products** - Complete product catalog:
   - Live Broilers (4 & 8 weeks)
   - Layers
   - Goats
   - Frozen Chicken & Parts
   - Fresh Eggs
   - Organic Manure
4. **Why Choose Us** - Value propositions
5. **Contact** - Location info and contact form
6. **Footer** - Quick links and info

## Customization

### Colors

Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: {
    DEFAULT: '#2e7d32',  // Change these!
    dark: '#1b5e20',
    light: '#4caf50',
  },
}
```

### Content

Edit the component files in `/src/components/`:
- [Hero.tsx](src/components/Hero.tsx) - Main headline
- [About.tsx](src/components/About.tsx) - About text
- [Products.tsx](src/components/Products.tsx) - Product listings
- [Contact.tsx](src/components/Contact.tsx) - Contact info

### Contact Form

The contact form is **fully functional** and sends emails to **oldmankola@gmail.com** using Resend.

**Setup required:**
1. Get a free Resend API key from [resend.com](https://resend.com)
2. Add `RESEND_API_KEY` to your environment variables
3. See detailed setup guide: [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)

**Features:**
- Email notifications to oldmankola@gmail.com
- Professional HTML email template
- Form validation
- Reply-to set to customer's email
- Loading states and error handling

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Resend** - Email service for contact form
- **Vercel** - Hosting platform

## Contact Information

**M I Multipurpose Enterprise**
No. 3 Ogbebor Street
Off New Road, Ugbighoko Quarters
Upper Ekenhua Road
Benin City, Edo State
Nigeria

## License

ISC License

## Support

For issues or questions about the website code, check:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs

---

Built with Next.js + TypeScript + Tailwind CSS
Ready for Vercel deployment!

# Deployment Checklist

Complete these steps to deploy your M I Multipurpose Enterprise website to Vercel.

## Pre-Deployment Checklist

### 1. Images ✅
- [x] Hero background image added
- [x] Product images added (all 6)
- [x] About farm image added

### 2. Contact Form Setup

- [ ] Create Resend account at [resend.com](https://resend.com)
- [ ] Get API key from [resend.com/api-keys](https://resend.com/api-keys)
- [ ] Copy the API key (starts with `re_`)

## Vercel Deployment Steps

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: M I Multipurpose Enterprise website"
git branch -M main
git remote add origin https://github.com/yourusername/mienterprise.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `mienterprise` repository
5. Vercel will auto-detect Next.js settings
6. **Before deploying**, add environment variable:
   - Click "Environment Variables"
   - Add:
     - **Name**: `RESEND_API_KEY`
     - **Value**: Your Resend API key
7. Click "Deploy"
8. Wait 2-3 minutes for deployment

### Step 3: Test Your Site

1. Visit your deployed URL (e.g., `mienterprise.vercel.app`)
2. Test the contact form:
   - Fill out all fields
   - Click "Send Message"
   - Check oldmankola@gmail.com for the email
3. Test on mobile devices
4. Test all navigation links

### Step 4: Custom Domain (Optional)

If you have a custom domain:

1. Go to your Vercel project
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records at your domain provider
5. Wait for DNS propagation (up to 48 hours)

## Post-Deployment

### Verify Everything Works

- [ ] Website loads properly
- [ ] All images display correctly
- [ ] Navigation menu works
- [ ] All sections scroll smoothly
- [ ] Contact form sends emails
- [ ] Mobile responsive design works
- [ ] Colors look correct (earth tones)

### Optional Improvements

- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Verify domain with Resend for better email deliverability
- [ ] Add social media links to footer
- [ ] Create sitemap for SEO
- [ ] Add meta tags for social sharing

## Environment Variables Summary

Only one environment variable needed:

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `RESEND_API_KEY` | Your Resend API key | [resend.com/api-keys](https://resend.com/api-keys) |

## Need Help?

- Vercel deployment issues: [vercel.com/docs](https://vercel.com/docs)
- Contact form setup: See [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)
- Next.js issues: [nextjs.org/docs](https://nextjs.org/docs)

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build
npm run build        # Create production build
npm start           # Run production build locally

# Type checking
npm run type-check  # Check TypeScript types
```

---

**Estimated deployment time:** 5-10 minutes

**Cost:** Free (Vercel free tier + Resend free tier)

Once deployed, your website will be live at: `https://your-project.vercel.app`

# Contact Form Setup Guide

The contact form is configured to send emails to **oldmankola@gmail.com** using Resend email service.

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address
4. Go to [API Keys](https://resend.com/api-keys)
5. Click "Create API Key"
6. Give it a name (e.g., "M I Enterprise Website")
7. Copy the API key (starts with `re_`)

### 2. Add API Key to Environment Variables

#### For Local Development:

Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### For Vercel Deployment:

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environment**: Production, Preview, Development (select all)
5. Click **Save**
6. Redeploy your site for changes to take effect

### 3. Verify Domain (Optional but Recommended)

For production use, verify your domain with Resend:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `mienterprise.com`)
4. Add the DNS records to your domain provider
5. Wait for verification (usually takes a few minutes)

**Benefits of domain verification:**
- Emails come from your domain instead of `onboarding@resend.dev`
- Better deliverability
- More professional appearance
- Higher sending limits

After verification, update the API route at [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
from: 'M I Multipurpose Enterprise <contact@yourdomain.com>',
```

### 4. Test the Contact Form

#### Local Testing:

```bash
npm run dev
```

1. Open http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form
4. Click "Send Message"
5. Check oldmankola@gmail.com for the email

#### Production Testing:

After deploying to Vercel, test the live site the same way.

## How It Works

1. User fills out the contact form
2. Form data is sent to `/api/contact` API route
3. API route validates the data
4. Resend sends a formatted email to oldmankola@gmail.com
5. Email includes:
   - Customer's name
   - Customer's email (set as reply-to)
   - Customer's phone number
   - Their message
6. User sees success message

## Email Template

The email sent includes:
- Professional HTML formatting
- Your brand colors (brown theme)
- All contact details
- Easy reply option (reply-to is set to customer's email)

## Troubleshooting

### "Failed to send email" error

1. **Check API Key**: Verify `RESEND_API_KEY` is set correctly
2. **Check Resend Dashboard**: Look for error messages
3. **Check Console**: Look at terminal/Vercel logs for errors
4. **Rate Limits**: Free tier has 100 emails/day limit

### Email not received

1. **Check spam folder** in oldmankola@gmail.com
2. **Verify Resend Dashboard**: Check if email was sent
3. **Domain verification**: For better deliverability

### Local development not working

1. Make sure `.env.local` exists with the API key
2. Restart the development server after adding `.env.local`
3. Don't commit `.env.local` to git (it's in `.gitignore`)

## Pricing

**Resend Pricing:**
- **Free**: 100 emails/day, 3,000/month
- **Paid**: $20/month for 50,000 emails

For a contact form, the free tier is usually sufficient!

## Changing Recipient Email

To send emails to a different address, update line 27 in [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
to: 'newemail@example.com',
```

## Security

- API key is stored in environment variables (not in code)
- Form validation on both client and server side
- Rate limiting handled by Resend
- Email addresses validated with regex
- HTML email sanitizes user input

---

## Quick Start Checklist

- [ ] Create Resend account
- [ ] Get API key
- [ ] Add `RESEND_API_KEY` to `.env.local` for development
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Test the form locally
- [ ] Deploy to Vercel
- [ ] Test on production
- [ ] (Optional) Verify domain for better deliverability

Need help? Check [Resend Documentation](https://resend.com/docs)

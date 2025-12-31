# Image Requirements for M I Multipurpose Enterprise Website

## Required Images

### 1. Hero Background Image
**File:** `hero-background.jpg`
**Location:** `/public/images/hero-background.jpg`
**Purpose:** Main background image for the hero section (homepage banner)
**Recommended Specifications:**
- Dimensions: 1920x1080px (or higher resolution)
- Format: JPG or WebP
- Subject: Poultry farm scene, chickens, farm landscape, or livestock
- Style: Professional, bright, welcoming
- File size: Optimized (< 500KB recommended)

**Example Image Ideas:**
- Wide shot of your poultry farm with chickens
- Rows of chicken coops with birds
- Green farmland with livestock
- Healthy chickens in a clean environment
- Your actual farm facility

---

## Optional Images (Recommended for Better Visual Appeal)

### 2. Product Images
**Location:** `/public/images/products/`
These images can enhance the Products section:

- `broilers.jpg` - Live broilers (4-8 weeks old)
- `layers.jpg` - Layer chickens
- `goats.jpg` - Your goats
- `frozen-chicken.jpg` - Frozen chicken products
- `eggs.jpg` - Fresh eggs in baskets/cartons
- `manure.jpg` - Organic manure bags/product

**Specifications:**
- Dimensions: 600x400px minimum
- Format: JPG or WebP
- Style: Clean, professional product photos
- File size: < 200KB each

### 3. About Section Image (Optional)
**File:** `about-farm.jpg`
**Location:** `/public/images/about-farm.jpg`
- Could show the farm owner, staff, or farm facilities
- Dimensions: 800x600px
- Builds trust and personal connection

### 4. Gallery Images (Future Enhancement)
**Location:** `/public/images/gallery/`
- Multiple images of your farm operations
- Happy customers
- Farm activities
- Different livestock and products

---

## How to Add Images

1. **Save your images** in the `/public/images/` folder
2. **Use the exact filenames** listed above, OR
3. **Update the component** with your actual filename:
   - Open `/src/components/Hero.tsx`
   - Change line 12: `src="/images/hero-background.jpg"` to your filename

## Temporary Placeholder

Currently, the hero section uses a blur placeholder. The site will work without images, but adding the hero background image will significantly improve the visual appeal.

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB for hero, < 200KB for others

2. **Use WebP format** for better performance:
   - Next.js automatically optimizes images
   - WebP provides better compression than JPG

3. **Proper dimensions**:
   - Don't upload images larger than needed
   - Next.js will handle responsive sizing

## Free Stock Image Resources (If You Need Placeholders)

- Unsplash: https://unsplash.com/s/photos/poultry-farm
- Pexels: https://pexels.com/search/chicken-farm/
- Pixabay: https://pixabay.com/images/search/poultry/

**Note:** Use real photos of YOUR farm for best results and authenticity!

---

## Current Status

✅ Image folder created: `/public/images/`
⏳ Waiting for: `hero-background.jpg` (most important)
⏳ Optional: Product images to enhance visual appeal

The website will function without images, but adding at least the hero background will make it much more professional and engaging.

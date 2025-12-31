# Color Scheme - M I Multipurpose Enterprise

## Earth Tones Theme

The website uses a warm, natural earth tones palette that reflects organic farming and sustainability.

### Color Palette

#### Primary Colors (Rich Brown)
- **Primary**: `#8B4513` (SaddleBrown) - Main brand color
- **Primary Dark**: `#5D2E0F` - Deep brown for depth
- **Primary Light**: `#A0522D` (Sienna) - Lighter brown accents

#### Secondary Color (Chocolate/Rust)
- **Secondary**: `#D2691E` (Chocolate) - Call-to-action buttons
- **Secondary Dark**: `#B8531A` - Darker chocolate for hover states

#### Accent Colors (Tan/Wheat)
- **Accent**: `#CD853F` (Peru) - Highlights and decorative elements
- **Accent Light**: `#DEB887` (BurlyWood) - Subtle backgrounds

### Where Colors Are Used

#### Hero Section
- Background gradient overlay: Primary dark → Primary → Secondary
- Creates warm, inviting atmosphere

#### About Section
- Feature cards: Accent light gradient backgrounds
- Icons: Secondary color
- Borders: Subtle accent color

#### Products Section
- Background: Gradient from accent-light to white
- Product cards: White with clean borders
- Creates fresh, approachable feel

#### Why Choose Section
- Number indicators: Accent color with opacity
- Hover effects: Warm accent gradient

#### Contact Section
- Background: Gradient to accent-light
- Maintains consistency throughout

#### Footer
- Rich brown gradient (Primary dark → Primary)
- Accent-light text highlights
- Professional, grounded finish

### Color Psychology

**Earth Tones** communicate:
- ✅ Natural and organic
- ✅ Trustworthy and reliable
- ✅ Warm and welcoming
- ✅ Connected to agriculture/farming
- ✅ Sustainable and eco-friendly

### Customizing Colors

To change colors, edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    DEFAULT: '#8B4513',  // Change to your preferred brown
    dark: '#5D2E0F',
    light: '#A0522D',
  },
  secondary: {
    DEFAULT: '#D2691E',  // Change to your preferred accent
    dark: '#B8531A',
  },
  accent: {
    DEFAULT: '#CD853F',
    light: '#DEB887',
  },
}
```

After changing colors, rebuild:
```bash
npm run build
```

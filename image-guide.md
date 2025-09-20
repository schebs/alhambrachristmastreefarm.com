# Farm Photo Implementation Guide

## Directory Structure
The `images/` folder has been created in your website root directory. Add your farm photos with these filenames:

```
images/
├── hero.webp               # Main hero image (like the tractor/lights photo you showed) ✅
├── logo.webp               # Farm logo (converted from HEIC) ✅
├── Transparent Round Logo.heic  # Original logo file ✅
├── farm-trees.jpg         # Additional tree field photos
├── farm-family.jpg        # Family working together
├── farm-cutting.jpg       # Customers selecting/cutting trees
├── farm-vintage.jpg       # Historical farm photos for timeline
└── farm-wreaths.jpg       # Wreath making or holiday displays
```

## Photo Recommendations

### Main Hero Image (1200x600px recommended):
- **hero.webp**: Use a photo similar to the one you showed with the red tractor, string lights, and Christmas trees. This single image will be used across all pages to create a consistent, magical farm atmosphere. ✅ Added

### Logo:
- **logo.webp**: Your transparent round logo, automatically converted from HEIC format. Displays at 60px x 60px on desktop, 50px x 50px on mobile. ✅ Added

### Additional Background Photos:
- **farm-trees.jpg**: Beautiful tree field shots
- **farm-family.jpg**: Family portraits or working shots
- **farm-cutting.jpg**: Happy customers selecting trees
- **farm-vintage.jpg**: Historical photos for the timeline section
- **farm-wreaths.jpg**: Wreath displays or making process

## Technical Specifications

### Image Requirements:
- **Format**: JPG or PNG
- **Resolution**: 1200x600px minimum for hero images
- **File Size**: Optimize to under 500KB each for fast loading
- **Quality**: High resolution but web-optimized

### Background Image Classes Available:

1. **Hero Sections** (automatically applied):
   - All hero sections (`.home-hero`, `.gallery-hero`, `.trees-hero`, `.about-hero`, `.history-hero`, `.video-hero`) → hero.webp

2. **Optional Section Backgrounds** (add to any section):
   - `.farm-background` → Base class for farm photo backgrounds
   - `.farm-trees-background` → farm-trees.jpg
   - `.farm-family-background` → farm-family.jpg
   - `.farm-cutting-background` → farm-cutting.jpg
   - `.farm-vintage-background` → farm-vintage.jpg
   - `.farm-wreaths-background` → farm-wreaths.jpg

## How to Add Photos:

1. **Upload photos to GitHub**:
   - The `images/` folder is already created
   - Upload your main farm photo as `hero.webp`
   - Add any additional photos with the names listed above

2. **Photos will automatically display**:
   - `hero.webp` will appear on all page heroes (Home, Gallery, Trees, About, History, Video pages)
   - Creates consistent branding across your entire website

3. **Optional: Add farm backgrounds to other sections**:
   ```html
   <section class="farm-background farm-trees-background">
       <!-- Your content here -->
   </section>
   ```

## CSS Styling Applied:
- Solid forest green fallback color
- Semi-transparent dark overlay for text readability
- Background images cover the full section
- Text remains easily readable with proper contrast
- Mobile responsive scaling

The design maintains your warm, rustic Christmas tree farm atmosphere while showcasing your beautiful property and family tradition through real photography.
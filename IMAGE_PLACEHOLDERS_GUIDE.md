# Image Placeholders Guide

This document lists all the image placeholders that need to be replaced with actual images in the Share India Insurance Brokers website.

## About Page Images

### Hero Background

- **Location**: `/public/images/about/hero-background.jpg`
- **Description**: Professional office or team meeting background
- **Usage**: About page hero section background
- **Dimensions**: Full screen background (1920x1080 recommended)

### Leadership Images

- **Location**: `/public/images/leadership/ajaykumar-patel-ceo.jpg`
- **Description**: Professional headshot of CEO Ajaykumar Patel
- **Usage**: Leadership section - CEO profile photo
- **Dimensions**: 320x384px (portrait orientation)

### Team Member Images

All team member images should be professional headshots in `/public/images/team/` directory:

1. `/public/images/team/mahesh-harmalkar.jpg` - Professional headshot of Mahesh Harmalkar
2. `/public/images/team/vidhi-shah.jpg` - Professional headshot of Vidhi Shah
3. `/public/images/team/rajendra-muppidwar.jpg` - Professional headshot of Rajendra Muppidwar
4. `/public/images/team/raunaq-pai.jpg` - Professional headshot of Raunaq Pai
5. `/public/images/team/shekhar-pradhan.jpg` - Professional headshot of Shekhar Pradhan
6. `/public/images/team/manish-chavan.jpg` - Professional headshot of Manish Chavan
7. `/public/images/team/vishal-more.jpg` - Professional headshot of Vishal More
8. `/public/images/team/akash-agam.jpg` - Professional headshot of Akash Agam

**Dimensions**: 64x64px (square, will be displayed in circular format)

### Award Images

All award images should be in `/public/images/awards/` directory:

1. `/public/images/awards/award-2023.jpg` - IRDAI Recognition trophy/certificate image
2. `/public/images/awards/award-2022.jpg` - Insurance Today Excellence award image
3. `/public/images/awards/award-2021.jpg` - Business India Top 10 award image
4. `/public/images/awards/award-2020.jpg` - FinServ Innovation award image

**Dimensions**: 64x64px (square, displayed with padding)

### Client Testimonial Images

All client images should be professional headshots in `/public/images/clients/` directory:

1. `/public/images/clients/priya-menon.jpg` - Professional headshot of Priya Menon
2. `/public/images/clients/arjun-verma.jpg` - Professional headshot of Arjun Verma
3. `/public/images/clients/kavita-iyer.jpg` - Professional headshot of Kavita Iyer
4. `/public/images/clients/rajesh-kumar.jpg` - Professional headshot of Rajesh Kumar
5. `/public/images/clients/sneha-patel.jpg` - Professional headshot of Sneha Patel
6. `/public/images/clients/amit-sharma.jpg` - Professional headshot of Amit Sharma

**Dimensions**: 48x48px (square, will be displayed in circular format)

## Retail Page Images

### Hero Background

- **Location**: `/public/images/retail/hero-background.jpg`
- **Description**: Happy family or individual with insurance protection theme
- **Usage**: Retail page hero section background
- **Dimensions**: Full screen background (1920x1080 recommended)

## Industry Pages Images

Both Life Sciences & Pharma and Real Estate industry pages currently use:

- **Location**: `https://minio-api.internal.wabisabitech.in/share-india/blog/construction.jpg`
- **Description**: Construction/business background image
- **Usage**: Hero section backgrounds
- **Note**: These are already using external URLs and may not need replacement

## Image Requirements

### General Guidelines

- All images should be high quality and professional
- Use consistent lighting and style across team member photos
- Award images should be clear and recognizable
- Client photos should look professional and trustworthy
- Background images should be high resolution for crisp display

### File Formats

- Preferred: JPG for photographs
- Alternative: PNG for images with transparency
- WebP can be used for better compression

### Optimization

- Compress images appropriately for web use
- Maintain aspect ratios as specified
- Consider providing 2x versions for high-DPI displays

## Implementation Notes

1. Create the directory structure in `/public/images/` as specified
2. Replace placeholder images with actual professional photos
3. Ensure all images are properly optimized for web
4. Test image loading and display across different devices
5. Consider adding alt text descriptions for accessibility

## Fallback Strategy

If specific images are not available:

- Team members: Use professional placeholder avatars with initials
- Awards: Use generic trophy/certificate icons
- Clients: Use professional placeholder avatars
- Backgrounds: Use solid color gradients or generic business imagery

This structure ensures the website remains functional while providing clear guidance for image replacement.

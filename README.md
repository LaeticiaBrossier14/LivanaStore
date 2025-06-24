# LivanaStore Shopify Theme

Welcome to the LivanaStore Shopify theme! This document provides an overview of the theme's features and how to customize them.

## Theme Architecture

LivanaStore is built on the Shopify Skeleton Theme, ensuring a modern, clean, and maintainable codebase. The theme is designed to be fully responsive and optimized for performance and accessibility.

## Key Features

- **Modern, Feminine Design**: A clean and elegant design, perfect for fashion and lifestyle brands.
- **AJAX Filtering**: Smooth and fast product filtering on collection pages without page reloads.
- **Mega Menu**: A customizable mega menu for easy navigation.
- **Predictive Search**: Fast and accurate search results as you type.
- **Performance Optimized**: Lazy-loaded images, deferred scripts, and critical CSS for fast loading times.
- **Accessibility Ready**: Semantic HTML, high-contrast colors, and keyboard navigation support.

## Section Reference

| Section | Description |
|---|---|
| `header-livana.liquid` | The theme's header, with a customizable logo and mega menu. |
| `footer-livana.liquid` | A modular footer with configurable columns for menus, social media, and a newsletter. |
| `hero-livana.liquid` | A full-width hero banner with a slider and call-to-action. |
| `featured-collection-livana.liquid`| A grid of products from a selected collection. |
| `main-product-livana.liquid` | The product page template with an image gallery, variants, and an accordion for details. |
| `main-collection-livana.liquid` | The collection page with AJAX filtering and sorting. |
| `testimonials-livana.liquid` | A section to showcase customer testimonials. |
| `lookbook.liquid` | A visual grid for creating a lookbook. |

## Customization

All theme sections are customizable through the Shopify Theme Editor. You can change colors, fonts, images, and more.

### Header

To customize the header, go to the Theme Editor and select the "Header - Livana" section. You can:
- Upload your logo.
- Adjust the logo width.
- Select the menu to be displayed.

### Footer

The footer is built with blocks. You can add, remove, and reorder columns for:
- **Menus**: Display a link list.
- **Social Media**: Show your social media icons.
- **Newsletter**: A sign-up form for your newsletter.

## Performance & Accessibility

The theme has been optimized for performance and accessibility. Images are lazy-loaded, scripts are deferred, and color contrasts meet WCAG AA standards. It is recommended to run regular audits with tools like Lighthouse to maintain a high standard.

## Development

The theme's styles are centralized in `assets/style.css`. When making code changes, please follow the conventions established in the theme. 
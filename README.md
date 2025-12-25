# Aviation Integration Specialist Website

A professional marketing website showcasing integration and automation services for the aviation industry.

## Features

- **Modern Design**: Built following a comprehensive style guide with professional aesthetics
- **Dark Mode**: Full dark mode support with theme toggle
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Subtle scroll-reveal animations and smooth transitions
- **Accessibility**: WCAG 2.1 Level AA compliant
- **Performance**: Optimized for fast loading and great Lighthouse scores

## Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **GitHub Pages**: Static site hosting

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
website/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles and design system
├── components/          # React components
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Button.tsx       # Button component
│   ├── Card.tsx         # Card component
│   └── ...
├── lib/                 # Utility functions
│   └── theme.ts         # Theme management
└── public/              # Static assets
    ├── logos/           # Service logos
    └── images/          # Images
```

## Deployment

The site is configured for GitHub Pages deployment via GitHub Actions. 

### Manual Deployment

1. Build the site: `npm run build`
2. The static files will be in the `out/` directory
3. Deploy the `out/` directory to your hosting provider

### GitHub Pages

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when pushing to the `main` branch.

## Design System

The website follows a comprehensive design system including:

- **Colors**: Primary blue palette with light/dark mode variants
- **Typography**: Inter font family with responsive scale
- **Spacing**: 8px base unit system
- **Components**: Buttons, cards, forms styled per guidelines

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

[Your License Here]

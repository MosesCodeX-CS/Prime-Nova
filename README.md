# Prime Nova

A modern Next.js website for Prime Nova.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages automatically. Follow these steps:

1. **Create a GitHub repository** (if you haven't already)
2. **Push your code** to the main branch
3. **Enable GitHub Pages**:
   - Go to your repository's Settings
   - Click on "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

### Manual Deployment

If you want to deploy manually:

```bash
# Install dependencies
npm install

# Build and export the static site
npm run build
npm run export

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

- `/app` - Contains all the page components
- `/public` - Static files like images and fonts
- `/src` - Source code

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

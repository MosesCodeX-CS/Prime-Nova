# Primenova - Production-Ready Next.js Website

A modern, professional website built with Next.js 14, TypeScript, and Tailwind CSS. This project follows industry best practices for performance, accessibility, and developer experience.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Authentication**: NextAuth.js
- **Testing**: Vitest + Testing Library
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
primenova/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── blog/              # Blog pages
│   └── dashboard/         # Protected dashboard
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page-specific sections
├── lib/                  # Utilities and configurations
├── styles/               # Global styles
├── public/               # Static assets
├── .github/workflows/    # CI/CD workflows
└── test/                 # Test setup and utilities
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd primenova
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables (see Environment Variables section)

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database (if using)
DATABASE_URL=your-database-url

# CMS (Sanity/Strapi)
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret
```

## 🎨 Design System

The project uses a custom design system built with Tailwind CSS:

- **Primary Colors**: Blue palette for main brand elements
- **Secondary Colors**: Gray palette for text and backgrounds  
- **Accent Colors**: Yellow palette for highlights and CTAs
- **Typography**: Inter font family with Cal Sans for headings
- **Spacing**: Consistent spacing scale
- **Animations**: Framer Motion for smooth interactions

## 📱 Features

### Core Pages
- **Homepage**: Hero section, value propositions, key stats
- **About**: Company story, team, timeline, values
- **Services**: Detailed service offerings with pricing
- **Blog**: SSG blog with tag filtering and search
- **Contact**: Contact form with validation and reCAPTCHA
- **Portfolio**: Case studies with filtering and modals

### Interactive Features
- Responsive navigation with mobile hamburger menu
- Smooth page transitions and micro-interactions
- Accessible dropdowns and modals
- Search functionality
- Newsletter signup with double opt-in
- Contact forms with validation

### Performance & SEO
- Optimized images with Next.js Image component
- Static generation for blog posts
- Open Graph and Twitter Card meta tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Component testing with Vitest
- **Integration Tests**: API route testing
- **E2E Tests**: User flow testing (to be added)
- **Type Checking**: TypeScript strict mode

Run tests:
```bash
pnpm test              # Run all tests
pnpm test:ui          # Run with UI
pnpm test:coverage    # Run with coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Configure environment variables in Vercel dashboard

2. **Automatic Deployments**
   - Production: Deploys from `main` branch
   - Preview: Deploys from pull requests

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 🔒 Security

- HTTPS enforced in production
- Security headers configured
- Environment variables for sensitive data
- Input validation and sanitization
- Rate limiting on API routes
- CSRF protection

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance
- Semantic HTML structure

## 📊 Performance

- Lighthouse score optimization
- Core Web Vitals monitoring
- Image optimization
- Code splitting
- Bundle size optimization
- CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use ESLint and Prettier
- Write tests for new features
- Follow accessibility best practices
- Optimize for performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Project setup and configuration
- [x] Basic layout and components
- [x] CI/CD pipeline
- [x] Testing setup

### Phase 2: Core Features (In Progress)
- [ ] CMS integration (Sanity/Strapi)
- [ ] Authentication system
- [ ] Contact forms
- [ ] Blog functionality

### Phase 3: Advanced Features
- [ ] Dashboard for clients
- [ ] E-commerce integration
- [ ] Advanced analytics
- [ ] Multi-language support

### Phase 4: Optimization
- [ ] Performance optimization
- [ ] SEO enhancement
- [ ] Advanced testing
- [ ] Monitoring and analytics

---

Built with ❤️ using Next.js and modern web technologies.

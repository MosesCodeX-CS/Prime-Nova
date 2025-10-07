import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { ThemeProvider } from '@/lib/theme';
import { AIChatButton } from '@/components/ui/AIChatButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Primenova - Innovative Solutions for Modern Business',
    template: '%s | Primenova',
  },
  description:
    'Primenova delivers cutting-edge technology solutions and consulting services to help businesses thrive in the digital age.',
  keywords: [
    'technology solutions',
    'business consulting',
    'digital transformation',
    'software development',
    'innovation',
  ],
  authors: [{ name: 'Primenova Team' }],
  creator: 'Primenova',
  publisher: 'Primenova',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://primenova.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://primenova.com',
    title: 'Primenova - Innovative Solutions for Modern Business',
    description:
      'Primenova delivers cutting-edge technology solutions and consulting services to help businesses thrive in the digital age.',
    siteName: 'Primenova',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Primenova - Innovative Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primenova - Innovative Solutions for Modern Business',
    description:
      'Primenova delivers cutting-edge technology solutions and consulting services to help businesses thrive in the digital age.',
    images: ['/og-image.jpg'],
    creator: '@primenova',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <AIChatButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

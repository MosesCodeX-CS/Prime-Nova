import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime Nova",
  description: "Innovative IT & Business Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Prime Nova</h1>
                <nav className="hidden md:flex space-x-8">
                  <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>
                  <a href="#about" className="text-gray-500 hover:text-blue-600">About</a>
                  <a href="#services" className="text-gray-500 hover:text-blue-600">Services</a>
                  <a href="#contact" className="text-gray-500 hover:text-blue-600">Contact</a>
                </nav>
                <button className="md:hidden">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Prime Nova. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'BuildDeva — Architectural Integrity in Construction',
  description: 'Building Trust Through Clarity. Premier Indonesian construction and architectural partner specializing in Residential, Industrial, Commercial, and Renovation projects.',
  keywords: ['BuildDeva', 'Construction Indonesia', 'General Contractor', 'Architectural Design', 'Building Renovation', 'Industrial Warehouse Construction'],
  openGraph: {
    title: 'BuildDeva — Architectural Integrity in Construction',
    description: 'Building Trust Through Clarity. Premier Indonesian construction and architectural partner.',
    type: 'website',
    url: 'https://builddeva.com',
    siteName: 'BuildDeva',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildDeva — Architectural Integrity in Construction',
    description: 'Building Trust Through Clarity. Premier Indonesian construction partner.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-offwhite text-charcoal font-body antialiased selection:bg-brand-olive selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


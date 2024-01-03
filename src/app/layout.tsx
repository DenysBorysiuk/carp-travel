import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/sections/Header';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Carp Travel',
  description: 'Uncover Carpathians Secrets',
  metadataBase: new URL('https://carp-travel-livid.vercel.app/'),

  openGraph: {
    url: 'https://carp-travel-livid.vercel.app/',
    title: 'Carp Travel',
    description: 'Uncover Carpathians Secrets',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carpathian mountains',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

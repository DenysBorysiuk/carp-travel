import type { Metadata } from 'next';
import { Inter, Karantina } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const karantina = Karantina({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-karantina',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Carp Travel',
  description: 'Uncover Carpathians Secrets',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${karantina.variable}`}>
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}

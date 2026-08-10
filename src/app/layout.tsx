import type { Metadata } from 'next';
import { Inter, Caveat } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import AmbientBackground from '@/components/AmbientBackground';
import IntroManager from '@/components/IntroManager';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Dhakshinesh S T | Portfolio',
  description: 'Mechatronics Engineer, Rollcage Analyst, Filmmaker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${caveat.variable}`}>
      <body className="antialiased bg-transparent">
        <AmbientBackground />
        <LenisProvider>
          <IntroManager>
            {children}
          </IntroManager>
        </LenisProvider>
      </body>
    </html>
  );
}

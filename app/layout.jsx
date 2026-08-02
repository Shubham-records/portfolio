import { Inter, Kalam, Oswald, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/components/SmoothScrolling';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const kalam = Kalam({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-hand' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-primary' });
const cormorant = Cormorant_Garamond({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-secondary' });

export const metadata = {
  title: 'Shubham Pal — Developer & Creator',
  description: 'Portfolio of Shubham Pal — Developer, Creator, and Builder of digital experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${kalam.variable} ${oswald.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BJCree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body bg-black text-white" suppressHydrationWarning>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

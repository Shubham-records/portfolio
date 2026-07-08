import { Inter, Kalam } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/components/SmoothScrolling';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const kalam = Kalam({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-hand' });

export const metadata = {
  title: 'Shubham Pal — Developer & Creator',
  description: 'Portfolio of Shubham Pal — Developer, Creator, and Builder of digital experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${kalam.variable}`} suppressHydrationWarning>
      <body className="antialiased font-body bg-black text-white" suppressHydrationWarning>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}

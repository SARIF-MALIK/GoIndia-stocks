import '@/styles/globals.css';
import { Navbar } from '@/containers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Go India Stocks | GIA Stocks',
  description:
    'Bringing Indian Corporates to Investors. An Investor Relations Company',
  author: 'Sarif Malik',
    locale: 'en_IN',
    type: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`text-text bg-bg scroll-smooth ${inter.className} h-screen overflow-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

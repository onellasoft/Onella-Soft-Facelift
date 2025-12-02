import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/ui/mini-navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-space-grotesk' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});


export const metadata: Metadata = {
  title: 'About Us | OnellaSoft Reimagined',
  description: 'A leading digital marketing company dedicated to transforming your online presence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} font-body antialiased bg-[#0a0a0a]`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

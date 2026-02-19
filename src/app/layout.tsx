import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/common/navbar';

export const metadata: Metadata = {
  title: 'Tam Yee Bong | Chemical Engineering Innovator',
  description:
    'Portfolio of Tam Yee Bong, a future-ready innovator blending chemical engineering with data-driven tools to design sustainable industrial solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

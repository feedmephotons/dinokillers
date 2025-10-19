import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dino Killers - Portfolio Pitch Deck',
  description: 'Portfolio showcase of Dino Killers projects and innovations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

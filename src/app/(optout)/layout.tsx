import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import Name from '../_lib/components/Name';

const mesloLGS = localFont({
  src: '../../../public/fonts/MesloLGS NF Regular.ttf',
  variable: '--font-mesloLGS',
});

export const metadata: Metadata = {
  title: 'Valentino Losito',
  description: 'my page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mesloLGS.className + ' p-1.5'}>
        <main>
          <Name />
          <p> opt out</p>
          {children}
        </main>
      </body>
    </html>
  );
}

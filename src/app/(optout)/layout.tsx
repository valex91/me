import type {Metadata} from 'next';
import '../globals.css';

import {Roboto} from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
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
      <body className={roboto.className + ' p-1.5 bg-richblack'}>
        <main>{children}</main>
      </body>
    </html>
  );
}

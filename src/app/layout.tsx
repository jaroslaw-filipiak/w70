import './globals.css';
import { Karla } from 'next/font/google';
// import Header from './components/Header';
import SmoothScroll from './components/SmoothScroll';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata = {
  title: 'w-70 studio',
  description: 'Betonowe donice z charakterem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${karla.className}`}>
        <SmoothScroll>
          {/* <Header /> */}
          <main className='bg-grid'>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Movies',
  description: 'See your Favorite Movie',
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
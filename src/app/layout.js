import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Movies',
  description: 'See your Favorite Movie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* Header */}
       <Header/>
      
      {/* Navbar */}

      {/* SearchBox */}

      {children}
      </body>
    </html>
  )
}

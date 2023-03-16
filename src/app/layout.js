import './globals.css'

export const metadata = {
  title: 'Movies',
  description: 'See your Favourite Movie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

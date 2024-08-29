import './globals.css'

export const metadata = {
  title: 'AI Companion App',
  description: 'Your personal AI companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
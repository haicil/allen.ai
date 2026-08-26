import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
  src: '../public/font/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  weight: '300 900',
})

export const metadata: Metadata = {
  title: 'Allen Ai | Portfolio',
  description: 'Electrical & Computer Engineering | Hardware Engineering | Analog Electronics | Embedded Systems',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={satoshi.variable}>
        {children}
      </body>
    </html>
  )
}

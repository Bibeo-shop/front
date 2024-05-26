import RQProvider from '@/components/RQProvider'
import '@/style/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BibeoShop',
  description: 'BibeoShop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  )
}

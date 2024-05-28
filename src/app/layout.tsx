import RQProvider from '@/components/RQProvider'
import '@/styles/globals.scss'

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
      <body>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  )
}

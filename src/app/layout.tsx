import '@/styles/globals.scss'
import RQProvider from '@/components/RQProvider'
import Header from '@/components/molecule/Header/Header'
import cn from './layout.module.scss'
import Category from '@/components/molecule/Category/Category'

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
        <RQProvider>
          <header className={cn.headerWrap}>
            <Header />
            <Category />
          </header>
          <div className={cn.containerWrap}>
            <main className={cn.mainWrap}>{children}</main>
          </div>
        </RQProvider>
      </body>
    </html>
  )
}

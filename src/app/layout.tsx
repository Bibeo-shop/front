import '@/styles/globals.scss'
import RQProvider from '@/components/RQProvider'
import Header from '@/components/molecule/Header/Header'
import Category from '@/components/molecule/Category/Category'
import Footer from '@/components/molecule/Footer/Footer'
import cn from './layout.module.scss'

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
          </header>
          <div className={cn.containerWrap}>
            <aside>
              <Category />
            </aside>
            <main className={cn.mainWrap}>
              <div className={cn.container}>{children}</div>
            </main>
          </div>
          <Footer />
        </RQProvider>
      </body>
    </html>
  )
}

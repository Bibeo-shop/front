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
          </header>
          <div className={cn.containerWrap}>
            <aside>
              <Category />
            </aside>
            <main className={cn.mainWrap}>
              <div className={cn.container}>{children}</div>
            </main>
          </div>
        </RQProvider>
      </body>
    </html>
  )
}

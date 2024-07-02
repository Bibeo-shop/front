import cn from './layout.module.scss'

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={cn.wrap}>{children}</section>
}

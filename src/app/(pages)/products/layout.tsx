import Title from "@/components/molecule/Title/Title"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full">
      <nav>
        <Title title="카테고리"></Title>
      </nav>
      {children}
    </section>
  )
}
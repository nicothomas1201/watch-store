export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex justify-center w-full">
      <div className="grid gap-4 grid-cols-2auto max-w-[650px]">{children}</div>
    </section>
  )
}

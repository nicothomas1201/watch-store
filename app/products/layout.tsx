export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex items-center">
      <div className="inline-block w-full max-w-[1000px] m-auto">
        {children}
      </div>
    </section>
  )
}

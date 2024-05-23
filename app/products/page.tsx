import { title } from '@/components/primitives'
import { ProductCard } from '@/components/product-card'
import { watches } from '@/utils/watches'

export default function PricingPage() {
  return (
    <>
      <h2 className={title({ size: 'xs' })}>Products</h2>
      <div className="grid grid-cols-3 gap-2 my-4">
        {watches.map((watch, index) => (
          <ProductCard
            key={index}
            id={watch.id}
            img={watch.img}
            price={watch.price}
            title={watch.title}
          />
        ))}
      </div>
    </>
  )
}

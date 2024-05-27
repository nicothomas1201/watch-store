'use client'

import { Button } from '@nextui-org/button'
import Link from 'next/link'

import { title, subtitle } from '@/components/primitives'
import { WatchCard } from '@/components/watch-card'
import { SaleModal } from '@/components/sale-modal'
import { watches } from '@/utils/watches'

export default function Home() {
  return (
    <div>
      <SaleModal />
      <section className="flex items-center h-[90vh] gap-4 py-8 md:py-10">
        <div className="flex flex-col w-full gap-5">
          <div>
            <h1 className={title()}>A watch for every moment</h1>
            <h2 className={subtitle({ class: 'mt-1 mb-0' })}>
              Todo el mundo tiene que controlar el tiempo, pero con nosotros
              puedes hacerlo con estilo.
            </h2>
          </div>
          <div className="flex gap-2">
            <Button as={Link} color="primary" href="/products" radius="full">
              Buy now
            </Button>
            <Button
              as={Link}
              color="primary"
              href="#most-popular"
              radius="full"
              variant="flat"
            >
              Most popular
            </Button>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <video autoPlay controls muted>
            <source src="/assets/video.mp4" type="video/mp4" />
            <track kind="captions" label="spanish_captions" src="#" />
          </video>
        </div>
      </section>
      <section className="flex flex-col items-center content-center py-10 md:py-10">
        <div id="most-popular">
          <h3 className={title({ size: 'xs', class: 'text-center m-0' })}>
            Relojes populares
          </h3>
          <h4
            className={subtitle({ class: 'text-center m-0 mt-2', size: 'sm' })}
          >
            Elige uno
          </h4>
        </div>
        <div className="flex items-center justify-center w-full gap-2 mt-4">
          {watches.slice(0, 3).map((watch, index) => (
            <WatchCard
              key={index}
              id={watch.id}
              img={watch.img}
              price={watch.price}
              title={watch.title}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-screen gap-4">
        <h2 className={title({ size: 'xs', class: 'text-center m-0' })}>
          Mira el video
        </h2>
        <div className="w-[500] h-[500] rounded-lg overflow-hidden align-middle">
          <video autoPlay controls muted height={500} width={500}>
            <source src="/assets/avatar.mp4" type="video/mp4" />
            <track kind="captions" label="spanish_captions" src="#" />
          </video>
        </div>
        <Button color="primary" radius="full">
          Buy now
        </Button>
      </section>
    </div>
  )
}

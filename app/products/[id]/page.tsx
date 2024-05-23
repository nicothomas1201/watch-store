import { Image } from '@nextui-org/image'
import { Chip } from '@nextui-org/chip'
import { Button } from '@nextui-org/button'

import { watches } from '@/utils/watches'
import { title } from '@/components/primitives'

export default function Product({ params }: { params: { id: string } }) {
  const { id } = params

  const findWatch = watches.find((watch) => watch.id === Number(id))

  return (
    <>
      <div className="w-full max-w-[300px]">
        <Image src={findWatch?.img} />
      </div>
      <div className="w-full">
        <h1 className={title({ size: 'xs' })}>{findWatch?.title}</h1>
        <p className="mt-3 mb-0 text-base text-gray-400">
          {findWatch?.description}
        </p>
        <Chip className="my-5" color="success" variant="bordered">
          {findWatch?.price}
        </Chip>
        <div className="flex flex-col items-center gap-2">
          <Button className="w-full" color="primary" variant="shadow">
            Buy now
          </Button>
          <Button className="w-full" color="primary" variant="bordered">
            Add to cart
          </Button>
        </div>
      </div>
    </>
  )
}

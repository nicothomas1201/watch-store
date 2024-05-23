import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

interface Props {
  id: number
  price: string
  title: string
  img: string
}

export function ProductCard({ id, price, title, img }: Props) {
  return (
    <Card
      isPressable
      as={Link}
      className="py-4 min-w-[200px]"
      href={`/products/${id}`}
    >
      <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
        {/* <p className="font-bold uppercase text-tiny">Daily Mix</p> */}
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">{price}</small>
      </CardHeader>
      <CardBody className="w-full py-2 overflow-visible">
        <Image
          alt="Card background"
          className="object-cover w-full h-60 rounded-xl"
          src={img}
          width={'100%'}
        />
      </CardBody>
    </Card>
  )
}

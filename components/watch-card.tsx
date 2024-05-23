'use client'

import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

interface Props {
  title: string
  img: string
  price: string
  id: number
}

export function WatchCard({ title, img, price, id }: Props) {
  return (
    <Card
      isPressable
      as={Link}
      className="w-full max-w-[250px]"
      href={`/products/${id}`}
      shadow="sm"
    >
      <CardBody className="p-0 overflow-visible">
        <Image
          alt={title}
          className="w-full object-cover h-[300px]"
          radius="lg"
          shadow="sm"
          src={img}
          width="100%"
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{title}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
    </Card>
  )
}

import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

import { title } from '@/components/primitives'

export default function EntertainmentPage() {
  return (
    <div>
      <h1 className={title({ size: 'xs' })}>Games</h1>
      <div className="flex gap-2 mt-5">
        <Card
          isPressable
          as={Link}
          className="py-4"
          href="https://create.kahoot.it/details/0ce8fb99-e2f2-4438-a013-3b07fa82372f"
          target="_black"
        >
          <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
            <small className="text-default-500">4 questions</small>
            <h4 className="font-bold text-large">Trivia game</h4>
          </CardHeader>
          <CardBody className="py-2 overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl h-[150px]"
              src="/assets/kahoot.png"
              width={270}
            />
          </CardBody>
        </Card>
        <Card
          isPressable
          as={Link}
          className="py-4"
          href="https://scratch.mit.edu/projects/997803933"
          target="_black"
        >
          <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
            <small className="text-default-500">20 points</small>
            <h4 className="font-bold text-large">Catch game</h4>
          </CardHeader>
          <CardBody className="py-2 overflow-visible">
            <Image
              alt="Card background"
              className="object-cover h-[150px] rounded-xl"
              src="/assets/scratch.png"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

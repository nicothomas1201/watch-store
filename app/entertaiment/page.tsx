import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

import { title } from '@/components/primitives'

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ size: 'xs' })}>Games</h1>
      {/* https://create.kahoot.it/details/0ce8fb99-e2f2-4438-a013-3b07fa82372f */}
      <Card
        isPressable
        as={Link}
        className="py-4"
        href="https://create.kahoot.it/details/0ce8fb99-e2f2-4438-a013-3b07fa82372f"
        target="_black"
      >
        <CardHeader className="flex-col items-start px-4 pt-2 pb-0">
          {/* <p className="font-bold uppercase text-tiny">4 Questions</p> */}
          <small className="text-default-500">4 questions</small>
          <h4 className="font-bold text-large">Trivia game</h4>
        </CardHeader>
        <CardBody className="py-2 overflow-visible">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/assets/kahoot.png"
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  )
}

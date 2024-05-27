import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'

import { title as titleStyle } from '@/components/primitives'

export function InfoCard({
  children,
  title,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <h2 className={titleStyle({ size: 'xs' })}>{title}</h2>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter />
    </Card>
  )
}

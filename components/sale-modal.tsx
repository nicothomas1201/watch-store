'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { useEffect } from 'react'
import { Image } from '@nextui-org/image'

export function SaleModal() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    const timeout = setTimeout(() => {
      onOpen()
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Watch on sale
            </ModalHeader>
            <ModalBody>
              <Image alt="A watch for you post" src="/assets/sale-post.png" />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

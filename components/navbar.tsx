'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import NextLink from 'next/link'
import { link as linkStyles } from '@nextui-org/theme'
import { usePathname } from 'next/navigation'

import { Logo } from '@/components/icons'

export const Navbar = () => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname.includes(href)
  // const color =

  return (
    <NextUINavbar maxWidth="xl">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={isActive('products')}>
          <NextLink
            className={linkStyles({
              color: isActive('products') ? undefined : 'foreground',
            })}
            href="/products"
          >
            Products
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={isActive('entertaiment')}>
          <NextLink
            className={linkStyles({
              color: isActive('entertaiment') ? undefined : 'foreground',
            })}
            href="/entertaiment"
          >
            Entertaiement
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="solid">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}

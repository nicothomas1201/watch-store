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
      <NavbarBrand as={NextLink} href="/">
        <Logo />
        <p className="font-bold text-inherit">WatchStore</p>
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
        <NavbarItem isActive={isActive('about')}>
          <NextLink
            className={linkStyles({
              color: isActive('about') ? undefined : 'foreground',
            })}
            href="/about"
          >
            About
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive={isActive('entertainment')}>
          <NextLink
            className={linkStyles({
              color: isActive('entertainment') ? undefined : 'foreground',
            })}
            href="/entertainment"
          >
            Entertainment
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

// components/navbar.tsx
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  Logo,
  InstagramIcon,
} from "@/components/icons";
import { link as linkStyles } from "@heroui/theme";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="backdrop-blur-md bg-background/70 border-b border-default-100"
    >
      {/* Left: Brand + desktop nav */}
      <NavbarContent className="basis-1/2 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <NextLink
            className="flex items-center gap-2 text-inherit"
            href="/"
          >
            <Logo />
            <p className="font-semibold tracking-tight">OrcaX Media</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden md:flex gap-4 ml-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                href={item.href}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-sm font-medium data-[active=true]:text-primary data-[active=true]:font-semibold"
                )}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right: socials + theme + CTA (desktop) */}
      <NavbarContent className="hidden sm:flex basis-1/2" justify="end">
        <NavbarItem className="flex gap-3 items-center">
          <Link
            title="Instagram"
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500 hover:text-primary transition-colors" />
          </Link>
          {/* <ThemeSwitch /> */}
        </NavbarItem>

        <NavbarItem>
          <Link
            isExternal
            href={siteConfig.links.calendly}
            className="ml-3"
          >
            <Button
              color="primary"
              radius="full"
              size="sm"
              className="font-semibold"
            >
              Book a Call
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile: brand right side icons + menu toggle */}
      <NavbarContent className="sm:hidden basis-1 justify-end gap-2">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        <div className="mt-4 flex flex-col gap-3">
          {siteConfig.navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <NextLink href={item.href} className="w-full">
                <span className="text-base">{item.label}</span>
              </NextLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link isExternal href={siteConfig.links.calendly} className="w-full">
              <Button color="primary" radius="full" className="w-full">
                Book a Call
              </Button>
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

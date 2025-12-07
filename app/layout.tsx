import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { getSiteSettings } from "@/sanity/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

   const settings = await getSiteSettings()
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar logoUrl={settings?.logoUrl} />
            <main className="container max-w-screen mx-auto pt-16 px-6 flex-grow bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <span className="text-default-600">{settings?.copyrightText || "OrcaXMedia"}</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

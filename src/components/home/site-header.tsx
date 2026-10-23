"use client"

import { useState } from "react"
import { Menu, UserRound, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
]

function SiteHeader() {
  const [active, setActive] = useState("#beranda")
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl rounded-full border border-primary/10 bg-white/90 px-4 py-2.5 shadow-[0_8px_30px_-12px] shadow-primary/20 backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-primary",
                  active === link.href && "bg-lavender text-primary"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#unduh"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-colors hover:bg-primary/85 sm:inline-flex"
            >
              Unduh Aplikasi
            </a>
            <span className="flex size-9 items-center justify-center rounded-full bg-blush text-brand-rose ring-2 ring-white">
              <UserRound className="size-4.5" />
            </span>
            <button
              type="button"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-full text-foreground/70 hover:bg-lavender md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-primary/10 bg-white p-3 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href)
                setOpen(false)
              }}
              className={cn(
                "rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/80",
                active === link.href && "bg-lavender text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#unduh"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Unduh Aplikasi
          </a>
        </nav>
      )}
    </header>
  )
}

export { SiteHeader }

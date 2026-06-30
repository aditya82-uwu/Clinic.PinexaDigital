"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HeartPulse, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-content";

const links = [
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/gallery",  label: "Gallery"  },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 border-b border-slate-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-md shadow-slate-900/5 backdrop-blur-xl"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Skip-to-main link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-xl focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-paper"
      >
        Skip to main content
      </a>

      <Container className="flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${SITE.name} — home`}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-paper shadow-sm shadow-sky-600/40">
            <HeartPulse size={18} strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-semibold text-navy">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors hover:text-sky-600 ${
                  active ? "text-sky-600" : "text-slate"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sky-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-slate transition-colors hover:text-navy lg:flex"
            aria-label={`Call us at ${SITE.phone}`}
          >
            <Phone size={15} className="text-sky-600" />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="min-h-11 inline-flex items-center rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-paper shadow-sm shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md hover:shadow-sky-600/30 active:translate-y-0 active:scale-[0.98]"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 text-navy transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white md:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile navigation" className="space-y-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-sky-50 hover:text-sky-700 ${
                      active ? "bg-sky-50 text-sky-700" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
              <a
                href={`tel:${SITE.phone}`}
                className="flex min-h-11 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate hover:text-navy"
              >
                <Phone size={15} className="text-sky-600" />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="block min-h-11 rounded-xl bg-sky-600 px-4 py-3 text-center text-sm font-bold text-paper transition-colors hover:bg-sky-700 active:bg-sky-800"
              >
                Book Appointment
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, HeartPulse, ArrowRight, Globe, AtSign, MessageCircle, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-content";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/gallery", label: "Our Clinic" },
  { href: "/contact", label: "Book Appointment" },
];

const serviceLinks = [
  "General Checkups",
  "Pediatric Care",
  "Vaccinations",
  "Lab Testing",
  "Chronic Disease Care",
  "Mental Wellness",
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: AtSign, href: "#", label: "Twitter / X" },
  { icon: MessageCircle, href: "#", label: "Instagram" },
  { icon: Send, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1D32]">
      {/* Main footer content */}
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500">
                <HeartPulse size={18} strokeWidth={2.5} className="text-paper" />
              </div>
              <span className="font-display text-lg font-semibold text-paper">
                {SITE.name}
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
              {SITE.tagline} Serving Tampa families with modern, accessible, and compassionate healthcare since 1998.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-slate-300 transition-colors hover:bg-sky-600 hover:text-paper"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-paper"
                  >
                    <ArrowRight
                      size={13}
                      className="text-sky-500 transition-transform group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Our Services
            </p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-paper"
                  >
                    <ArrowRight
                      size={13}
                      className="text-sky-500 transition-transform group-hover:translate-x-1"
                    />
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact Us
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3 text-sm text-slate-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <Clock size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <span>{SITE.hours}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-slate-300 transition-colors hover:text-paper"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-slate-300 transition-colors hover:text-paper"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-bold text-paper shadow-sm transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md"
            >
              Book Appointment
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Designed &amp; built by{" "}
            <a
              href="https://www.pinexadigital.com"
              className="text-slate-400 transition-colors hover:text-paper"
            >
              Pinexa Digital
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}

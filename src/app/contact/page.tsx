import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site-content";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = { title: "Contact & Book" };

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone,
    sub: "Mon–Fri 8am–6pm, Sat 9am–1pm",
    href: `tel:${SITE.phone}`,
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    sub: "We reply within one business day",
    href: `mailto:${SITE.email}`,
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: MapPin,
    label: "Our Location",
    value: SITE.address,
    sub: "Free parking available on-site",
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: SITE.hours,
    sub: "Urgent walk-ins accepted",
    href: null,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linear-to-br from-sky-50 via-white to-blue-50/30 py-20 sm:py-24">
        <Container className="text-center">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Get in Touch
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Book your visit today
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate">
              Same-week appointments available. Fill out the form below or call
              us directly — our team typically responds within one business day.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── Contact cards ── */}
      <section className="bg-white py-12">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <div className="flex h-full flex-col rounded-2xl border border-slate/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.color}`}>
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate">
                    {card.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-navy leading-6">{card.value}</p>
                  <p className="mt-1 text-xs text-slate">{card.sub}</p>
                </div>
              );

              return (
                <FadeIn key={card.label} delay={i * 0.07}>
                  {card.href ? (
                    <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Form + Map ── */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Form */}
            <FadeIn direction="left">
              <div className="rounded-3xl border border-slate/10 bg-white p-8 shadow-sm sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <MessageSquare size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-navy">Request an Appointment</h2>
                    <p className="text-xs text-slate">We&apos;ll confirm your time within 24 hours</p>
                  </div>
                </div>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>

            {/* Info + Map placeholder */}
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-6">
                {/* Map placeholder */}
                <div className="overflow-hidden rounded-3xl shadow-sm">
                  <div className="relative h-64 bg-sky-50">
                    <img
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                      alt="Harborview Family Clinic exterior"
                      className="h-full w-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-paper">
                      <p className="text-sm font-bold">{SITE.name}</p>
                      <p className="mt-1 text-xs text-sky-100">{SITE.address}</p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-4 top-4 rounded-xl bg-white px-3 py-2 text-xs font-bold text-navy shadow hover:bg-sky-50"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>

                {/* Info cards */}
                <div className="rounded-3xl border border-slate/10 bg-white p-7 shadow-sm">
                  <h3 className="text-base font-bold text-navy">What to Expect</h3>
                  <ul className="mt-5 space-y-4 text-sm text-slate">
                    {[
                      "Our front desk will call to confirm your appointment time.",
                      "New patients: please arrive 10 minutes early to complete intake forms.",
                      "Bring your insurance card and a photo ID.",
                      "Most visits are 30–45 minutes — we never rush you.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick call CTA */}
                <div className="rounded-3xl bg-navy p-6 text-paper">
                  <p className="text-sm font-bold">Prefer to call?</p>
                  <p className="mt-1 text-xs text-sky-200">Our team is available during clinic hours.</p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-sky-500"
                  >
                    <Phone size={14} />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}

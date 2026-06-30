import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import HeroSection from "@/components/home/HeroSection";
import FAQAccordion from "@/components/home/FAQAccordion";
import { SITE, services, testimonials, doctors, faqs } from "@/lib/site-content";
import {
  Stethoscope,
  HeartPulse,
  Shield,
  Microscope,
  Brain,
  Baby,
  CalendarDays,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Award,
  Users,
  Clock,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: `${SITE.name} — Family Clinic in ${SITE.city}`,
  description: SITE.tagline,
};

const serviceIconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  baby:        Baby,
  syringe:     Shield,
  microscope:  Microscope,
  heart:       HeartPulse,
  brain:       Brain,
};

/* Each pair = [icon-bg, icon-text] — accessible, distinct colour per card */
const serviceAccents = [
  ["bg-sky-100",    "text-sky-700"],
  ["bg-violet-100", "text-violet-700"],
  ["bg-teal-100",   "text-teal-700"],
  ["bg-blue-100",   "text-blue-700"],
  ["bg-rose-100",   "text-rose-700"],
  ["bg-amber-100",  "text-amber-700"],
];

const whyChooseUs = [
  {
    icon: HeartPulse,
    title: "Board-Certified Physicians",
    detail:
      "Every provider is board-certified with years of family care experience and continuing education.",
  },
  {
    icon: CalendarDays,
    title: "Same-Week Appointments",
    detail:
      "Fast access to care when you need it most — sick visits, wellness checks, and urgent concerns.",
  },
  {
    icon: CheckCircle2,
    title: "Patient-Centered Approach",
    detail:
      "Clear explanations, active listening, and care plans built around your personal health goals.",
  },
  {
    icon: Shield,
    title: "Modern, Safe Clinic",
    detail:
      "Bright, clean spaces designed for comfort, privacy, and clinical safety at every visit.",
  },
];

const certifications = [
  { label: "AMA Member Clinic",          icon: Award        },
  { label: "Joint Commission Certified", icon: Shield       },
  { label: "HIPAA Compliant",            icon: CheckCircle2 },
  { label: "5-Star Patient Rated",       icon: Star         },
];

export default function Home() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <HeroSection />

        {/* ════════ SERVICES ════════ */}
        <section aria-labelledby="services-heading" className="bg-white py-20 sm:py-28">
          <Container>
            <FadeIn className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Our Services
              </p>
              <h2
                id="services-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
              >
                Comprehensive care for every stage of life
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate">
                From routine checkups to specialised treatment, we offer the
                full spectrum of family healthcare under one trusted roof.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => {
                const Icon = serviceIconMap[service.icon] ?? Stethoscope;
                const [iconBg, iconText] = serviceAccents[i % serviceAccents.length];
                return (
                  <FadeIn key={service.name} delay={i * 0.07}>
                    <div className="group flex h-full flex-col rounded-2xl border border-slate/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-100 hover:shadow-xl hover:shadow-sky-900/8">
                      <div
                        className={`flex h-13 w-13 items-center justify-center rounded-2xl ${iconBg} ${iconText}`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-navy">{service.name}</h3>
                      <p className="mt-2.5 flex-1 text-sm leading-7 text-slate">
                        {service.description}
                      </p>
                      <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-sky-600 opacity-0 transition-opacity group-hover:opacity-100">
                        Learn more <ArrowRight size={13} />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn className="mt-10 text-center" delay={0.2}>
              <Button href="/services" variant="secondary">
                View All Services
                <ArrowRight size={16} />
              </Button>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ WHY CHOOSE US ════════ */}
        <section aria-labelledby="why-heading" className="bg-slate-50 py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Image column */}
              <FadeIn direction="left">
                <div className="relative">
                  <div className="overflow-hidden rounded-4xl shadow-2xl shadow-navy/10">
                    <img
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80"
                      alt="Harborview Family Clinic modern interior"
                      className="h-120 w-full object-cover"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white p-5 shadow-xl shadow-navy/10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-navy">8,200+</p>
                        <p className="text-xs font-medium text-slate">Families Trust Us</p>
                      </div>
                    </div>
                  </div>
                  {/* Est. badge */}
                  <div className="absolute -left-4 -top-4 rounded-2xl bg-sky-600 px-5 py-3 shadow-lg shadow-sky-600/30">
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-100">Est. 1998</p>
                    <p className="mt-0.5 text-sm font-semibold text-paper">26 Years of Care</p>
                  </div>
                </div>
              </FadeIn>

              {/* Text column */}
              <FadeIn direction="right">
                <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                  Why Choose Harborview
                </p>
                <h2
                  id="why-heading"
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
                >
                  Confidence, comfort, and clear communication at every visit.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate">
                  Our team blends medical expertise with a family-first
                  approach, delivering thoughtful care for preventive health,
                  chronic conditions, and urgent needs.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {whyChooseUs.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate/10 bg-white p-5 shadow-sm"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>
                        <h3 className="mt-4 text-sm font-bold text-navy">{item.title}</h3>
                        <p className="mt-1.5 text-xs leading-6 text-slate">{item.detail}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <Button href="/about">
                    Our Story
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ CERTIFICATIONS STRIP ════════ */}
        <section aria-label="Certifications and accreditations" className="border-y border-slate/8 bg-white py-8">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div key={cert.label} className="flex items-center gap-2.5 text-slate">
                    <Icon size={18} className="text-sky-500" />
                    <span className="text-sm font-semibold">{cert.label}</span>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ════════ MEET THE TEAM ════════ */}
        <section aria-labelledby="team-heading" className="bg-white py-20 sm:py-28">
          <Container>
            <FadeIn className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Our Doctors
              </p>
              <h2
                id="team-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
              >
                Skilled professionals focused on your health
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate">
                Board-certified and compassionate, our care team brings
                together years of experience with a warm, patient-first
                bedside manner.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctors.map((doctor, i) => (
                <FadeIn key={doctor.name} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/8">
                    <div className="relative overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={`Dr. ${doctor.name}`}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-navy/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700">
                        {doctor.specialty}
                      </span>
                      <p className="mt-3 text-lg font-bold text-navy">{doctor.name}</p>
                      <p className="mt-1 text-sm text-slate">{doctor.role}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                        <Clock size={12} className="text-sky-500" />
                        <span>{doctor.experience} experience</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ TESTIMONIALS ════════ */}
        <section
          aria-labelledby="testimonials-heading"
          className="bg-linear-to-b from-sky-50 to-white py-20 sm:py-28"
        >
          <Container>
            <FadeIn className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Patient Stories
              </p>
              <h2
                id="testimonials-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
              >
                Real feedback from families who trust us
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate/10 bg-white p-8 shadow-sm">
                    {/* Large decorative quote mark */}
                    <Quote
                      size={32}
                      className="mb-3 fill-sky-100 text-sky-200"
                      aria-hidden
                    />
                    {/* Stars */}
                    <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    {/* Reviewer */}
                    <div className="mt-7 flex items-center gap-3 border-t border-slate/10 pt-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                        {t.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-navy">{t.name}</p>
                        <p className="text-xs text-slate">{t.role}</p>
                      </div>
                      <span className="ml-auto shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                        Verified
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Rating summary */}
            <FadeIn className="mt-10 flex justify-center" delay={0.2}>
              <div className="flex items-center gap-4 rounded-2xl border border-slate/10 bg-white px-8 py-5 shadow-sm">
                <div className="flex gap-1" aria-hidden>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-navy">4.9 / 5</p>
                  <p className="text-xs text-slate">Average from 3,200+ reviews</p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-heading" className="bg-white py-20 sm:py-28">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <FadeIn direction="left">
                <p className="text-sm font-bold uppercase tracking-widest text-sky-600">FAQ</p>
                <h2
                  id="faq-heading"
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
                >
                  Answers to common patient questions
                </h2>
                <p className="mt-4 text-base leading-8 text-slate">
                  Still have questions? Our friendly team is always happy to
                  help you understand your options.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button href="/contact">
                    <Phone size={16} />
                    Call Us Now
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Send a Message
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.1}>
                <FAQAccordion faqs={faqs} />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ CTA BANNER ════════ */}
        <section
          aria-labelledby="cta-heading"
          className="bg-linear-to-br from-sky-700 via-sky-600 to-cyan-600 py-16 sm:py-20"
        >
          <Container>
            <FadeIn className="relative overflow-hidden rounded-3xl bg-white/10 px-8 py-14 shadow-2xl ring-1 ring-white/20 sm:px-14">
              {/* Decorative blob */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative grid items-center gap-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">
                    Ready for a better healthcare experience?
                  </p>
                  <h2
                    id="cta-heading"
                    className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
                  >
                    Start your care journey with Harborview today.
                  </h2>
                  <p className="mt-3 max-w-lg text-base text-sky-100">
                    Same-week appointments available. New patients welcome.
                    Call us or book online in minutes.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:items-end">
                  {/* Primary CTA — white button, sky text — explicit colours, no variant override */}
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-paper px-6 py-3 text-sm font-bold text-sky-700 shadow-lg shadow-sky-900/20 transition-all hover:-translate-y-0.5 hover:bg-sky-50 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
                  >
                    <CalendarDays size={17} />
                    Book Appointment
                  </Link>
                  {/* Secondary CTA — outline on dark */}
                  <a
                    href={`tel:${SITE.phone}`}
                    aria-label={`Call us at ${SITE.phone}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-paper transition-all hover:bg-white/20 active:scale-[0.98]"
                  >
                    <Phone size={16} />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>
    </>
  );
}

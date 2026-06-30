"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarDays,
  Phone,
  Star,
  ChevronRight,
  Shield,
  CheckCircle2,
  Users,
  Clock,
  Award,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const stats = [
  { value: "8,200+", label: "Patients Served",       icon: Users  },
  { value: "26 Yrs", label: "Combined Experience",   icon: Award  },
  { value: "98%",    label: "Satisfaction Rate",     icon: Star   },
  { value: "Same Day", label: "Urgent Appointments", icon: Clock  },
];

const doctorAvatars = [
  /* Dr. Sarah Mitchell */ "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=80&q=80",
  /* Dr. James Carter  */ "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=80&q=80",
  /* Elena Cruz, RN    */ "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=80&q=80",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-50/30 pb-0 pt-12 sm:pt-16">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-140 w-140 rounded-full bg-sky-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-32 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left Column ── */}
          <div>
            {/* Pill badge */}
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
              Trusted Family Care in {SITE.city}
            </motion.span>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]"
            >
              Compassionate{" "}
              <span className="relative inline-block text-sky-600">
                Healthcare
                {/* underline accent */}
                <svg
                  aria-hidden
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 C40 2, 100 1, 198 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-sky-300"
                  />
                </svg>
              </span>{" "}
              for Every Stage of Life
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-5 max-w-xl text-base leading-8 text-slate sm:text-lg">
              Modern, personalised medicine with a family-first approach.
              Same-week appointments, board-certified physicians, and a team
              that genuinely listens.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-sky-600 px-7 py-3 text-sm font-semibold text-paper shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/30 active:translate-y-0 active:scale-[0.98]"
              >
                <CalendarDays size={17} />
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-navy/12 bg-white px-7 py-3 text-sm font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 hover:shadow-md active:translate-y-0"
              >
                Our Services
                <ChevronRight size={16} className="text-slate" />
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 flex flex-wrap items-center gap-5 border-t border-slate/10 pt-8"
            >
              {/* Doctor avatars */}
              <div className="flex -space-x-2.5">
                {doctorAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    aria-hidden
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              {/* Stars + rating */}
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-navy">4.9</span>
                </div>
                <p className="mt-0.5 text-xs text-slate">From 3,200+ patient reviews</p>
              </div>
              {/* Accepting badge */}
              <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-1.5">
                <CheckCircle2 size={14} className="text-green-600" />
                <span className="text-xs font-semibold text-green-700">Accepting New Patients</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            className="relative"
          >
            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-sky-900/15 ring-1 ring-sky-900/5">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor consulting with a patient in a modern, welcoming clinic"
                className="h-full min-h-125 w-full object-cover"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-navy/65 to-transparent" />

              {/* "Open Today" floating card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="rounded-2xl bg-white/97 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100">
                      <Shield size={18} className="text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-navy">Open Today</p>
                      <p className="truncate text-xs text-slate">{SITE.hours}</p>
                    </div>
                    <a
                      href={`tel:${SITE.phone}`}
                      aria-label={`Call us now at ${SITE.phone}`}
                      className="ml-auto flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-xs font-bold text-paper transition-colors hover:bg-sky-700 active:bg-sky-800"
                    >
                      <Phone size={12} />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* "Board Certified" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease }}
              className="absolute -right-4 -top-4 hidden lg:block"
            >
              <div className="rounded-2xl border border-slate/10 bg-white p-4 shadow-xl shadow-navy/8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
                    <Shield size={20} className="text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">Board Certified</p>
                    <p className="text-xs text-slate">AMA Accredited</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease }}
          className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl bg-navy shadow-xl shadow-navy/25 sm:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-2 px-6 py-7 text-center ${
                  i < stats.length - 1 ? "border-r border-white/8" : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600/30">
                  <Icon size={16} className="text-sky-300" />
                </div>
                <p className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-sky-300 sm:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>
      </Container>

      {/* Bottom wave divider */}
      <div className="mt-14 h-8 overflow-hidden">
        <svg
          aria-hidden
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 32 L0 16 Q300 0 600 16 Q900 32 1200 16 L1200 32 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

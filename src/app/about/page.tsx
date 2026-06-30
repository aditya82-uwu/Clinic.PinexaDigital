import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { SITE, doctors } from "@/lib/site-content";
import {
  HeartPulse,
  Shield,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const values = [
  {
    icon: HeartPulse,
    title: "Compassion First",
    body: "We treat every patient as we would treat our own family — with patience, kindness, and genuine care.",
  },
  {
    icon: Shield,
    title: "Clinical Excellence",
    body: "Our board-certified team upholds the highest medical standards, combining evidence-based medicine with personalized care.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    body: "From newborns to grandparents, we provide seamless, integrated care that keeps your whole family healthy.",
  },
  {
    icon: Star,
    title: "Continuous Improvement",
    body: "We invest in ongoing training, modern equipment, and patient feedback to keep raising the bar on care.",
  },
];

const milestones = [
  { year: "1998", event: "Harborview Family Clinic founded by Dr. James Harlow" },
  { year: "2005", event: "Expanded to include full on-site diagnostic lab" },
  { year: "2012", event: "Launched pediatric specialty wing" },
  { year: "2019", event: "Achieved Joint Commission accreditation" },
  { year: "2023", event: "Introduced telehealth consultations for all patients" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linear-to-br from-sky-50 via-white to-blue-50/30 py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              About Us
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Care that never{" "}
              <span className="text-sky-600">feels rushed</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate">
              {SITE.name} was founded on a simple idea: patients deserve enough
              time with their doctor to actually be heard. Our providers listen,
              explain, and follow up — not just move to the next appointment.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate">
              Today we serve families across {SITE.city}, from newborns to
              grandparents, with the same attentive approach we started with
              over 26 years ago.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                <ArrowRight size={16} />
                Book an Appointment
              </Button>
              <Button href="/services" variant="secondary">
                Our Services
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="relative overflow-hidden rounded-4xl shadow-2xl shadow-navy/10">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Harborview Family Clinic modern reception area"
                className="h-96 w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-200">
                  Our Mission
                </p>
                <p className="mt-1 text-sm font-semibold text-paper">
                  Empowering healthier lives through compassionate, modern family care.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-slate/10 bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "1998", label: "Year Founded" },
              { value: "8,200+", label: "Patients Served" },
              { value: "26 Yrs", label: "Combined Experience" },
              { value: "98%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What guides every decision we make
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-navy">{v.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate">{v.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn direction="left">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Our History
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Over two decades of trusted care
            </h2>
            <p className="mt-4 text-base leading-8 text-slate">
              From a single-room clinic to a full-service family practice, our
              journey has always been driven by one goal: better care for
              Tampa families.
            </p>
            <div className="mt-8 overflow-hidden rounded-4xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80"
                alt="Doctor consulting with patient"
                className="h-56 w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="relative space-y-0 pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate/15" />
              {milestones.map((m, i) => (
                <div key={m.year} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-5.25 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-paper shadow-md">
                    <CheckCircle2 size={13} />
                  </div>
                  <p className="pl-5 text-xs font-bold uppercase tracking-widest text-sky-600">
                    {m.year}
                  </p>
                  <p className="mt-1 pl-5 text-sm leading-7 text-navy font-medium">{m.event}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Team ── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <FadeIn className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Meet the Team
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              The people behind your care
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, i) => (
              <FadeIn key={doctor.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700">
                      {doctor.specialty}
                    </span>
                    <p className="mt-3 text-lg font-bold text-navy">{doctor.name}</p>
                    <p className="mt-1 text-sm text-slate">{doctor.role}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate">
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

      {/* ── CTA ── */}
      <section className="bg-linear-to-br from-sky-700 via-sky-600 to-cyan-600 py-16">
        <Container className="text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Ready to become a patient?
            </h2>
            <p className="mt-3 text-sky-100/80">
              Same-week appointments. New patients always welcome.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href="/contact"
                className="bg-white text-sky-700 hover:bg-sky-50 hover:text-sky-800"
              >
                Book Appointment
              </Button>
              <Button
                href="/services"
                className="border border-white/30 bg-transparent text-paper hover:bg-white/10"
              >
                Explore Services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

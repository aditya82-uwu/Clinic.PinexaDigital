import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE, services, testimonials } from "@/lib/site-content";
import { HeartPulse, Stethoscope, Users, Quote } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <Container className="flex flex-col items-start gap-6 py-20 sm:py-28">
          <p className="font-display text-teal">{SITE.city}</p>
          <h1 className="font-display text-5xl leading-tight text-paper text-balance sm:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="max-w-md text-base text-paper/70">
            Same-week appointments, friendly staff, and a doctor who actually
            remembers your name.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Book Appointment</Button>
            <Button href="/services" variant="secondary" className="border-paper/30 text-paper hover:bg-paper/10">
              Our Services
            </Button>
          </div>
        </Container>
      </section>

      {/* About preview */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display text-teal">Who we are</p>
            <h2 className="mt-2 font-display text-4xl text-navy">
              A clinic that treats you like a person
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              {SITE.name} has served {SITE.city} families for years, offering
              attentive, unhurried care. From routine checkups to same-day
              sick visits, our team is built around making healthcare feel
              less stressful.
            </p>
            <Button href="/about" variant="secondary" className="mt-6">
              More about us
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg bg-navy text-paper">
              <HeartPulse size={24} className="text-teal" />
              <p className="font-display text-2xl">15+</p>
              <p className="text-[10px] text-paper/60">years serving the area</p>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg bg-navy text-paper">
              <Stethoscope size={24} className="text-teal" />
              <p className="font-display text-2xl">4</p>
              <p className="text-[10px] text-paper/60">providers on staff</p>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg bg-navy text-paper">
              <Users size={24} className="text-teal" />
              <p className="font-display text-2xl">8k+</p>
              <p className="text-[10px] text-paper/60">patients seen</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-navy py-16 sm:py-24">
        <Container>
          <p className="font-display text-teal">Services</p>
          <h2 className="mt-2 font-display text-4xl text-paper">How we can help</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.name} className="rounded-lg border border-line p-5">
                <h3 className="font-display text-lg text-paper">{s.name}</h3>
                <p className="mt-2 text-sm text-paper/60">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="font-display text-teal">Patient stories</p>
          <h2 className="mt-2 font-display text-4xl text-navy">What patients say</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg bg-navy/5 p-6">
                <Quote size={20} className="text-teal" />
                <p className="mt-3 text-sm text-navy">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-medium text-navy">{t.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-4xl text-paper">New patients always welcome</h2>
          <p className="max-w-md text-sm text-paper/80">
            Most new-patient appointments are available within the week.
          </p>
          <Button href="/contact" className="bg-navy text-paper hover:bg-navy/90">
            Book Appointment
          </Button>
        </Container>
      </section>
    </>
  );
}

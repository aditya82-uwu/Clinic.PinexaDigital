import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/site-content";
import {
  Stethoscope,
  HeartPulse,
  Shield,
  Microscope,
  Brain,
  Baby,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = { title: "Our Services" };

const serviceIconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  baby: Baby,
  syringe: Shield,
  microscope: Microscope,
  heart: HeartPulse,
  brain: Brain,
};

const serviceImages: Record<string, string> = {
  /* doctor examining patient at desk */
  "General Checkups":
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  /* paediatrician with young child */
  "Pediatric Care":
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
  /* close-up of vaccination / syringe in clinical setting */
  "Vaccinations":
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  /* modern diagnostic lab / CT imaging room */
  "Lab Testing":
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  /* medical equipment / monitoring */
  "Chronic Disease Care":
    "https://images.unsplash.com/photo-1582560474680-33b8b79a4a7c?auto=format&fit=crop&w=800&q=80",
  /* calm, modern clinic consultation room */
  "Mental Wellness":
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
};

const serviceHighlights: Record<string, string[]> = {
  "General Checkups": [
    "Annual wellness physicals",
    "Blood pressure & cholesterol screening",
    "Preventive health counseling",
    "Sports and school physicals",
  ],
  "Pediatric Care": [
    "Well-child visits from birth",
    "Developmental milestone tracking",
    "Same-day sick visits",
    "Adolescent health & counseling",
  ],
  Vaccinations: [
    "CDC-recommended immunization schedule",
    "Travel vaccines available",
    "Walk-ins welcome, no appointment required",
    "Flu shots & boosters",
  ],
  "Lab Testing": [
    "On-site bloodwork & urinalysis",
    "Results within 24 hours",
    "Lipid panels & metabolic panels",
    "Rapid strep, flu, and COVID tests",
  ],
  "Chronic Disease Care": [
    "Diabetes management & monitoring",
    "Hypertension treatment plans",
    "Asthma & COPD care",
    "Long-term medication management",
  ],
  "Mental Wellness": [
    "Depression & anxiety screening",
    "Stress management support",
    "Referrals to specialist therapists",
    "Medication-assisted treatment",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linear-to-br from-sky-50 via-white to-blue-50/30 py-20 sm:py-28">
        <Container className="text-center">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              What We Offer
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Healthcare services built{" "}
              <span className="text-sky-600">around your family</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">
              From routine checkups to specialized treatment, we offer the
              full spectrum of family healthcare in one welcoming, modern clinic.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact">
                <CalendarDays size={16} />
                Book an Appointment
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
                <ArrowRight size={16} />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Services Detail Grid ── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="space-y-14">
            {services.map((service, i) => {
              const Icon = serviceIconMap[service.icon] ?? Stethoscope;
              const img = serviceImages[service.name];
              const highlights = serviceHighlights[service.name] ?? [];
              const isEven = i % 2 === 0;

              return (
                <FadeIn key={service.name} delay={0.05}>
                  <div
                    className={`grid items-center gap-10 overflow-hidden rounded-3xl border border-slate/10 bg-white shadow-sm lg:grid-cols-2 ${
                      isEven ? "" : "lg:*:first:order-2"
                    }`}
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      {img ? (
                        <img
                          src={img}
                          alt={service.name}
                          className="h-72 w-full object-cover lg:h-full lg:min-h-80"
                        />
                      ) : (
                        <div className="flex h-72 items-center justify-center bg-sky-50 lg:h-full lg:min-h-80">
                          <Icon size={48} className="text-sky-200" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <h2 className="mt-5 font-display text-2xl font-semibold text-navy">
                        {service.name}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2.5">
                        {highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-slate">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-sky-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button href="/contact">
                          Book This Service
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-linear-to-br from-sky-700 via-sky-600 to-cyan-600 py-16">
        <Container className="text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-base text-sky-100/80">
              Our friendly team will help you find the right care. Call us or
              send a message — we&apos;ll get back to you the same day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href="/contact"
                className="bg-white text-sky-700 hover:bg-sky-50 hover:text-sky-800"
              >
                <CalendarDays size={16} />
                Book Appointment
              </Button>
              <Button
                href="/contact"
                className="border border-white/30 bg-transparent text-paper hover:bg-white/10"
              >
                Send Us a Message
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

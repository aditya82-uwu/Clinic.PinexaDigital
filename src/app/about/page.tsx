import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <p className="font-display text-teal">About us</p>
        <h1 className="mt-2 font-display text-4xl text-navy sm:text-5xl">
          Care that doesn&apos;t feel rushed
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate">
          {SITE.name} was founded on a simple idea: patients deserve enough
          time with their doctor to actually be heard. Our providers take
          the time to listen, explain, and follow up &mdash; not just move
          to the next appointment.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate">
          Today we serve families across {SITE.city}, from newborns to
          grandparents, with the same attentive approach we started with.
        </p>
      </Container>
    </section>
  );
}

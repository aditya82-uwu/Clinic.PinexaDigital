import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services } from "@/lib/site-content";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="font-display text-teal">Services</p>
        <h1 className="mt-2 font-display text-4xl text-navy sm:text-5xl">
          What we treat
        </h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.name} className="rounded-lg bg-navy/5 p-6">
              <h2 className="font-display text-2xl text-navy">{s.name}</h2>
              <p className="mt-3 text-sm text-slate">{s.description}</p>
            </div>
          ))}
        </div>
        <Button href="/contact" className="mt-10">Book Appointment</Button>
      </Container>
    </section>
  );
}

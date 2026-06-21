import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import { SITE } from "@/lib/site-content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-display text-teal">Book a visit</p>
          <h1 className="mt-2 font-display text-4xl text-navy sm:text-5xl">
            Request an appointment
          </h1>
          <div className="mt-6 space-y-2 text-sm text-slate">
            <p>{SITE.address}</p>
            <p>{SITE.hours}</p>
            <p>{SITE.phone}</p>
            <p>{SITE.email}</p>
          </div>
        </div>
        <div className="rounded-lg bg-navy/5 p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

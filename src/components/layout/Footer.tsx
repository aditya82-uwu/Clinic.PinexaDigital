import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper/60">
      <Container className="grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-paper">
            {SITE.name}
          </p>
          <p className="mt-3 text-sm">{SITE.tagline}</p>
        </div>
        <div className="text-sm">
          <p>{SITE.address}</p>
          <p className="mt-1">{SITE.hours}</p>
        </div>
        <div className="text-sm">
          <p>{SITE.phone}</p>
          <p className="mt-1">{SITE.email}</p>
        </div>
      </Container>
      <Container className="border-t border-line py-5 text-xs">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </Container>
    </footer>
  );
}

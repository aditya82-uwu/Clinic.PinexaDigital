import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { galleryImages } from "@/lib/site-content";
import { ArrowRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = { title: "Our Clinic" };

const extraImages = [
  {
    caption: "Doctor with Patient",
    url: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
    wide: true,
  },
  {
    caption: "Dr. Sarah Mitchell",
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    wide: false,
  },
  {
    caption: "Dr. James Carter",
    url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    wide: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linear-to-br from-sky-50 via-white to-blue-50/30 py-20 sm:py-28">
        <Container className="text-center">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Inside Our Clinic
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              A modern space built for{" "}
              <span className="text-sky-600">your comfort</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate">
              From our welcoming reception to our state-of-the-art exam rooms,
              every corner of Harborview is designed to put you at ease.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── Main gallery grid ── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.caption} delay={i * 0.07}>
                <div className="group overflow-hidden rounded-2xl shadow-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-semibold text-paper">{img.caption}</p>
                    </div>
                  </div>
                  <div className="border border-t-0 border-slate/10 rounded-b-2xl bg-white px-4 py-3">
                    <p className="text-sm font-medium text-navy">{img.caption}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Wide + portrait mix */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {extraImages.map((img, i) => (
              <FadeIn
                key={img.caption}
                delay={i * 0.08}
                className={img.wide ? "sm:col-span-2" : ""}
              >
                <div className="group overflow-hidden rounded-2xl shadow-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        img.wide ? "h-72" : "h-72"
                      }`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-semibold text-paper">{img.caption}</p>
                    </div>
                  </div>
                  <div className="border border-t-0 border-slate/10 rounded-b-2xl bg-white px-4 py-3">
                    <p className="text-sm font-medium text-navy">{img.caption}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Visit us CTA ── */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-10 shadow-xl lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
                  Come Visit Us
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                  See our clinic in person — we&apos;d love to meet you.
                </h2>
                <p className="mt-2 text-sm text-sky-100/70">
                  New patients always welcome. Same-week appointments available.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  href="/contact"
                  className="bg-white text-navy hover:bg-sky-50 hover:text-sky-700"
                >
                  <CalendarDays size={16} />
                  Book a Visit
                </Button>
                <Button
                  href="/about"
                  className="border border-white/20 bg-transparent text-paper hover:bg-white/10"
                >
                  About Our Team
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

import Container from "@/components/ui/Container";
import { galleryImages } from "@/lib/site-content";
import { ImageIcon } from "lucide-react";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="font-display text-teal">Gallery</p>
        <h1 className="mt-2 font-display text-4xl text-navy sm:text-5xl">
          Inside our clinic
        </h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((caption) => (
            <div key={caption} className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg bg-navy/5">
              <ImageIcon size={26} className="text-navy/30" />
              <p className="text-xs text-slate">{caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

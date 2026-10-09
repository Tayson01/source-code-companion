import { Camera, ExternalLink } from "lucide-react";

import photo01 from "@/assets/gallery/interventie-01.jpg.asset.json";
import photo02 from "@/assets/gallery/interventie-02.jpg.asset.json";
import photo03 from "@/assets/gallery/interventie-03.jpg.asset.json";
import photo04 from "@/assets/gallery/interventie-04.jpg.asset.json";
import photo05 from "@/assets/gallery/interventie-05.jpg.asset.json";
import photo06 from "@/assets/gallery/interventie-06.jpg.asset.json";
import photo07 from "@/assets/gallery/interventie-07.jpg.asset.json";
import photo08 from "@/assets/gallery/interventie-08.jpg.asset.json";
import photo09 from "@/assets/gallery/interventie-09.jpg.asset.json";
import photo10 from "@/assets/gallery/interventie-10.jpg.asset.json";
import { MAPS } from "@/lib/site-data";
import { SectionLabel } from "@/components/site/ui";

const photos = [
  { src: photo01.url, alt: "Vulcanizare mobilă Autorun Constanța" },
  { src: photo02.url, alt: "Schimb de roată efectuat la client" },
  { src: photo03.url, alt: "Intervenție Autorun la un autoturism albastru" },
  { src: photo04.url, alt: "Intervenție de vulcanizare la o dubă" },
  { src: photo05.url, alt: "Duba Autorun la o intervenție de noapte" },
  { src: photo06.url, alt: "Schimb de roată în parcarea clientului" },
  { src: photo07.url, alt: "Intervenție de vulcanizare pe autostradă" },
  { src: photo08.url, alt: "Reparație de roată direct în oraș" },
  { src: photo09.url, alt: "Asistență auto pentru pornirea unei mașini" },
  { src: photo10.url, alt: "Reparație auto efectuată la locația clientului" },
];

export function InterventionsGallery() {
  return (
    <section id="galerie" className="bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Galerie · Intervenții reale</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Poze reale din intervențiile noastre.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Imagini din teren, cu duba noastră și lucrări făcute direct la client, pe autostradă sau în oraș.
            </p>
          </div>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-background"
          >
            <Camera className="size-4 text-brand" /> Vezi profilul Google <ExternalLink className="size-3.5" />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <a
              key={photo.src}
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-lg bg-card shadow-card ${
                index === 0 ? "col-span-2 aspect-[16/9] sm:row-span-2 sm:aspect-auto" : "aspect-[4/5]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={index === 0 ? 1254 : 1600}
                height={index === 0 ? 706 : index === 3 || index === 4 || index === 8 ? 1200 : 2133}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="sr-only">Deschide fotografiile în Google Maps</span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Fotografii publicate pe profilul Google Maps Vulcanizare Mobila Constanta.
        </p>
      </div>
    </section>
  );
}
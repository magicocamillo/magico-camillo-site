import Link from "next/link";

interface ServiceDetailPageProps {
  title: string;
  intro: string;
  heroImage: string;
  description: string;
  galleryImages: string[];
  features: Array<{ title: string; description: string }>;
  technicalRequirements: string[];
}

export default function ServiceDetailPage({
  title,
  intro,
  heroImage,
  description,
  galleryImages,
  features,
  technicalRequirements,
}: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Spettacoli</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">{intro}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.35)]">
            <img src={heroImage} alt={title} className="h-[420px] w-full object-cover object-center sm:h-[520px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Caratteristiche dello spettacolo</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Un intrattenimento elegante, coinvolgente e memorabile.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-stage backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/95 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Galleria</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Momenti di magia da vivere in scena.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-stage">
                <img src={image} alt={title} className="h-72 w-full object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_70px_rgba(0,0,0,0.3)]">
            <div className="aspect-[16/9] bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.16),_transparent_60%)] p-8">
              <div className="flex h-full items-center justify-center rounded-[24px] border border-[#d4af37]/20 bg-black/40">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-3xl text-[#d4af37]">
                  ▶
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Video trailer</p>
              <p className="mt-3 text-lg leading-8 text-white/70">
                Placeholder del trailer video, pronto per essere sostituito con il materiale finale.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-black/70 p-8 shadow-stage backdrop-blur-xl sm:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Esigenze tecniche</p>
            <ul className="mt-6 space-y-4 text-white/70">
              {technicalRequirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,_rgba(212,175,55,0.16),_rgba(0,0,0,0.9))] p-10 shadow-[0_0_70px_rgba(212,175,55,0.12)] sm:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">Preventivo</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Richiedi un preventivo personalizzato.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Ti contatteremo per definire il format ideale, la durata e le esigenze tecniche del tuo evento.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#e6c95f]"
          >
            Richiedi un preventivo
          </Link>
        </div>
      </section>
    </main>
  );
}

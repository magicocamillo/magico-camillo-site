import Link from "next/link";

const collaborations = [
  {
    name: "Grand Hotel Piz Galin",
    location: "Andalo (TN)",
    image: "/images/collaborazioni/piz-galin.jpg",
    description:
      "Da diversi anni porto il mio spettacolo per bambini e famiglie al Grand Hotel Piz Galin, contribuendo ad animare le serate dedicate agli ospiti dell'hotel.",
    website: "https://www.pizgalin.it",
  },
];

export default function CollaborationsSection() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-[#d4af37]">
            COLLABORAZIONI
          </p>

          <h2 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">
            Family Hotel che hanno scelto
            <br />
            Magico Camillo
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/70">
            Negli anni ho avuto il piacere di collaborare con numerosi Family Hotel,
            portando spettacoli di magia, comicità e teatro pensati per coinvolgere
            tutta la famiglia.
          </p>

        </div>

        <div className="mt-20 space-y-12">

          {collaborations.map((hotel) => (
            <div
              key={hotel.name}
              className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="grid lg:grid-cols-2">

                <div>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-12">

                  <p className="uppercase tracking-[0.35em] text-[#d4af37]">
                    Collaborazione
                  </p>

                  <h3 className="mt-5 text-4xl font-semibold text-white">
                    {hotel.name}
                  </h3>

                  <p className="mt-3 text-lg text-white/60">
                    {hotel.location}
                  </p>

                  <p className="mt-8 text-lg leading-8 text-white/75">
                    {hotel.description}
                  </p>

                  <Link
                    href={hotel.website}
                    target="_blank"
                    className="mt-10 w-fit rounded-full border border-[#d4af37] px-8 py-4 uppercase tracking-[0.18em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
                  >
                    Visita il sito dell'hotel
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
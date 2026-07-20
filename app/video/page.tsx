export default function Video() {
  return (
    <main className="px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-16">

        {/* Header */}
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-stage backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/85">
            Video
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Entra nel mondo di Magico Camillo
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Esplora il mondo del Magico Camillo attraverso timelapse,
storie comiche, backstage, tutorial, spettacoli e tanti altri
video che raccontano il dietro le quinte della magia.
          </p>
        </section>

        {/* MONTAGGIO */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl">
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full"
            >
              <source
                src="/video/montaggio-spettacolo-timelapse.mp4"
                type="video/mp4"
              />
              Il browser non supporta la riproduzione del video.
            </video>
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Dietro le quinte
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Montaggio dello spettacolo
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Dal furgone al palcoscenico: in questo timelapse puoi vedere come,
            in pochi minuti, luci, audio, scenografie e tutta l'attrezzatura
            prendono forma fino a trasformare un normale spazio in uno
            spettacolo pronto ad accogliere il pubblico.
          </p>

        </article>

        {/* SCENETTA COMICA */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/6VPrgo70sqg"
              title="Scenetta comica - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

   <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
  Le storie del Magico Camillo
</p>

<h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
  Orsetto in pericolo
</h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Magico Camillo non smette mai di inventare nuove scenette comiche,
            storie stravaganti, personaggi bizzarri e situazioni completamente
            assurde. Ogni idea nasce con un unico obiettivo: regalare sorrisi,
            stupire e far divertire i piccoli e grandi fan che seguono le sue
            avventure.
          </p>

        </article>
        {/* STORIA 2 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/f2ZkU-npZr0"
              title="Chiedi al vigile - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Le storie del Magico Camillo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Chiedi al vigile
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Un'altra esilarante avventura firmata Magico Camillo, dove una
            situazione all'apparenza normale prende una piega completamente
            imprevedibile. Tra battute, personaggi stravaganti e colpi di
            scena, anche una semplice domanda può trasformarsi in una storia
            tutta da ridere.
          </p>

        </article>
                {/* STORIA 3 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/-ExfkliH-M0"
              title="I sogni dei bambini - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Le storie del Magico Camillo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            I sogni dei bambini
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Un viaggio tra fantasia e immaginazione dove tutto può accadere.
            Con il suo stile ironico e imprevedibile, Magico Camillo trasforma
            i sogni dei bambini in una storia divertente, ricca di magia,
            sorrisi e momenti sorprendenti.
          </p>

        </article>
                {/* STORIA 4 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aHPJ6mvy5WE"
              title="Salve a tutti - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Le storie del Magico Camillo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Salve a tutti
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Una nuova avventura dove il saluto iniziale è soltanto l'inizio di
            una serie di situazioni imprevedibili. Tra comicità, fantasia e
            personaggi fuori dal comune, Magico Camillo accompagna il pubblico
            in una storia capace di sorprendere e divertire grandi e piccoli.
          </p>

        </article>
                {/* STORIA 5 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/A7z0tx0dzBw"
              title="Detective Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Nuovo spettacolo 2026
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Detective Magico Camillo
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Un mistero tutto da risolvere, indizi improbabili e situazioni
            esilaranti accompagnano il Detective Magico Camillo in una nuova
            avventura. Tra magia, comicità e colpi di scena, ogni indagine
            diventa un'occasione per coinvolgere e divertire il pubblico di
            tutte le età.
          </p>

        </article>
                {/* STORIA 6 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/7gBFiQtMTR0"
              title="Pedalare - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Le storie del Magico Camillo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Pedalare
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            E se la bicicletta ha solo una ruota? e se le bici con una ruota sono due?
            Vieni con noi a fare una pedalata in città tra sguardi stupiti e bocche spalancate...
          </p>

        </article>
                {/* STORIA 7 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/uMqnQXpvRd0"
              title="Pedalare - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Le storie del Magico Camillo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Ecco arriva il magico Camillo
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Le parole le puoi cantare, ci puoi giocare, possono diventare vive e fare
            scherzetti, ti possono inseguire, le puoi imparare a memoria e possiamo
            cantare insieme, che ne dici? 
            Perchè cantare è bellissimo e ti fa stare bene, anzi benissimo!
          </p>

        </article>
                {/* STORIA 8 */}
        <article className="rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-br from-[#151515] to-black p-8 shadow-stage lg:p-12">

          <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/04_0LmJBmrA"
              title="Il buongiorno - Magico Camillo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Le storie del Magico Camillo
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Il buongiorno
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/70">
            Basta un semplice buongiorno per dare il via a una nuova storia
            ricca di equivoci, comicità e fantasia. Con il suo stile
            imprevedibile, Magico Camillo trasforma una situazione quotidiana
            in un'avventura divertente, capace di strappare un sorriso a grandi
            e piccoli.
          </p>

        </article>
      </div>
    </main>
  );
}
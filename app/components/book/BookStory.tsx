export default function BookStory() {
  return (
    <section className="mx-auto mt-32 max-w-7xl">

      <div className="rounded-[40px] border border-[#d4af37]/20 bg-[#0d0d0d] px-10 py-16 lg:px-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* FOTO */}

          <div>

            <img
              src="/images/products/suono-delle-cose-3.png"
              alt="Come nasce il libro"
              className="w-full rounded-[30px] shadow-2xl"
            />

          </div>

          {/* TESTO */}

          <div>

            <p className="text-sm uppercase tracking-[0.45em] text-[#d4af37]">
              COME NASCE IL LIBRO
            </p>

            <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
              Una storia nata
              <br />
              sul palcoscenico.
            </h2>

            <p className="mt-10 text-xl leading-9 text-white/75">
              Per anni ho portato magia, bolle di sapone, poesia e
              sorrisi davanti a migliaia di bambini e famiglie.
            </p>

            <p className="mt-8 text-xl leading-9 text-white/75">
              Ad ogni spettacolo vedevo negli occhi dei bambini la
              stessa meraviglia e mi sono chiesto:
            </p>

            <blockquote className="mt-10 border-l-4 border-[#d4af37] pl-6 text-3xl font-semibold italic text-white">
              "Come posso far continuare questa magia anche quando lo
              spettacolo finisce?"
            </blockquote>

            <p className="mt-10 text-xl leading-9 text-white/75">
              Da questa domanda è nato <strong>Il suono delle cose</strong>,
              un libro illustrato che unisce racconti, musica,
              audiostorie e attività per vivere insieme un'esperienza
              fatta di fantasia, emozione e gioco.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
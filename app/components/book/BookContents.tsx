export default function BookContents() {
  const contents = [
    {
      icon: "📖",
      title: "Libro illustrato",
      text: "Una storia originale ricca di poesia, fantasia e suoni che accompagnano il bambino in un viaggio fatto di immaginazione.",
    },
    {
      icon: "🫧",
      title: "Bolle di sapone magiche",
      text: "Nella confezione trovi anche le speciali bolle che possono appoggiarsi sul dito senza scoppiare, per continuare il racconto giocando.",
    },
    {
      icon: "🎧",
      title: "Audiostoria",
      text: "In seconda di copertina è presente un QR Code che permette di ascoltare l'intera storia narrata con effetti sonori e musiche originali.",
    },
    {
      icon: "🎵",
      title: "Due canzoni originali",
      text: "Composte da Magico Camillo esclusivamente per questo progetto, accompagnano il racconto e aiutano i bambini a ricordare i momenti più importanti.",
    },
    {
      icon: "👂",
      title: "Suoni della natura e della vita",
      text: "Decine di suoni registrati con grande cura: vento, acqua, oggetti, animali e tanti effetti realistici per sviluppare ascolto e fantasia.",
    },
    {
      icon: "🗣️",
      title: "Sala Giochi",
      text: "Oltre venti minuti di giochi di ascolto e ginnastica della bocca realizzati insieme a una logopedista per stimolare linguaggio, respirazione e coordinazione.",
    },
  ];

  return (
    <section className="mx-auto mt-28 max-w-7xl">

      <div className="text-center">

        <p className="uppercase tracking-[0.45em] text-[#d4af37]">
          Cosa trovi nella confezione
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Molto più di un semplice libro
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-white/70">
          Un progetto pensato per leggere, ascoltare, giocare,
          cantare e condividere momenti preziosi insieme ai bambini.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {contents.map((item) => (

          <div
            key={item.title}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/40"
          >

            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
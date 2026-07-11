const stats = [
  {
    value: "15+",
    label: "Anni di esperienza",
  },
  {
    value: "3000+",
    label: "Spettacoli",
  },
  {
    value: "Family Hotel",
    label: "Teatri • Comuni • Scuole",
  },
  {
    value: "★★★★★",
    label: "Emozioni dal vivo",
  },
];

export default function StatsBar() {
  return (
    <section className="mt-14">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

            <div className="relative">

              <p className="text-3xl font-semibold leading-none text-[#d4af37] sm:text-4xl">
                {item.value}
              </p>

              <div className="mt-5 h-px w-14 bg-[#d4af37]/30" />

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/70">
                {item.label}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
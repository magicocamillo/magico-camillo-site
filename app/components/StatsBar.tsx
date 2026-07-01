const stats = [
  { value: "15+", label: "Anni di esperienza" },
  { value: "3000+", label: "Spettacoli" },
  { value: "Migliaia", label: "di sorrisi" },
];

export default function StatsBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm uppercase tracking-[0.2em] text-white/60">
      {stats.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="text-[#d4af37]">{item.value}</div>
          <div>{item.label}</div>
          {index < stats.length - 1 ? <span className="text-[#d4af37]/70">•</span> : null}
        </div>
      ))}
    </div>
  );
}

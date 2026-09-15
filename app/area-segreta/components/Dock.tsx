"use client";

type DockItem = {
  icon: string;
  title: string;
  onClick: () => void;
};

type Props = {
  items: DockItem[];
};

export default function Dock({ items }: Props) {
  return (
    <section className="mt-10 rounded-[32px] border border-[#d4af37]/20 bg-[#111] p-8">
      <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">
        Applicazioni
      </p>

      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={item.onClick}
            className="group flex min-h-[150px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37] hover:bg-[#d4af37]/10"
          >
            <span className="text-2xl font-semibold text-white transition duration-300 group-hover:scale-105 group-hover:text-[#d4af37]">
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
"use client";

interface Props {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">

      <button
        onClick={() => onChange("Tutti")}
        className={`rounded-full px-5 py-3 ${
          selected === "Tutti"
            ? "bg-[#d4af37] text-black"
            : "border border-white/10 text-white"
        }`}
      >
        Tutti
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-3 ${
            selected === category
              ? "bg-[#d4af37] text-black"
              : "border border-white/10 text-white"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}
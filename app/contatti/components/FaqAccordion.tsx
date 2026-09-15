"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-stage backdrop-blur-xl">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-xl font-semibold text-white">{item.question}</span>
              <span className="text-2xl text-[#d4af37]">{isOpen ? "−" : "+"}</span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-8 pb-6 text-base leading-8 text-white/70">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

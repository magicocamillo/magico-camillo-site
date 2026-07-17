"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    update();

    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <header className="mb-10 rounded-[28px] border border-[#d4af37]/20 bg-[#111] p-6">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">
            MAGICO CAMILLO OS
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            Quartier Generale
          </h1>
        </div>

        <div className="text-right">
          <p className="font-semibold text-green-400">
            ● Sistema Online
          </p>

          <p className="mt-2 text-white/70">
            {time}
          </p>

          <p className="text-xs tracking-[0.25em] text-white/40">
            BUILD 1.0
          </p>
        </div>
      </div>
    </header>
  );
}
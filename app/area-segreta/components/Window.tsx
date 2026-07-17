"use client";

import { ReactNode } from "react";

type Props = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Window({
  open,
  title,
  children,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-[#d4af37]/20 bg-[#111] shadow-[0_0_80px_rgba(212,175,55,.18)]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="h-4 w-4 rounded-full bg-red-500"
            />

            <div className="h-4 w-4 rounded-full bg-yellow-400" />

            <div className="h-4 w-4 rounded-full bg-green-500" />
          </div>

          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>

          <div className="w-12" />
        </div>

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
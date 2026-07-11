"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className="group relative py-2"
    >
      <span
        className={`text-xl xl:text-2xl font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
          active
            ? "text-[#d4af37]"
            : "text-white/80 group-hover:text-[#d4af37]"
        }`}
      >
        {label}
      </span>

      <span
        className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-[#d4af37] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordine confermato",
  robots: { index: false, follow: false },
};

export default function OrdineConfermatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

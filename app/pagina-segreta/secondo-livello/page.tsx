"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ACCESS_STORAGE_KEY = "magico-camillo-secondo-livello";
const PUZZLE_IMAGE =
  "/images/pagina-segreta/puzzle-magico-camillo.jpg";

const SOLVED_PUZZLE = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function SecondoLivelloSegreto() {
  const router = useRouter();

  const [accessChecked, setAccessChecked] = useState(false);
  const [accessAllowed, setAccessAllowed] = useState(false);

  const [tiles, setTiles] = useState<number[]>(SOLVED_PUZZLE);
  const [selectedTile, setSelectedTile] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const savedAccess = window.localStorage.getItem(ACCESS_STORAGE_KEY);

    if (savedAccess !== "true") {
      router.replace("/pagina-segreta");
      return;
    }

    setAccessAllowed(true);
    setAccessChecked(true);
  }, [router]);

  useEffect(() => {
    if (accessAllowed) {
      shufflePuzzle();
    }
  }, [accessAllowed]);

  function isPuzzleSolved(currentTiles: number[]) {
    return currentTiles.every(
      (tile, index) => tile === SOLVED_PUZZLE[index]
    );
  }

  function createShuffledTiles() {
    let shuffledTiles = [...SOLVED_PUZZLE];

    do {
      shuffledTiles = [...SOLVED_PUZZLE];

      for (let index = shuffledTiles.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));

        [shuffledTiles[index], shuffledTiles[randomIndex]] = [
          shuffledTiles[randomIndex],
          shuffledTiles[index],
        ];
      }
    } while (isPuzzleSolved(shuffledTiles));

    return shuffledTiles;
  }

  function shufflePuzzle() {
    setTiles(createShuffledTiles());
    setSelectedTile(null);
    setMoves(0);
    setSolved(false);
    setGameStarted(true);
  }

  function handleTileClick(clickedIndex: number) {
    if (solved) {
      return;
    }

    if (selectedTile === null) {
      setSelectedTile(clickedIndex);
      return;
    }

    if (selectedTile === clickedIndex) {
      setSelectedTile(null);
      return;
    }

    const updatedTiles = [...tiles];

    [updatedTiles[selectedTile], updatedTiles[clickedIndex]] = [
      updatedTiles[clickedIndex],
      updatedTiles[selectedTile],
    ];

    const puzzleCompleted = isPuzzleSolved(updatedTiles);

    setTiles(updatedTiles);
    setSelectedTile(null);
    setMoves((currentMoves) => currentMoves + 1);
    setSolved(puzzleCompleted);
  }

  function getBackgroundPosition(tileNumber: number) {
    const column = tileNumber % 3;
    const row = Math.floor(tileNumber / 3);

    const horizontalPosition =
      column === 0 ? "0%" : column === 1 ? "50%" : "100%";

    const verticalPosition =
      row === 0 ? "0%" : row === 1 ? "50%" : "100%";

    return `${horizontalPosition} ${verticalPosition}`;
  }

  if (!accessChecked || !accessAllowed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#d4af37]" />

          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/50">
            Apertura del passaggio
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18),_transparent_42%)]" />

      <div className="relative mx-auto max-w-5xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
            Secondo livello sbloccato
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            Sei arrivato dove pochissimi riescono ad arrivare
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Hai osservato, ascoltato e scoperto la parola nascosta. Ora ti
            aspetta una nuova prova.
          </p>
        </header>

        <section className="mt-14 rounded-[36px] border border-[#d4af37]/30 bg-[#111] p-6 shadow-[0_0_90px_rgba(212,175,55,0.14)] sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Il puzzle del detective
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Ricomponi la fotografia
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
              Seleziona una tessera e poi selezionane un’altra per scambiarle.
              Continua fino a ricostruire completamente l’immagine.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 sm:flex-row">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                Mosse effettuate
              </p>

              <p className="mt-1 text-2xl font-bold text-[#d4af37]">
                {moves}
              </p>
            </div>

            <button
              type="button"
              onClick={shufflePuzzle}
              className="rounded-full border border-[#d4af37]/40 px-6 py-3 font-semibold text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              Mescola di nuovo
            </button>
          </div>

          <div className="mx-auto mt-8 grid w-full max-w-[650px] grid-cols-3 gap-2 rounded-[28px] border border-[#d4af37]/30 bg-black p-2 shadow-[0_0_45px_rgba(212,175,55,0.12)] sm:gap-3 sm:p-3">
            {gameStarted &&
              tiles.map((tileNumber, index) => (
                <button
                  key={`${tileNumber}-${index}`}
                  type="button"
                  onClick={() => handleTileClick(index)}
                  aria-label={`Tessera ${index + 1}`}
                  className={`aspect-square overflow-hidden rounded-xl border transition-all duration-300 sm:rounded-2xl ${
                    selectedTile === index
                      ? "scale-[0.96] border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.7)]"
                      : "border-white/10 hover:border-[#d4af37]/70"
                  }`}
                  style={{
                    backgroundImage: `url("${PUZZLE_IMAGE}")`,
                    backgroundSize: "300% 300%",
                    backgroundPosition:
                      getBackgroundPosition(tileNumber),
                    backgroundRepeat: "no-repeat",
                  }}
                />
              ))}
          </div>

          <p className="mt-6 text-center text-sm leading-6 text-white/40">
            La tessera selezionata viene evidenziata in oro. Seleziona la
            seconda tessera per effettuare lo scambio.
          </p>

          {solved && (
            <div className="mt-10 rounded-[28px] border border-emerald-500/30 bg-emerald-500/10 p-7 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Puzzle completato
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Hai ricostruito il Magico Camillo
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/65">
                Complimenti. Hai superato anche questa prova in {moves} mosse.
                Il prossimo mistero potrà nascondersi proprio qui.
              </p>

              <button
                type="button"
                onClick={shufflePuzzle}
                className="mt-6 rounded-full bg-[#d4af37] px-7 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#e5c24d]"
              >
                Gioca ancora
              </button>
            </div>
          )}
        </section>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pagina-segreta"
            className="inline-flex rounded-full border border-[#d4af37]/40 px-8 py-4 font-semibold text-[#d4af37] transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
          >
            Torna al primo indizio
          </Link>

          <Link
            href="/"
            className="inline-flex rounded-full border border-white/15 px-8 py-4 font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Torna al sito
          </Link>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import Dock from "./Dock";
import Window from "./Window";

const DIARY_STORAGE_KEY = "magico-camillo-diario-segreto";
const REGIA_STORAGE_KEY = "magico-camillo-regia-scaletta";
const AUDIO_STORAGE_KEY = "magico-camillo-audio-tracce";
const ROBOT_STORAGE_KEY = "magico-camillo-robot";

interface RegiaItem {
  id: string;
  title: string;
  notes: string;
}

interface AudioItem {
  id: string;
  title: string;
  use: string;
  duration: string;
  notes: string;
}

interface RobotItem {
  id: string;
  name: string;
  control: string;
  power: string;
  connections: string;
  notes: string;
  status: "Pronto" | "Da controllare" | "Guasto";
}

export default function Desktop() {
  const [open, setOpen] = useState<string | null>(null);

  const [diaryText, setDiaryText] = useState("");
  const [diaryLoaded, setDiaryLoaded] = useState(false);
  const [diarySaveStatus, setDiarySaveStatus] = useState("Salvato");

  const [regiaItems, setRegiaItems] = useState<RegiaItem[]>([]);
  const [regiaLoaded, setRegiaLoaded] = useState(false);
  const [regiaSaveStatus, setRegiaSaveStatus] = useState("Salvato");

  const [newRegiaTitle, setNewRegiaTitle] = useState("");
  const [newRegiaNotes, setNewRegiaNotes] = useState("");

  const [audioItems, setAudioItems] = useState<AudioItem[]>([]);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioSaveStatus, setAudioSaveStatus] = useState("Salvato");

  const [newAudioTitle, setNewAudioTitle] = useState("");
  const [newAudioUse, setNewAudioUse] = useState("");
  const [newAudioDuration, setNewAudioDuration] = useState("");
  const [newAudioNotes, setNewAudioNotes] = useState("");

  const [robotItems, setRobotItems] = useState<RobotItem[]>([]);
  const [robotLoaded, setRobotLoaded] = useState(false);
  const [robotSaveStatus, setRobotSaveStatus] = useState("Salvato");

  const [newRobotName, setNewRobotName] = useState("");
  const [newRobotControl, setNewRobotControl] = useState("");
  const [newRobotPower, setNewRobotPower] = useState("");
  const [newRobotConnections, setNewRobotConnections] = useState("");
  const [newRobotNotes, setNewRobotNotes] = useState("");
  const [newRobotStatus, setNewRobotStatus] =
    useState<RobotItem["status"]>("Pronto");

  const apps = [
    { icon: "", title: "Diario" },
    { icon: "", title: "Regia" },
    { icon: "", title: "Audio" },
    { icon: "", title: "Robot" },
    { icon: "", title: "Idee" },
    { icon: "", title: "Calendario" },
    { icon: "", title: "Archivio" },
    { icon: "", title: "Controlli" },
  ];

  useEffect(() => {
    const savedDiary = window.localStorage.getItem(DIARY_STORAGE_KEY);

    if (savedDiary !== null) {
      setDiaryText(savedDiary);
    }

    setDiaryLoaded(true);
  }, []);

  useEffect(() => {
    if (!diaryLoaded) {
      return;
    }

    setDiarySaveStatus("Salvataggio...");

    const saveTimer = window.setTimeout(() => {
      window.localStorage.setItem(DIARY_STORAGE_KEY, diaryText);
      setDiarySaveStatus("Salvato");
    }, 500);

    return () => {
      window.clearTimeout(saveTimer);
    };
  }, [diaryText, diaryLoaded]);

  useEffect(() => {
    const savedRegia = window.localStorage.getItem(REGIA_STORAGE_KEY);

    if (savedRegia !== null) {
      try {
        const parsedRegia = JSON.parse(savedRegia) as RegiaItem[];

        if (Array.isArray(parsedRegia)) {
          setRegiaItems(parsedRegia);
        }
      } catch {
        setRegiaItems([]);
      }
    }

    setRegiaLoaded(true);
  }, []);

  useEffect(() => {
    if (!regiaLoaded) {
      return;
    }

    setRegiaSaveStatus("Salvataggio...");

    const saveTimer = window.setTimeout(() => {
      window.localStorage.setItem(
        REGIA_STORAGE_KEY,
        JSON.stringify(regiaItems)
      );

      setRegiaSaveStatus("Salvato");
    }, 500);

    return () => {
      window.clearTimeout(saveTimer);
    };
  }, [regiaItems, regiaLoaded]);

  useEffect(() => {
    const savedAudio = window.localStorage.getItem(AUDIO_STORAGE_KEY);

    if (savedAudio !== null) {
      try {
        const parsedAudio = JSON.parse(savedAudio) as AudioItem[];

        if (Array.isArray(parsedAudio)) {
          setAudioItems(parsedAudio);
        }
      } catch {
        setAudioItems([]);
      }
    }

    setAudioLoaded(true);
  }, []);

  useEffect(() => {
    if (!audioLoaded) {
      return;
    }

    setAudioSaveStatus("Salvataggio...");

    const saveTimer = window.setTimeout(() => {
      window.localStorage.setItem(
        AUDIO_STORAGE_KEY,
        JSON.stringify(audioItems)
      );

      setAudioSaveStatus("Salvato");
    }, 500);

    return () => {
      window.clearTimeout(saveTimer);
    };
  }, [audioItems, audioLoaded]);

  useEffect(() => {
    const savedRobot = window.localStorage.getItem(ROBOT_STORAGE_KEY);

    if (savedRobot !== null) {
      try {
        const parsedRobot = JSON.parse(savedRobot) as RobotItem[];

        if (Array.isArray(parsedRobot)) {
          setRobotItems(parsedRobot);
        }
      } catch {
        setRobotItems([]);
      }
    }

    setRobotLoaded(true);
  }, []);

  useEffect(() => {
    if (!robotLoaded) {
      return;
    }

    setRobotSaveStatus("Salvataggio...");

    const saveTimer = window.setTimeout(() => {
      window.localStorage.setItem(
        ROBOT_STORAGE_KEY,
        JSON.stringify(robotItems)
      );

      setRobotSaveStatus("Salvato");
    }, 500);

    return () => {
      window.clearTimeout(saveTimer);
    };
  }, [robotItems, robotLoaded]);

  function addRegiaItem() {
    const cleanTitle = newRegiaTitle.trim();

    if (!cleanTitle) {
      return;
    }

    const newItem: RegiaItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: cleanTitle,
      notes: newRegiaNotes.trim(),
    };

    setRegiaItems((currentItems) => [...currentItems, newItem]);
    setNewRegiaTitle("");
    setNewRegiaNotes("");
  }

  function updateRegiaItem(
    id: string,
    field: "title" | "notes",
    value: string
  ) {
    setRegiaItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  function deleteRegiaItem(id: string) {
    setRegiaItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function moveRegiaItem(index: number, direction: "up" | "down") {
    const destinationIndex = direction === "up" ? index - 1 : index + 1;

    if (
      destinationIndex < 0 ||
      destinationIndex >= regiaItems.length
    ) {
      return;
    }

    setRegiaItems((currentItems) => {
      const updatedItems = [...currentItems];
      const currentItem = updatedItems[index];

      updatedItems[index] = updatedItems[destinationIndex];
      updatedItems[destinationIndex] = currentItem;

      return updatedItems;
    });
  }

  function addAudioItem() {
    const cleanTitle = newAudioTitle.trim();

    if (!cleanTitle) {
      return;
    }

    const newItem: AudioItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: cleanTitle,
      use: newAudioUse.trim(),
      duration: newAudioDuration.trim(),
      notes: newAudioNotes.trim(),
    };

    setAudioItems((currentItems) => [...currentItems, newItem]);

    setNewAudioTitle("");
    setNewAudioUse("");
    setNewAudioDuration("");
    setNewAudioNotes("");
  }

  function updateAudioItem(
    id: string,
    field: "title" | "use" | "duration" | "notes",
    value: string
  ) {
    setAudioItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  function deleteAudioItem(id: string) {
    setAudioItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function moveAudioItem(index: number, direction: "up" | "down") {
    const destinationIndex = direction === "up" ? index - 1 : index + 1;

    if (
      destinationIndex < 0 ||
      destinationIndex >= audioItems.length
    ) {
      return;
    }

    setAudioItems((currentItems) => {
      const updatedItems = [...currentItems];
      const currentItem = updatedItems[index];

      updatedItems[index] = updatedItems[destinationIndex];
      updatedItems[destinationIndex] = currentItem;

      return updatedItems;
    });
  }

  function addRobotItem() {
    const cleanName = newRobotName.trim();

    if (!cleanName) {
      return;
    }

    const newItem: RobotItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: cleanName,
      control: newRobotControl.trim(),
      power: newRobotPower.trim(),
      connections: newRobotConnections.trim(),
      notes: newRobotNotes.trim(),
      status: newRobotStatus,
    };

    setRobotItems((currentItems) => [...currentItems, newItem]);

    setNewRobotName("");
    setNewRobotControl("");
    setNewRobotPower("");
    setNewRobotConnections("");
    setNewRobotNotes("");
    setNewRobotStatus("Pronto");
  }

  function updateRobotItem(
    id: string,
    field: keyof Omit<RobotItem, "id">,
    value: string
  ) {
    setRobotItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  }

  function deleteRobotItem(id: string) {
    setRobotItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <Dock
        items={apps.map((app) => ({
          icon: app.icon,
          title: app.title,
          onClick: () => setOpen(app.title),
        }))}
      />

      <Window
        open={open !== null}
        title={open ?? ""}
        onClose={() => setOpen(null)}
      >
        {open === "Diario" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-3xl font-bold text-[#d4af37]">
                Diario Segreto
              </h2>

              <div className="flex items-center gap-2 text-sm text-white/50">
                <span
                  className={`h-2 w-2 rounded-full ${
                    diarySaveStatus === "Salvato"
                      ? "bg-emerald-400"
                      : "animate-pulse bg-[#d4af37]"
                  }`}
                />

                <span>{diarySaveStatus}</span>
              </div>
            </div>

            <p className="text-white/60">
              Uno spazio riservato per annotare idee, effetti, battute e nuovi
              numeri dello spettacolo.
            </p>

            <textarea
              value={diaryText}
              onChange={(event) => setDiaryText(event.target.value)}
              className="min-h-[450px] w-full resize-y rounded-2xl border border-white/10 bg-black/40 p-6 text-lg leading-8 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
              placeholder="Scrivi qui idee, effetti, numeri, musiche..."
              spellCheck
            />

            <p className="text-sm text-white/40">
              Il contenuto viene salvato automaticamente su questo dispositivo.
            </p>
          </div>
        )}

        {open === "Regia" && (
          <div className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#d4af37]">
                  Regia dello spettacolo
                </h2>

                <p className="mt-2 text-white/60">
                  Crea e ordina la scaletta completa dello spettacolo.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/50">
                <span
                  className={`h-2 w-2 rounded-full ${
                    regiaSaveStatus === "Salvato"
                      ? "bg-emerald-400"
                      : "animate-pulse bg-[#d4af37]"
                  }`}
                />

                <span>{regiaSaveStatus}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white">
                Aggiungi un numero
              </h3>

              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  value={newRegiaTitle}
                  onChange={(event) =>
                    setNewRegiaTitle(event.target.value)
                  }
                  placeholder="Titolo del numero"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <textarea
                  value={newRegiaNotes}
                  onChange={(event) =>
                    setNewRegiaNotes(event.target.value)
                  }
                  placeholder="Musica, luci, video, materiali, battute o cambi scena"
                  className="min-h-[120px] w-full resize-y rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <button
                  type="button"
                  onClick={addRegiaItem}
                  disabled={!newRegiaTitle.trim()}
                  className="rounded-full bg-[#d4af37] px-7 py-3 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Aggiungi alla scaletta
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {regiaItems.length === 0 && (
                <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
                  <p className="text-lg text-white/50">
                    La scaletta è ancora vuota.
                  </p>
                </div>
              )}

              {regiaItems.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 text-xl font-bold text-[#d4af37]">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1 space-y-4">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(event) =>
                          updateRegiaItem(
                            item.id,
                            "title",
                            event.target.value
                          )
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-xl font-semibold text-white outline-none transition focus:border-[#d4af37]"
                      />

                      <textarea
                        value={item.notes}
                        onChange={(event) =>
                          updateRegiaItem(
                            item.id,
                            "notes",
                            event.target.value
                          )
                        }
                        placeholder="Aggiungi note tecniche o artistiche"
                        className="min-h-[120px] w-full resize-y rounded-2xl border border-white/10 bg-black/50 px-5 py-4 leading-7 text-white/80 outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="flex shrink-0 flex-row gap-2 lg:flex-col">
                      <button
                        type="button"
                        onClick={() => moveRegiaItem(index, "up")}
                        disabled={index === 0}
                        className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37] disabled:cursor-not-allowed disabled:opacity-25"
                      >
                        Su
                      </button>

                      <button
                        type="button"
                        onClick={() => moveRegiaItem(index, "down")}
                        disabled={index === regiaItems.length - 1}
                        className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37] disabled:cursor-not-allowed disabled:opacity-25"
                      >
                        Giù
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteRegiaItem(item.id)}
                        className="rounded-xl border border-red-500/30 px-4 py-3 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:bg-red-500/10"
                      >
                        Elimina
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {open === "Audio" && (
          <div className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#d4af37]">
                  Audio e musiche
                </h2>

                <p className="mt-2 text-white/60">
                  Organizza musiche, effetti sonori e tracce dello spettacolo.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/50">
                <span
                  className={`h-2 w-2 rounded-full ${
                    audioSaveStatus === "Salvato"
                      ? "bg-emerald-400"
                      : "animate-pulse bg-[#d4af37]"
                  }`}
                />

                <span>{audioSaveStatus}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white">
                Aggiungi una traccia
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  value={newAudioTitle}
                  onChange={(event) =>
                    setNewAudioTitle(event.target.value)
                  }
                  placeholder="Titolo della traccia"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <input
                  type="text"
                  value={newAudioUse}
                  onChange={(event) =>
                    setNewAudioUse(event.target.value)
                  }
                  placeholder="Utilizzo nello spettacolo"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <input
                  type="text"
                  value={newAudioDuration}
                  onChange={(event) =>
                    setNewAudioDuration(event.target.value)
                  }
                  placeholder="Durata, ad esempio 02:30"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <input
                  type="text"
                  value={newAudioNotes}
                  onChange={(event) =>
                    setNewAudioNotes(event.target.value)
                  }
                  placeholder="Note tecniche o indicazioni Go Button"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />
              </div>

              <button
                type="button"
                onClick={addAudioItem}
                disabled={!newAudioTitle.trim()}
                className="mt-5 rounded-full bg-[#d4af37] px-7 py-3 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Aggiungi traccia
              </button>
            </div>

            <div className="space-y-4">
              {audioItems.length === 0 && (
                <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
                  <p className="text-lg text-white/50">
                    Non hai ancora aggiunto tracce audio.
                  </p>
                </div>
              )}

              {audioItems.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 text-xl font-bold text-[#d4af37]">
                      {index + 1}
                    </div>

                    <div className="grid min-w-0 flex-1 gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(event) =>
                          updateAudioItem(
                            item.id,
                            "title",
                            event.target.value
                          )
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-lg font-semibold text-white outline-none transition focus:border-[#d4af37]"
                      />

                      <input
                        type="text"
                        value={item.use}
                        onChange={(event) =>
                          updateAudioItem(
                            item.id,
                            "use",
                            event.target.value
                          )
                        }
                        placeholder="Utilizzo nello spettacolo"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />

                      <input
                        type="text"
                        value={item.duration}
                        onChange={(event) =>
                          updateAudioItem(
                            item.id,
                            "duration",
                            event.target.value
                          )
                        }
                        placeholder="Durata"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />

                      <input
                        type="text"
                        value={item.notes}
                        onChange={(event) =>
                          updateAudioItem(
                            item.id,
                            "notes",
                            event.target.value
                          )
                        }
                        placeholder="Note tecniche"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteAudioItem(item.id)}
                      className="h-fit rounded-xl border border-red-500/30 px-4 py-3 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:bg-red-500/10"
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {open === "Robot" && (
          <div className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#d4af37]">
                  Robot e automazioni
                </h2>

                <p className="mt-2 text-white/60">
                  Archivia collegamenti e informazioni tecniche dei dispositivi.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/50">
                <span
                  className={`h-2 w-2 rounded-full ${
                    robotSaveStatus === "Salvato"
                      ? "bg-emerald-400"
                      : "animate-pulse bg-[#d4af37]"
                  }`}
                />

                <span>{robotSaveStatus}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white">
                Aggiungi dispositivo
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  value={newRobotName}
                  onChange={(event) =>
                    setNewRobotName(event.target.value)
                  }
                  placeholder="Nome del robot o dispositivo"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <input
                  type="text"
                  value={newRobotControl}
                  onChange={(event) =>
                    setNewRobotControl(event.target.value)
                  }
                  placeholder="Tipo di controllo o radiocomando"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <input
                  type="text"
                  value={newRobotPower}
                  onChange={(event) =>
                    setNewRobotPower(event.target.value)
                  }
                  placeholder="Alimentazione, batterie o tensione"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <input
                  type="text"
                  value={newRobotConnections}
                  onChange={(event) =>
                    setNewRobotConnections(event.target.value)
                  }
                  placeholder="Collegamenti, canali o configurazione"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />

                <select
                  value={newRobotStatus}
                  onChange={(event) =>
                    setNewRobotStatus(
                      event.target.value as RobotItem["status"]
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition focus:border-[#d4af37]"
                >
                  <option value="Pronto">Pronto</option>
                  <option value="Da controllare">Da controllare</option>
                  <option value="Guasto">Guasto</option>
                </select>

                <input
                  type="text"
                  value={newRobotNotes}
                  onChange={(event) =>
                    setNewRobotNotes(event.target.value)
                  }
                  placeholder="Note tecniche"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                />
              </div>

              <button
                type="button"
                onClick={addRobotItem}
                disabled={!newRobotName.trim()}
                className="mt-5 rounded-full bg-[#d4af37] px-7 py-3 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Aggiungi dispositivo
              </button>
            </div>

            <div className="space-y-4">
              {robotItems.length === 0 && (
                <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
                  <p className="text-lg text-white/50">
                    Non hai ancora aggiunto dispositivi.
                  </p>
                </div>
              )}

              {robotItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(event) =>
                          updateRobotItem(
                            item.id,
                            "name",
                            event.target.value
                          )
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-xl font-semibold text-white outline-none transition focus:border-[#d4af37]"
                      />

                      <select
                        value={item.status}
                        onChange={(event) =>
                          updateRobotItem(
                            item.id,
                            "status",
                            event.target.value
                          )
                        }
                        className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition focus:border-[#d4af37]"
                      >
                        <option value="Pronto">Pronto</option>
                        <option value="Da controllare">
                          Da controllare
                        </option>
                        <option value="Guasto">Guasto</option>
                      </select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        value={item.control}
                        onChange={(event) =>
                          updateRobotItem(
                            item.id,
                            "control",
                            event.target.value
                          )
                        }
                        placeholder="Tipo di controllo"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />

                      <input
                        type="text"
                        value={item.power}
                        onChange={(event) =>
                          updateRobotItem(
                            item.id,
                            "power",
                            event.target.value
                          )
                        }
                        placeholder="Alimentazione"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />

                      <input
                        type="text"
                        value={item.connections}
                        onChange={(event) =>
                          updateRobotItem(
                            item.id,
                            "connections",
                            event.target.value
                          )
                        }
                        placeholder="Collegamenti"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />

                      <input
                        type="text"
                        value={item.notes}
                        onChange={(event) =>
                          updateRobotItem(
                            item.id,
                            "notes",
                            event.target.value
                          )
                        }
                        placeholder="Note tecniche"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => deleteRobotItem(item.id)}
                        className="rounded-xl border border-red-500/30 px-4 py-3 text-sm font-semibold text-red-300 transition hover:border-red-400 hover:bg-red-500/10"
                      >
                        Elimina
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/40">
              I dispositivi vengono salvati automaticamente su questo
              dispositivo.
            </p>
          </div>
        )}

        {open === "Idee" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#d4af37]">
              Laboratorio delle idee
            </h2>

            <p className="text-lg leading-8 text-white/70">
              Uno spazio dedicato a nuove gag, personaggi, scenografie e
              invenzioni ancora da sviluppare.
            </p>
          </div>
        )}

        {open === "Calendario" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#d4af37]">
              Calendario operativo
            </h2>

            <p className="text-lg leading-8 text-white/70">
              Qui potrai organizzare prove, spettacoli, scadenze e lavori da
              completare.
            </p>
          </div>
        )}

        {open === "Archivio" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#d4af37]">
              Archivio riservato
            </h2>

            <p className="text-lg leading-8 text-white/70">
              Qui potrai conservare documenti, testi, copioni e materiale
              riservato dello spettacolo.
            </p>
          </div>
        )}

        {open === "Controlli" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#d4af37]">
              Controlli di sistema
            </h2>

            <p className="text-lg leading-8 text-white/70">
              Qui potrai raccogliere impostazioni tecniche, controlli luci,
              dispositivi e configurazioni dello spettacolo.
            </p>
          </div>
        )}
      </Window>
    </>
  );
}
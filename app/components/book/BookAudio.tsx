"use client";

import { useEffect, useRef, useState } from "react";

export default function BookAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) {
      return;
    }

    function updateTime(event: Event) {
      const audio = event.currentTarget as HTMLAudioElement;

      setCurrentTime(audio.currentTime);
    }

    function updateDuration(event: Event) {
      const audio = event.currentTarget as HTMLAudioElement;

      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    }

    function handleEnded() {
      setIsPlaying(false);
      setCurrentTime(0);
    }

    if (Number.isFinite(audioElement.duration)) {
      setDuration(audioElement.duration);
    }

    audioElement.addEventListener("timeupdate", updateTime);
    audioElement.addEventListener("loadedmetadata", updateDuration);
    audioElement.addEventListener("durationchange", updateDuration);
    audioElement.addEventListener("canplay", updateDuration);
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("timeupdate", updateTime);
      audioElement.removeEventListener("loadedmetadata", updateDuration);
      audioElement.removeEventListener("durationchange", updateDuration);
      audioElement.removeEventListener("canplay", updateDuration);
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  async function togglePlay() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);

        if (Number.isFinite(audio.duration)) {
          setDuration(audio.duration);
        }
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function handleProgressChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const audio = audioRef.current;
    const newTime = Number(event.target.value);

    if (!audio) {
      return;
    }

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }

  function handleVolumeChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const audio = audioRef.current;
    const newVolume = Number(event.target.value);

    if (!audio) {
      return;
    }

    audio.volume = newVolume;
    setVolume(newVolume);
  }

  function formatTime(seconds: number) {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
  }

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-0">
      <div className="overflow-hidden rounded-[40px] border border-[#d4af37]/20 bg-gradient-to-br from-[#171717] via-black to-[#0b0b0b] p-8 lg:p-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-[#d4af37]">
            Ascolta un&apos;anteprima
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-6xl">
            Le parole prendono vita
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70 lg:text-xl lg:leading-9">
            Un estratto dell&apos;audiostoria con voce, musica, suoni
            naturali ed effetti sonori originali.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-6 lg:p-10">
          <audio
            ref={audioRef}
            preload="auto"
            src="/audio/il-suono-delle-cose-anteprima.mp3"
          />

          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={
                isPlaying
                  ? "Metti in pausa"
                  : "Riproduci"
              }
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-lg font-bold text-black shadow-[0_0_45px_rgba(212,175,55,0.4)] transition duration-300 hover:scale-105"
            >
              {isPlaying ? "Pausa" : "Play"}
            </button>

            <div className="w-full flex-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-bold text-white">
                    Il suono delle cose
                  </p>

                  <p className="mt-1 text-white/50">
                    Anteprima dell&apos;audiostoria
                  </p>
                </div>

                <p className="whitespace-nowrap text-sm text-white/60">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </p>
              </div>

              <input
                type="range"
                min="0"
                max={duration > 0 ? duration : 0}
                step="0.1"
                value={Math.min(currentTime, duration || 0)}
                onChange={handleProgressChange}
                className="mt-7 w-full cursor-pointer accent-[#d4af37]"
                aria-label="Avanzamento audio"
              />

              <div className="mt-7 flex items-center gap-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
                  Volume
                </span>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-40 cursor-pointer accent-[#d4af37]"
                  aria-label="Volume"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center italic text-white/50">
          L&apos;audiostoria completa e la Sala Giochi sono accessibili
          tramite il QR Code presente nel libro.
        </p>
      </div>
    </section>
  );
}
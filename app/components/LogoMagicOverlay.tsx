"use client";

import { motion } from "framer-motion";

const starPath =
  "M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z";

export default function LogoMagicOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-visible">

      {/* =========================
          SCIA SINISTRA
      ========================== */}

      <motion.div
        className="absolute left-0 top-[63%] h-[4px] rounded-full"
        initial={{
          width: 0,
          x: -80,
          opacity: 0,
        }}
        animate={{
          width: ["0px", "340px", "180px", "0px"],
          x: "49vw",
          opacity: [0, 0.9, 0.7, 0],
        }}
        transition={{
          duration: 2.8,
          ease: [0.08, 0.9, 0.2, 1],
        }}
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0), rgba(255,250,220,.35), rgba(255,248,190,.8), #fff7cf, #f7d55d)",
          filter: "blur(2px)",
        }}
      />

      {/* =========================
          STELLA SINISTRA
      ========================== */}

      <motion.div
        className="absolute left-0 top-[63%]"
        initial={{
          x: -90,
          opacity: 0,
          scale: 0.25,
          rotate: 0,
        }}
        animate={{
          x: "49vw",
          opacity: [0, 1, 1, 0],
          scale: [0.25, 1.25, 1.05, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2.8,
          ease: [0.08, 0.9, 0.2, 1],
        }}
      >
        <svg width="34" height="34" viewBox="0 0 100 100">
          <path
            d={starPath}
            fill="#fff9de"
            style={{
              filter:
                "drop-shadow(0 0 10px #fff7cf) drop-shadow(0 0 28px #f7d55d)",
            }}
          />
        </svg>
      </motion.div>

      {/* =========================
          SCIA DESTRA
      ========================== */}

      <motion.div
        className="absolute right-0 top-[63%] h-[4px] rounded-full"
        initial={{
          width: 0,
          x: 80,
          opacity: 0,
        }}
        animate={{
          width: ["0px", "340px", "180px", "0px"],
          x: "-49vw",
          opacity: [0, 0.9, 0.7, 0],
        }}
        transition={{
          duration: 2.8,
          ease: [0.08, 0.9, 0.2, 1],
        }}
        style={{
          background:
            "linear-gradient(to left, rgba(255,255,255,0), rgba(255,250,220,.35), rgba(255,248,190,.8), #fff7cf, #f7d55d)",
          filter: "blur(2px)",
        }}
      />

      {/* =========================
          STELLA DESTRA
      ========================== */}

      <motion.div
        className="absolute right-0 top-[63%]"
        initial={{
          x: 90,
          opacity: 0,
          scale: 0.22,
          rotate: 0,
        }}
        animate={{
          x: "-49vw",
          opacity: [0, 1, 1, 0],
          scale: [0.22, 1.1, 1, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 2.8,
          ease: [0.08, 0.9, 0.2, 1],
        }}
      >
        <svg width="28" height="28" viewBox="0 0 100 100">
          <path
            d={starPath}
            fill="#ffffff"
            style={{
              filter:
                "drop-shadow(0 0 8px white) drop-shadow(0 0 22px #ffe17d)",
            }}
          />
        </svg>
      </motion.div>
            {/* =========================
          FLASH CENTRALE
      ========================== */}

      <motion.div
        className="absolute left-1/2 top-[63%] h-56 w-56 rounded-full"
        initial={{
          opacity: 0,
          scale: 0,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: [0, 0, 1, 0.65, 0],
          scale: [0, 0, 1.8, 1.1, 0],
        }}
        transition={{
          duration: 0.9,
          delay: 2.25,
        }}
        style={{
          background:
            "radial-gradient(circle,#fffef5 0%,#fff6c5 25%,#f7d55d 55%,rgba(247,213,93,.18) 78%,transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* =========================
          SCINTILLE
      ========================== */}

      {[
        [-70, -55],
        [70, -55],
        [-55, 55],
        [55, 55],
        [0, -85],
        [0, 85],
        [-95, 0],
        [95, 0],
      ].map(([x, y], i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-[63%]"
          initial={{
            x: "-50%",
            y: "-50%",
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: ["-50%", `calc(-50% + ${x}px)`],
            y: ["-50%", `calc(-50% + ${y}px)`],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            delay: 2.28,
            duration: 0.85,
            ease: "easeOut",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#fff8d8",
              boxShadow:
                "0 0 10px #fff7cf,0 0 22px #f7d55d",
            }}
          />
        </motion.div>
      ))}

      {/* =========================
          BAGLIORE FINALE
      ========================== */}

      <motion.div
        className="absolute left-1/2 top-[63%]"
        initial={{
          x: "-50%",
          y: "-50%",
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: [0, 0.35, 0],
          scale: [0.6, 2.4, 3.2],
        }}
        transition={{
          delay: 2.3,
          duration: 1.1,
        }}
      >
        <div
          className="h-10 w-10 rounded-full"
          style={{
            background: "#fff8d8",
            filter: "blur(18px)",
          }}
        />
      </motion.div>

    </div>
  );
}
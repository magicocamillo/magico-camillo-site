"use client";

import { motion } from "framer-motion";

const starPath =
  "M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z";

export default function LogoMagicOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-visible">

      {/* =========================
          BAGLIORE CONTINUO (drop-shadow pulsante sulla scritta)
      ========================== */}

      <motion.div
        className="absolute left-1/2 top-[63%] h-40 w-[75%] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.55) 0%, rgba(212,175,55,0.22) 40%, transparent 72%)",
          filter: "blur(45px)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.4, 0.85, 0.4],
          scale: [0.97, 1.03, 0.97],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
          SCINTILLE INIZIALI
      ========================== */}

      {[
        [85, 0],
        [77, 37],
        [53, 67],
        [19, 83],
        [-19, 83],
        [-53, 67],
        [-77, 37],
        [-85, 0],
        [-77, -37],
        [-53, -67],
        [-19, -83],
        [19, -83],
        [53, -67],
        [77, -37],
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

      {/* =========================
          SCINTILLE CICLICHE (si ripetono ogni 5s)
      ========================== */}

      {[
        [-35, -25],
        [35, -25],
        [-25, 30],
        [25, 30],
        [0, -42],
      ].map(([x, y], i) => (
        <motion.div
          key={`loop-spark-${i}`}
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
            opacity: [0, 0.85, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            delay: 3.6 + i * 0.04,
            duration: 0.7,
            repeat: Infinity,
            repeatDelay: 4.3,
            ease: "easeOut",
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 4,
              height: 4,
              background: "#fff8d8",
              boxShadow: "0 0 6px #fff7cf, 0 0 14px #f7d55d",
            }}
          />
        </motion.div>
      ))}

      {/* =========================
          PULVISCOLO MAGICO (particelle di polvere dorata in caduta lenta, loop permanente)
      ========================== */}

      {[
        { left: "40%", size: 3, duration: 7, delay: 0, drift: 6 },
        { left: "50%", size: 2, duration: 9, delay: 2.5, drift: -6 },
        { left: "60%", size: 3, duration: 8, delay: 5, drift: 6 },
      ].map((particle, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute top-[68%] rounded-full"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            background: "#f7d55d",
            boxShadow: "0 0 5px #f7d55d, 0 0 10px rgba(247,213,93,0.5)",
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [0, 55, 0],
            x: [0, particle.drift, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}

"use client";

export default function LogoMagicOverlay() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 2001 786"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
    >
      <defs>
        {/* Bagliore morbido delle scintille */}
        <filter
          id="sparkGlow"
          x="-400%"
          y="-400%"
          width="800%"
          height="800%"
        >
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Bagliore centrale */}
        <filter
          id="centralGlow"
          x="-300%"
          y="-300%"
          width="600%"
          height="600%"
        >
          <feGaussianBlur stdDeviation="16" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="flashGradient">
          <stop offset="0%" stopColor="#fffce8" stopOpacity="1" />
          <stop offset="30%" stopColor="#f7e7a1" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#e6b94d" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e6b94d" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* SCIA SINISTRA */}
      <line
        x1="720"
        y1="500"
        x2="985"
        y2="500"
        stroke="#f7e7a1"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0"
        filter="url(#sparkGlow)"
      >
        <animate
          attributeName="opacity"
          values="0;0;0.75;0"
          keyTimes="0;0.28;0.65;1"
          dur="3.7s"
          begin="0.35s"
          fill="freeze"
        />

        <animate
          attributeName="x1"
          values="720;720;930"
          keyTimes="0;0.45;1"
          dur="8.8s"
          begin="0.35s"
          fill="freeze"
        />
      </line>

      {/* SCIA DESTRA */}
      <line
        x1="1280"
        y1="500"
        x2="1016"
        y2="500"
        stroke="#f7e7a1"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0"
        filter="url(#sparkGlow)"
      >
        <animate
          attributeName="opacity"
          values="0;0;0.75;0"
          keyTimes="0;0.28;0.65;1"
          dur="3.7s"
          begin="0.35s"
          fill="freeze"
        />

        <animate
          attributeName="x1"
          values="1280;1280;1070"
          keyTimes="0;0.45;1"
          dur="1.15s"
          begin="0.35s"
          fill="freeze"
        />
      </line>

      {/* SCINTILLA SINISTRA */}
      <g opacity="0" filter="url(#sparkGlow)">
        <circle cx="150" cy="500" r="8" fill="#fffce8">
          <animate
            attributeName="cx"
            from="-250"
            to="992"
            dur="1.2s"
            begin="0.35s"
            calcMode="spline"
            keySplines="0.45 0 0.25 1"
            fill="freeze"
          />

          <animate
            attributeName="cy"
            values="460;500;495"
            dur="1.15s"
            begin="0.35s"
            fill="freeze"
          />

          <animate
            attributeName="r"
            values="4;9;6;3"
            dur="1.15s"
            begin="0.35s"
            fill="freeze"
          />
        </circle>

        <path
          d="M 720 478 L 725 495 L 742 500 L 725 505 L 720 522 L 715 505 L 698 500 L 715 495 Z"
          fill="#f7e7a1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="272 0"
            dur="1.15s"
            begin="0.35s"
            calcMode="spline"
            keySplines="0.45 0 0.25 1"
            fill="freeze"
          />

          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            from="0 720 500"
            to="270 720 500"
            dur="1.15s"
            begin="0.35s"
            fill="freeze"
          />
        </path>

        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.12;0.87;1"
          dur="1.3s"
          begin="0.35s"
          fill="freeze"
        />
      </g>

      {/* SCINTILLA DESTRA */}
      <g opacity="0" filter="url(#sparkGlow)">
        <circle cx="1850" cy="500"r="6" fill="#fffce8">
          <animate
            attributeName="cx"
            from="2250"
            to="1009"
            dur="1.15s"
            begin="0.35s"
            calcMode="spline"
            keySplines="0.45 0 0.25 1"
            fill="freeze"
          />

          <animate
            attributeName="cy"
            values="540;500;505"
            dur="2.2s"
            begin="0.35s"
            fill="freeze"
          />

          <animate
            attributeName="r"
            values="4;9;6;3"
            dur="1.15s"
            begin="0.35s"
            fill="freeze"
          />
        </circle>

        <path
          d="M 1280 478 L 1285 495 L 1302 500 L 1285 505 L 1280 522 L 1275 505 L 1258 500 L 1275 495 Z"
          fill="#f7e7a1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-271 0"
            dur="1.15s"
            begin="0.35s"
            calcMode="spline"
            keySplines="0.45 0 0.25 1"
            fill="freeze"
          />

          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            from="0 1280 500"
            to="-270 1280 500"
            dur="1.15s"
            begin="0.35s"
            fill="freeze"
          />
        </path>

        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.12;0.87;1"
          dur="1.3s"
          begin="0.35s"
          fill="freeze"
        />
      </g>

      {/* LAMPO CENTRALE */}
      <circle
        cx="1000"
        cy="500"
        r="6"
        fill="url(#flashGradient)"
        opacity="0"
        filter="url(#centralGlow)"
      >
        <animate
          attributeName="opacity"
          values="0;0;1;0.7;0"
          keyTimes="0;0.35;0.48;0.7;1"
          dur="4.65s"
          begin="5.2s"
          fill="freeze"
        />

        <animate
          attributeName="r"
          values="6;6;75;38;4"
          keyTimes="0;0.25;0.52;0.75;1"
          dur="4.65s"
          begin="5.2s"
          fill="freeze"
        />
      </circle>

      {/* STELLA CENTRALE */}
      <path
        d="M 1000 455
           L 1008 487
           L 1040 500
           L 1008 513
           L 1000 545
           L 992 513
           L 960 500
           L 992 487 Z"
        fill="#fffce8"
        opacity="0"
        filter="url(#sparkGlow)"
      >
        <animate
          attributeName="opacity"
          values="0;1;0.8;0"
          keyTimes="0;0.25;0.55;1"
          dur="0.65s"
          begin="1.38s"
          fill="freeze"
        />

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 1000 500"
          to="135 1000 500"
          dur="0.65s"
          begin="1.38s"
          fill="freeze"
        />

        <animateTransform
          attributeName="transform"
          additive="sum"
          type="scale"
          values="0.25;1.1;0.7;0"
          keyTimes="0;0.35;0.7;1"
          dur="0.65s"
          begin="1.38s"
          fill="freeze"
        />
      </path>

      {/* PICCOLE SCINTILLE FINALI */}
      <g fill="#f7e7a1" filter="url(#sparkGlow)">
        <circle cx="1000" cy="500" r="5" opacity="0">
          <animate
            attributeName="cx"
            values="1000;955;940"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            values="500;465;450"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
          <animate
            attributeName="r"
            values="2;6;0"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
        </circle>

        <circle cx="1000" cy="500" r="5" opacity="0">
          <animate
            attributeName="cx"
            values="1000;1045;1062"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            values="500;465;446"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
          <animate
            attributeName="r"
            values="2;6;0"
            dur="0.75s"
            begin="1.48s"
            fill="freeze"
          />
        </circle>

        <circle cx="1000" cy="500" r="4" opacity="0">
          <animate
            attributeName="cx"
            values="1000;965;950"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            values="500;530;548"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
          <animate
            attributeName="r"
            values="2;5;0"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
        </circle>

        <circle cx="1000" cy="500" r="4" opacity="0">
          <animate
            attributeName="cx"
            values="1000;1035;1052"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            values="500;530;550"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
          <animate
            attributeName="r"
            values="2;5;0"
            dur="0.68s"
            begin="1.52s"
            fill="freeze"
          />
        </circle>

        <circle cx="1000" cy="500" r="4" opacity="0">
          <animate
            attributeName="cx"
            values="1000;1000;1000"
            dur="0.72s"
            begin="1.5s"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            values="500;440;420"
            dur="0.72s"
            begin="1.5s"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="0.72s"
            begin="1.5s"
            fill="freeze"
          />
          <animate
            attributeName="r"
            values="2;5;0"
            dur="0.72s"
            begin="1.5s"
            fill="freeze"
          />
        </circle>
      </g>
    </svg>
  );
}
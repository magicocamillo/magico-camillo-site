"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONSENT_EVENT, readConsent } from "../lib/cookieConsent";
import { META_PIXEL_ID, trackPixel } from "../lib/metaPixel";

type FbqConsent = (command: "consent", value: "grant" | "revoke") => void;

// Codice base del pixel di Meta, caricato SOLO dopo il consenso nel banner
// cookie (GDPR). Il primo PageView parte con lo script; i successivi a ogni
// cambio pagina (Next.js non ricarica la pagina intera).
export default function MetaPixel() {
  const pathname = usePathname();
  const firstPage = useRef(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const update = () => {
      const granted = readConsent() === "accettato";
      setAllowed(granted);

      // Se il pixel era gia' caricato e il visitatore ritira il consenso,
      // Meta smette di ricevere dati da questo momento.
      const fbq = (window as unknown as { fbq?: FbqConsent }).fbq;
      if (typeof fbq === "function") {
        fbq("consent", granted ? "grant" : "revoke");
      }
    };

    update();
    window.addEventListener(CONSENT_EVENT, update);

    return () => window.removeEventListener(CONSENT_EVENT, update);
  }, []);

  useEffect(() => {
    if (firstPage.current) {
      firstPage.current = false;
      return;
    }

    trackPixel("PageView");
  }, [pathname]);

  if (!allowed) {
    return null;
  }

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}

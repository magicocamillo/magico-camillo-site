# Roadmap operativa — Sito ufficiale Magico Camillo

Questa roadmap elenca le attività operative prioritarie per lo sviluppo e la pubblicazione del sito.

---

Stato verificato via `git log` e struttura `app/` il 2026-08-04. Le voci senza riscontro diretto nel codice restano `[ ]` e vanno confermate manualmente (contenuto reale vs. solo pagina presente).

## 1. HOME
- [x] Hero definitiva (`components/Hero.tsx`, `CinematicHero.tsx`)
- [x] Animazioni eleganti (`framer-motion`, `AnimatedSection.tsx`, `ui/Reveal.tsx`)
- [x] Sezione Experience cinematografica (`Experience.tsx`, `ExperienceSection.tsx`)
- [ ] Trailer
- [x] Galleria (`PhotoGallery.tsx`, `MagicMoments*.tsx`)
- [x] Recensioni (`Testimonials.tsx` in home + pagina dedicata `recensioni/`)
- [x] CTA finale (`FinalCTA.tsx`)

## 2. CHI SONO
- [x] Storia personale (`chi-sono/components/HeroStory.tsx`)
- [x] Timeline / percorso (`JourneyTraining.tsx`)
- [x] Foto
- [x] Percorso artistico
- [x] Personaggi (`RacheleArticle.tsx`, `CapannoFinal.tsx` — da confermare che copra "personaggi")

## 3. SPETTACOLI
- [x] Pagina elenco (`spettacoli/page.tsx`)
- [x] Schede spettacoli dedicate (`family-hotel`, `feste-eventi`, `teatri-comuni`)
- [ ] Trailer per ogni spettacolo
- [ ] FAQ dedicate (FAQ esiste solo in Contatti, non specifica per spettacolo)
- [ ] Scheda tecnica scaricabile (PDF)
- [ ] Pulsante "Richiedi disponibilità" — da verificare nei dettagli pagina

## 4. GALLERIA
- [x] Lightbox (`yet-another-react-lightbox` in dipendenze)
- [ ] Filtri per categoria / tag
- [x] Animazioni leggere al caricamento
- [ ] Foto ottimizzate per web (responsive) — da verificare

## 5. VIDEO
- [x] Pagina video presente (`app/video/page.tsx`)
- [ ] Canale YouTube (embed/lista) — da verificare contenuto
- [ ] Shorts / clip brevi
- [ ] Interviste e contenuti backstage

## 6. BOUTIQUE
- [x] Prodotti reali (catalogo) (`app/data/products.ts`, pagine prodotto dedicate)
- [x] Categorie e filtri (`CategoryFilter.tsx`, `data/categories.ts`)
- [x] Scheda prodotto dettagliata (`boutique/[id]/page.tsx`, `ProductGallery.tsx`, `ProductSpecs.tsx`)
- [x] Carrello (`app/cart/page.tsx`, `data/carts.ts`)
- [ ] Integrazione PayPal
- [x] Integrazione Stripe (`stripe`, `@stripe/react-stripe-js` in dipendenze, `checkout/`, `boutique/successo`, `boutique/annullato`)
- [ ] Opzione bonifico bancario
- [x] Email automatica ordine (Resend, `api/order/route.ts`, `ordine-confermato/page.tsx`)

## 7. CALENDARIO EVENTI
- [x] Pagina presente (`app/calendario-eventi/page.tsx`)
- [ ] Archivio eventi passati — da verificare
- [ ] Mappa con luoghi degli eventi
- [ ] Pulsante "Aggiungi al calendario" (iCal / Google)

## 8. RECENSIONI
- [x] Pagina presente (`app/recensioni/page.tsx`)
- [ ] Segmentazione per tipo cliente (Family Hotel / Pro Loco / Teatri / Festival) — da verificare
- [ ] Sistema di approvazione/moderazione

## 9. CMS SANITY
- [ ] Definire gli schemi — **non iniziato**, nessuna dipendenza o cartella Sanity nel repo
- [ ] Collegamento al sito (query read-only)
- [ ] Pannello admin / ruoli (Admin, Editor, Contributor)
- [ ] Contenuti: Prodotti, Eventi, Foto, Video, Recensioni — tuttora statici in `app/data/*.ts`
- [ ] Preview draft + webhook deploy

## 10. PUBBLICAZIONE
- [x] Deploy su Vercel (progetto collegato, `.vercel/project.json` presente)
- [ ] Configurare dominio `magicocamillo.com` — da verificare
- [ ] Ottimizzazione SEO (meta, open graph, structured data) — da verificare
- [ ] Google Analytics / privacy
- [ ] Gestione cookie / banner consenso
- [ ] Backup e procedura di rollback

---

Note operative
- Lavorare a iterazioni: prima lanciare versioni statiche, poi aggiungere CMS e funzionalità dinamiche.
- Tenere coerenza stilistica: palette nero / oro / bianco, atmosfera teatrale ed elegante.
- Priorità a performance e immagini ottimizzate (Hero, Experience, Galleria).
- Extra realizzati non previsti qui in origine: sezione "Area Segreta" (mini-desktop interattivo con Terminal/Dock/Window), contenuti "libro" (`components/book/*`), pagina "Capanno Magico".

Ultimo aggiornamento: 2026-08-04

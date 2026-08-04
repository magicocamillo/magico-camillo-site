# Master Plan — Sito ufficiale Magico Camillo

## 1. Obiettivo del sito
Offrire una presenza online elegante e teatrale che comunichi l'identità artistica di Magico Camillo, faciliti le richieste di spettacoli, promuova eventi e venda merchandise selezionato.

## 2. Pubblici principali
- Family Hotel
- Comuni e Pro Loco
- Teatri
- Famiglie
- Clienti Boutique

## 3. Pagine principali
- Home
- Chi sono
- Spettacoli
- Galleria
- Video
- Calendario
- Boutique
- Contatti
- Per organizzatori
- Richiedi preventivo

## 4. Funzionalità future
- Modulo preventivo guidato (form dinamico per tipologia, durata, date, numero di spettatori)
- Boutique con carrello
- Pagamento PayPal
- Pagamento Stripe
- Bonifico bancario (istruzioni e conferma manuale)
- Email automatica ordine (con riepilogo e numero d'ordine)
- Email automatica richiesta spettacolo (con conferma ricezione)
- Calendario eventi (integrazione iCal / Google Calendar)
- Recensioni (pubbliche o moderate)
- Area download scheda tecnica (PDF per organizzatori)

## 5. Stile grafico
- Palette: nero, oro, bianco
- Atmosfera: teatrale, elegante, cinematografica, non kitsch
- Tipografia: pesi contrastati (titoli forti, testi leggibili)
- Layout: molto spazio, immagini cinematografiche in evidenza, bordi arrotondati e dettagli dorati sobri
- Tecnologia: Tailwind CSS (coerenza con repo esistente)

## 6. Prossime priorità (roadmap a breve termine)
1. ✅ Home (Hero, messaggio, CTA, elementi hero cinematografici) — fatto
2. ✅ `Experience` (sezione fotografica cinematografica) — fatto
3. ✅ Pagina `Spettacoli` (elenco + sotto-pagine family-hotel, feste-eventi, teatri-comuni) — fatto
4. ✅ Pagina `Boutique` — fatto e oltre: catalogo, carrello, checkout, pagamenti Stripe, email ordini via Resend
5. ✅ Modulo `Contatti` (form + FAQ) — fatto
6. ✅ Pubblicare su Vercel — fatto (progetto collegato, `.vercel/project.json` presente)
7. ⬜ Collegare il dominio `magicocamillo.com` (DNS, certificati SSL) — da verificare/completare

Prossimi passi reali (non nel piano originale):
- Integrazione CMS Sanity (vedi `CMS_PLAN.md`) — non ancora iniziata, contenuti Boutique tuttora statici in `app/data/*.ts`
- Calendario eventi con integrazione iCal/Google — da verificare stato
- Recensioni: pubblicazione/moderazione dinamica — da verificare stato
- Scheda tecnica PDF scaricabile per organizzatori — da verificare stato

---

Note operazionali rapide:
- Preferire progressive enhancement: lanciare prima versioni statiche, poi integrare carrello e pagamenti. → Fatto: Boutique è partita statica e ora ha già Stripe integrato.
- Documentare i percorsi immagine e le policy di naming per `public/images`.
- Preparare template email per conferme ordine e richieste spettacolo. → Fatto: Resend collegato per email ordini/contatti.

Ultimo aggiornamento: 2026-08-04

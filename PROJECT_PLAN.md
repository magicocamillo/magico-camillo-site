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
1. Completare Home (Hero, messaggio, CTA, elementi hero cinematografici)
2. Sistemare `Experience` (trasformare in sezione fotografica cinematografica)
3. Creare pagina `Spettacoli` (elenco spettacoli, dettagli tecnici, schede scaricabili)
4. Creare pagina `Boutique` vetrina (griglia prodotti, immagini, pulsanti Acquista)
5. Creare modulo `Contatti` (form semplice + integrazione email)
6. Pubblicare su Vercel (deployment + configurazioni ambiente)
7. Collegare il dominio `magicocamillo.com` (DNS, certificati SSL)

---

Note operazionali rapide:
- Preferire progressive enhancement: lanciare prima versioni statiche, poi integrare carrello e pagamenti.
- Documentare i percorsi immagine e le policy di naming per `public/images`.
- Preparare template email per conferme ordine e richieste spettacolo.

Ultimo aggiornamento: 2026-07-06

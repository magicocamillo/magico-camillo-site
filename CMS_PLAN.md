CMS integration plan — Sanity for Magico Camillo

Obiettivo

Integrare Sanity come CMS headless per gestire contenuti dinamici: prodotti Boutique, eventi calendario, spettacoli, recensioni, galleria foto, video e richieste preventivo. Fornire flusso di lavoro redazionale, preview, e API stabili per il sito Next.js già esistente.

Setup iniziale

- Creare account Sanity (sanity.io) e nuovo progetto `magico-camillo`.
- Dataset: `production` (pubblico) e `drafts` (staging). Abilitare CORS per l'URL del sito (http://localhost:3000 e dominio di produzione).
- Installare Sanity CLI localmente e creare una cartella `studio/` (opzionale: repo separato o dentro workspace).

Modello dei contenuti (schemi)

1) Prodotti (boutiqueProduct)
- campi: title (string), slug (slug), description (text), shortDescription (string), price (string/number+currency), images (array of image with hotspot), sku (string), categories (array ref), available (boolean), featured (boolean), metadata (object), createdAt, updatedAt
- preview: title, image, price

2) Eventi (event)
- campi: title, slug, description, date (datetime), endDate (datetime optional), location (string), locationSlug, audience (string), capacity (number), coverImage, gallery (array image), published (boolean), organizer (reference)
- supportare iCal export: campi `icalUid`/`externalUrl`

3) Spettacoli (show)
- campi: title, slug, shortDescription, longDescription, duration, ageRange, technicalRider (file/pdf), images (array), video (reference or external url), tags, published
- relazioni: link a events quando lo show è in calendario

4) Recensioni (review)
- campi: authorName, authorRole, rating (1-5), text, date, relatedShow (reference optional), approved (boolean)

5) Galleria (photo)
- campi: title, altText, image (image), credit, tags, date
- usare image.asset.metadata per estrarre dimensioni e orientamento

6) Video (videoItem)
- campi: title, slug, description, provider (youtube/vimeo/local), videoId/url, thumbnail(image), duration, published

7) Richieste preventivo (request)
- campi: name, email, phone, message, eventType, dateOptions, numberOfGuests, attachedFile (file), status (new/processed), createdAt
- considerare privacy: non esporre direttamente via API pubblica; gestire tramite webhook a backend.

Query e consumi

- Usare GROQ per query lato Next.js. Esempi:
  - Lista prodotti: *[_type == "boutiqueProduct" && published == true]{title,slug,price,images[0]}
  - Evento prossimo: *[_type == "event" && date >= now()] | order(date asc)[0..10]

Preview e Studio

- Abilitare preview mode in Next.js e endpoint /api/preview che intesti la referenza del draft.
- Configurare pane preview in Sanity Studio che richiami l'URL di preview del sito.

Image handling

- Usare Sanity Image CDN e builder (`@sanity/image-url`) per ottimizzare e trasformare immagini (crop, fit, auto=format, quality). Priorità immagine cinematografica per Hero/Experience.

Webhooks e integrazione back-end

- Webhook su publish per trigger di rebuild su Vercel (deploy hooks) o per notificare backend che invia email.
- Webhook specifico per `request` document: inviare payload a endpoint serverless che manda email e salva in un DB (opzionale).

Sicurezza e ruoli

- Creare ruoli: Admin (tutto), Editor (pubblica contenuti), Contributor (draft), Viewer.
- Non esporre documenti sensibili pubblicamente (es. richieste preventivo) — accesso via webhooks/privato API.

Localizzazione

- Se necessario aggiungere supporto i18n tramite campi per lingua o documento separato `locale`.

Deploy e ambiente

- Deploy Studio (opzionale) su Sanity hosting o Vercel.
- Ambiente: variabili `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` (privato) per operazioni write/server.

Onboarding e migrazione dati

- Preparare script di seed per importare prodotti/immagini di esempio (`sanity dataset import` o script Node che usa Sanity client).
- Documentare naming convention per immagini (`public/images/...`) se si mantiene storage locale.

Best practices e raccomandazioni

- Modellare relazioni tramite reference per evitare duplicazioni.
- Usare `slug` univoci e `published` boolean per gestire pubblicazione.
- Limitare i campi esposti nelle query pubbliche.
- Implementare processi di backup/export regolari e policy di retention.

Roadmap di integrazione (high level)

1. Creare progetto Sanity + studio localmente, definire schemi base (prodotti, eventi, spettacoli).
2. Configurare CORS, dataset, token di lettura pubblica per Next.js.
3. Implementare query GROQ nel sito per listing prodotti e eventi.
4. Abilitare preview drafts per editing WYSIWYG.
5. Aggiungere webhook per deploy su Vercel e webhook per richieste preventivo.
6. Onboarding redazionale e test di pubblicazione.

Considerazioni finali

- Il CMS non deve modificare il codice front-end; il sito Next.js consumerà dati via API read-only.
- Per le richieste preventivo, preferire una gestione tramite endpoint serverless collegato a webhook (per privacy e logica di business).

---

Ultimo aggiornamento: 2026-07-06

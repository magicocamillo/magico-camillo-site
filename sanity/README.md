Sanity studio — schemi per Magico Camillo

Questa cartella contiene gli schemi di esempio per integrare Sanity con il sito Magico Camillo.

Struttura:
- sanity/schemas/: file degli schemi (boutiqueProduct, event, show, photo, video, review, index)

Passi consigliati per iniziare (localmente):

1. Installare Sanity CLI: `npm install -g @sanity/cli`
2. Creare uno studio: `sanity init --dataset production --project <projectId>` oppure creare manualmente una cartella `studio` e copiare `sanity/schemas` dentro `studio/schemas`.
3. Copiare gli schemi da questa cartella in `studio/schemas` e aggiornare `schema.ts` per importare `schemaTypes` da `sanity/schemas/index.ts`.
4. Eseguire `sanity start` nella cartella dello studio.

Note:
- Non collegare ancora il CMS al sito: questi sono solo gli schemi e la struttura di progetto.
- Personalizzare i campi secondo le esigenze del team editoriale.

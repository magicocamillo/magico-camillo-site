import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'event',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text' }),
    defineField({ name: 'date', title: 'Data inizio', type: 'datetime' }),
    defineField({ name: 'endDate', title: 'Data fine (opzionale)', type: 'datetime' }),
    defineField({ name: 'location', title: 'Luogo', type: 'string' }),
    defineField({ name: 'coverImage', title: 'Immagine copertina', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Galleria', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'published', title: 'Pubblicato', type: 'boolean', initialValue: false }),
    defineField({ name: 'organizer', title: 'Organizzatore', type: 'string' }),
  ],
});

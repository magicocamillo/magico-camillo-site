import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'show',
  title: 'Spettacolo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'shortDescription', title: 'Descrizione breve', type: 'string' }),
    defineField({ name: 'longDescription', title: 'Descrizione completa', type: 'text' }),
    defineField({ name: 'duration', title: 'Durata (min)', type: 'number' }),
    defineField({ name: 'ageRange', title: 'Fascia d\'età', type: 'string' }),
    defineField({ name: 'technicalRider', title: 'Scheda tecnica (file)', type: 'file' }),
    defineField({ name: 'images', title: 'Immagini', type: 'array', of: [{ type: 'image' }], options: { hotspot: true } }),
    defineField({ name: 'video', title: 'Video (ref)', type: 'reference', to: [{ type: 'videoItem' }] }),
    defineField({ name: 'tags', title: 'Tag', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'published', title: 'Pubblicato', type: 'boolean', initialValue: false }),
  ],
});

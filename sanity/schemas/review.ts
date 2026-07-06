import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'review',
  title: 'Recensione',
  type: 'document',
  fields: [
    defineField({ name: 'authorName', title: 'Autore', type: 'string' }),
    defineField({ name: 'rating', title: 'Valutazione', type: 'number', options: { list: [1,2,3,4,5] } }),
    defineField({ name: 'text', title: 'Testo', type: 'text' }),
    defineField({ name: 'date', title: 'Data', type: 'datetime' }),
    defineField({ name: 'relatedShow', title: 'Spettacolo correlato', type: 'reference', to: [{ type: 'show' }] }),
    defineField({ name: 'approved', title: 'Approvata', type: 'boolean', initialValue: false }),
  ],
});

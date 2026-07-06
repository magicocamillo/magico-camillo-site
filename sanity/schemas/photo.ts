import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'photo',
  title: 'Foto Galleria',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string' }),
    defineField({ name: 'altText', title: 'Alt text', type: 'string' }),
    defineField({ name: 'image', title: 'Immagine', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'credit', title: 'Credit', type: 'string' }),
    defineField({ name: 'tags', title: 'Tag', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'date', title: 'Data', type: 'datetime' }),
  ],
});

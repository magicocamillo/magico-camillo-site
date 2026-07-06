import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'boutiqueProduct',
  title: 'Prodotto Boutique',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'shortDescription', title: 'Descrizione breve', type: 'string' }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text' }),
    defineField({ name: 'price', title: 'Prezzo', type: 'number' }),
    defineField({ name: 'currency', title: 'Valuta', type: 'string', initialValue: 'EUR' }),
    defineField({ name: 'images', title: 'Immagini', type: 'array', of: [{ type: 'image' }], options: { hotspot: true } }),
    defineField({ name: 'sku', title: 'SKU', type: 'string' }),
    defineField({ name: 'available', title: 'Disponibile', type: 'boolean', initialValue: true }),
    defineField({ name: 'featured', title: 'In evidenza', type: 'boolean' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
  ],
});

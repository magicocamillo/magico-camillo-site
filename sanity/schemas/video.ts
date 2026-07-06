import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'videoItem',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'description', title: 'Descrizione', type: 'text' }),
    defineField({ name: 'provider', title: 'Provider', type: 'string', options: { list: ['youtube', 'vimeo', 'local'] } }),
    defineField({ name: 'videoId', title: 'Video ID / URL', type: 'string' }),
    defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image' }),
    defineField({ name: 'duration', title: 'Durata (s)', type: 'number' }),
    defineField({ name: 'published', title: 'Pubblicato', type: 'boolean', initialValue: false }),
  ],
});

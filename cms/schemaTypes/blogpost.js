export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      { name: 'title',      title: 'Title',       type: 'string' },
      { name: 'slug',       title: 'Slug',        type: 'slug', options: { source: 'title', maxLength: 96 } },
      { name: 'excerpt',    title: 'Excerpt',     type: 'text' },
      { name: 'mainImage',  title: 'Featured Image', type: 'image', options: { hotspot: true } },
      { name: 'publishedAt',title: 'Publish Date', type: 'datetime' },
      { name: 'body',       title: 'Content',     type: 'blockContent' }
    ]
  }
  
// cms/schemas/portfolioItem.js
export default {
    name: 'portfolioItem',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
      { name: 'title',       title: 'Title',       type: 'string' },
      { name: 'slug',        title: 'Slug',        type: 'slug',   options: { source: 'title', maxLength: 96 } },
      { name: 'description', title: 'Description', type: 'text' },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'projectUrl',
        title: 'Project URL',
        type: 'url',
        description: 'Link to live project'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Web Development', value: 'web' },
            { title: 'App Development', value: 'app' },
            { title: 'Writing', value: 'writing' },
            { title: 'Marketing', value: 'marketing' },
          ]
        }
      },
      { name: 'publishedAt',  title: 'Published Date', type: 'datetime' },
    ]
  }
  
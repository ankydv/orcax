import { defineType } from "sanity";

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'subheading', type: 'string' },
    { name: 'image', type: 'image' },
    { name: 'ctaText', type: 'string' },
    { name: 'ctaLink', type: 'string' },
    { name: 'eyebrow', title: 'Small Top Label', type: 'string' },
  ]
})

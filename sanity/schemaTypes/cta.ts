import { defineType } from "sanity";

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    { name: 'text', type: 'string' },
    { name: 'buttonText', type: 'string' },
    { name: 'buttonLink', type: 'string' }
  ]
})

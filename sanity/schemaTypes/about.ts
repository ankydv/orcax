import { defineType } from "sanity";

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    { name: 'hero', type: 'hero' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'sections', title: 'Additional Sections', type: 'array', of: [{ type: 'textSection' }] }
  ]
})

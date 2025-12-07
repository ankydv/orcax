import { defineType } from "sanity";

export default defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    { name: 'hero', type: 'hero' },
    { name: 'email', title: 'Contact Email', type: 'string' },
    { name: 'formFields', title: 'Form Fields', type: 'array', of: [{ type: 'string' }] }
  ]
})

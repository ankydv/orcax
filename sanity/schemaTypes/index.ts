import home from './home'
import about from './about'
import contact from './contact'
import hero from './hero'
import textSection from './textSection'
import cta from './cta'
import { SchemaTypeDefinition } from 'sanity'
import list from './list'
import siteSettings from './siteSettings'

// export const schema = [home, about, contact, hero, textSection, cta /* + existing */]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, contact, hero, textSection, cta, list, siteSettings],
}
export const homeHeroQuery = `
*[_type == "home"][0]{
  // pick the first hero object inside sections[]
  "hero": sections[_type == "hero"][0]{
    eyebrow,
    heading,
    subheading,
    ctaText,
    ctaLink
  }
}
`

// Get all sections (full projection) for the first `home` document.
// This returns every object inside `sections[]` with all of its fields.
export const homeSectionsQuery = `
*[_type == "home"][0]{
  sections[] { ... }
}
`

// If you want the entire home document (all fields) use this:
export const homeFullQuery = `*[_type == "home"][0]`;

// lib/queries.ts
export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  title,
  "logoUrl": logo.asset->url
}
`

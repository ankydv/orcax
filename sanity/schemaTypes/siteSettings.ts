import { defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "title", title: "Site Title", type: "string" },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    },
  ],
});

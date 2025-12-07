import { defineType } from "sanity";
export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    { name: "title", title: "Page Title", type: "string" },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "hero" }, { type: "textSection" }, { type: "cta" }, { type: "list" } ],
    },
  ],
});

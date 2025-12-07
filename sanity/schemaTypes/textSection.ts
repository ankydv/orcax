import { defineType } from "sanity";

export default defineType({
  name: "textSection",
  title: "Text Section",
  type: "object",
  fields: [
    { name: "title", type: "string" },
    { name: "body", type: "text" },
    {name: "moreBody", type: "text" },
  ],
});

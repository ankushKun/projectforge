import { defineField, defineType } from "sanity";

export const itemSchema = defineType({
  name: "item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "inStock",
      type: "boolean",
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["software", "hardware", "other"],
      },
    }),
    defineField({
      name: "lowStock",
      type: "boolean",
    }),
  ],
});

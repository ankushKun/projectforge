import { type SchemaTypeDefinition } from "sanity";
import { itemSchema } from "./schemas/item";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [itemSchema],
};

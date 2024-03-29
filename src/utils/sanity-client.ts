import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

const builder = imageUrlBuilder(client);

export type ImgAsset = {
  asset: {
    _ref: string;
    _type: "reference";
  };
  _key: string;
  _type: "image";
};

export function urlFor(source: ImgAsset | string) {
  return builder.image(source).url();
}

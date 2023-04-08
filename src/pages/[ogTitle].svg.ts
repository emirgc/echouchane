import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => ({

});

const postImportResult = await getCollection("blog", ({ data }) => !data.draft);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.ogImage)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}

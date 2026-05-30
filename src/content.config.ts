import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * News collection — one Markdown file per article under `src/content/news/`.
 *
 * Chosen over a hardcoded TS array because news is ongoing, text-only content
 * that teachers (or AI) edit file-by-file through the normal staging→publish
 * flow — no separate system needed (unlike binary documents, which go to a DMS).
 *
 * `id` (the filename without extension) is the URL slug at /novini/<id>.
 */
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Short teaser shown on listing cards. */
    excerpt: z.string(),
    /** Optional label, e.g. "Спорт", "Признание", "Събитие". */
    category: z.string().optional(),
    /** "upcoming-event" pins the item above the feed with an accent badge. */
    kind: z.enum(["news", "upcoming-event"]).default("news"),
  }),
});

export const collections = { news };

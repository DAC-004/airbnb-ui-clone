#!/usr/bin/env node

/**
 * Fetches vacation-rental-style photos from the official Pexels API
 * and saves them to public/images/listings/.
 *
 * Usage:
 *   PEXELS_API_KEY=your_key node scripts/fetch-pexels-images.mjs
 *   npm run fetch-images   (reads PEXELS_API_KEY from .env.local if present)
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images", "listings");
const CREDITS_PATH = path.join(OUT_DIR, "IMAGE_CREDITS.md");

const API_KEY = process.env.PEXELS_API_KEY;

/** @type {{ filename: string; query: string; orientation?: string }[]} */
const IMAGE_TARGETS = [
  { filename: "cabin-01.jpg", query: "log cabin vacation rental exterior", orientation: "landscape" },
  { filename: "beach-house-01.jpg", query: "beach house vacation rental", orientation: "landscape" },
  { filename: "beach-house-02.jpg", query: "seaside bungalow rental", orientation: "landscape" },
  { filename: "city-loft-01.jpg", query: "modern city loft apartment interior", orientation: "landscape" },
  { filename: "mountain-retreat-01.jpg", query: "mountain cabin retreat landscape", orientation: "landscape" },
  { filename: "lake-house-01.jpg", query: "lake house vacation home", orientation: "landscape" },
  { filename: "desert-villa-01.jpg", query: "desert villa pool architecture", orientation: "landscape" },
  { filename: "apartment-01.jpg", query: "modern apartment living room rental", orientation: "landscape" },
  { filename: "villa-01.jpg", query: "luxury villa exterior pool", orientation: "landscape" },
  { filename: "interior-01.jpg", query: "vacation rental living room cozy", orientation: "landscape" },
  { filename: "bedroom-01.jpg", query: "bedroom vacation rental interior", orientation: "landscape" },
  { filename: "kitchen-01.jpg", query: "modern kitchen interior home", orientation: "landscape" },
  { filename: "pool-01.jpg", query: "swimming pool villa backyard", orientation: "landscape" },
];

const usedPhotoIds = new Set();

/** @type {{ filename: string; photographer: string; photographerUrl: string; photoUrl: string; pexelsUrl: string }[]} */
const credits = [];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {string} query
 * @param {string | undefined} orientation
 * @param {number} page
 */
async function searchPhotos(query, orientation, page = 1) {
  const params = new URLSearchParams({
    query,
    per_page: "15",
    page: String(page),
  });

  if (orientation) {
    params.set("orientation", orientation);
  }

  const response = await fetch(
    `https://api.pexels.com/v1/search?${params.toString()}`,
    {
      headers: { Authorization: API_KEY },
    },
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Pexels search failed (${response.status}): ${body}`);
  }

  return response.json();
}

/**
 * @param {{ filename: string; query: string; orientation?: string }} target
 */
async function fetchImageForTarget(target) {
  for (let page = 1; page <= 3; page += 1) {
    const data = await searchPhotos(target.query, target.orientation, page);
    const photos = data.photos ?? [];

    for (const photo of photos) {
      if (usedPhotoIds.has(photo.id)) {
        continue;
      }

      usedPhotoIds.add(photo.id);

      const downloadUrl =
        photo.src?.large2x ?? photo.src?.large ?? photo.src?.original;

      if (!downloadUrl) {
        continue;
      }

      const imageResponse = await fetch(downloadUrl);

      if (!imageResponse.ok) {
        throw new Error(
          `Failed to download ${target.filename} (${imageResponse.status})`,
        );
      }

      const buffer = Buffer.from(await imageResponse.arrayBuffer());
      const outPath = path.join(OUT_DIR, target.filename);
      await writeFile(outPath, buffer);

      credits.push({
        filename: target.filename,
        photographer: photo.photographer ?? "Unknown",
        photographerUrl: photo.photographer_url ?? "https://www.pexels.com",
        photoUrl: photo.url ?? downloadUrl,
        pexelsUrl: `https://www.pexels.com/photo/${photo.id}/`,
      });

      console.log(`Saved ${target.filename} (Pexels ID ${photo.id})`);
      return;
    }

    await sleep(400);
  }

  throw new Error(`No unique photo found for query: ${target.query}`);
}

function buildCreditsMarkdown() {
  const lines = [
    "# Image Credits",
    "",
    "These images are used for educational/demo purposes in a Next.js Airbnb-style UI clone.",
    "",
    "All photos were fetched via the official [Pexels API](https://www.pexels.com/api/) and saved locally. No Airbnb-owned assets, external hotlinks, or scraped third-party listing photos are used in the app.",
    "",
    "## Usage Rules",
    "",
    "- No Airbnb-owned listing photos are used.",
    "- No Airbnb logos or proprietary brand assets are used.",
    "- Images are local files stored in `/public/images/listings/`.",
    "- Image paths are referenced from local mock listing data only.",
    "",
    "## Sources",
    "",
  ];

  for (const entry of credits) {
    lines.push(
      `- \`${entry.filename}\` — Source: [Pexels](https://www.pexels.com) — Photographer: [${entry.photographer}](${entry.photographerUrl}) — Photo: [View on Pexels](${entry.photoUrl})`,
    );
  }

  lines.push(
    "",
    "## License",
    "",
    "Pexels photos are free to use under the [Pexels License](https://www.pexels.com/license/). Attribution is appreciated but not required.",
    "",
  );

  return `${lines.join("\n")}\n`;
}

async function main() {
  if (!API_KEY) {
    console.error(
      "Error: PEXELS_API_KEY is not set.\n\n" +
        "Get a free API key at https://www.pexels.com/api/ then run:\n" +
        "  PEXELS_API_KEY=your_key npm run fetch-images\n\n" +
        "Or create .env.local with:\n" +
        "  PEXELS_API_KEY=your_key",
    );
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });

  console.log(`Fetching ${IMAGE_TARGETS.length} images from Pexels API...\n`);

  for (const target of IMAGE_TARGETS) {
    await fetchImageForTarget(target);
    await sleep(350);
  }

  await writeFile(CREDITS_PATH, buildCreditsMarkdown());

  console.log(`\nDone. ${credits.length} images saved to public/images/listings/`);
  console.log(`Credits written to public/images/listings/IMAGE_CREDITS.md`);
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});

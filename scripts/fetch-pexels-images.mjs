#!/usr/bin/env node

/**
 * Downloads pinned images from the official Pexels API using public/images/image-manifest.json.
 * Skips files that already exist unless --force is passed.
 *
 * Usage:
 *   npm run fetch-images
 *   npm run fetch-images -- --force
 */

import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const MANIFEST_PATH = path.join(IMAGES_DIR, "image-manifest.json");
const API_KEY = process.env.PEXELS_API_KEY;
const force = process.argv.includes("--force");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getPhotoById(photoId) {
  const response = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
    headers: { Authorization: API_KEY },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Pexels photo ${photoId} failed (${response.status}): ${body}`);
  }

  return response.json();
}

async function downloadPhoto(photo, outPath) {
  const downloadUrl =
    photo.src?.large2x ?? photo.src?.large ?? photo.src?.original;

  if (!downloadUrl) {
    throw new Error(`No download URL for Pexels photo ${photo.id}`);
  }

  const imageResponse = await fetch(downloadUrl);

  if (!imageResponse.ok) {
    throw new Error(`Download failed for ${outPath} (${imageResponse.status})`);
  }

  const buffer = Buffer.from(await imageResponse.arrayBuffer());
  await writeFile(outPath, buffer);
}

function buildCreditsMarkdown(manifest) {
  const listings = manifest.images.filter((entry) => entry.folder === "listings");
  const hosts = manifest.images.filter((entry) => entry.folder === "hosts");

  const lines = [
    "# Image Credits",
    "",
    "These images are used for educational/demo purposes in a Next.js Airbnb-style UI clone.",
    "",
    "All photos were fetched via the official [Pexels API](https://www.pexels.com/api/) using pinned photo IDs in `public/images/image-manifest.json`. Files are stored locally in git so the app works without an API key after clone.",
    "",
    "## Usage Rules",
    "",
    "- No Airbnb-owned listing photos are used.",
    "- No Airbnb logos or proprietary brand assets are used.",
    "- Images are local files stored in `/public/images/`.",
    "- Image paths are referenced from local mock listing data only.",
    "",
    "## Listing Photos",
    "",
  ];

  for (const entry of listings) {
    lines.push(
      `- \`${entry.filename}\` — Source: [Pexels](https://www.pexels.com) — Photographer: [${entry.photographer}](${entry.photographerUrl}) — Photo: [View on Pexels](${entry.photoUrl}) — ID: \`${entry.pexelsId}\``,
    );
  }

  lines.push("", "## Host Avatars", "");

  for (const entry of hosts) {
    lines.push(
      `- \`${entry.filename}\` — Source: [Pexels](https://www.pexels.com) — Photographer: [${entry.photographer}](${entry.photographerUrl}) — Photo: [View on Pexels](${entry.photoUrl}) — ID: \`${entry.pexelsId}\``,
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
        "Images committed in public/images/ work without an API key.\n" +
        "To re-download from Pexels, add PEXELS_API_KEY to .env.local and run:\n" +
        "  npm run fetch-images",
    );
    process.exit(1);
  }

  const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  let downloaded = 0;
  let skipped = 0;

  console.log(
    `Using pinned manifest (${manifest.images.length} images)${force ? " [force overwrite]" : ""}...\n`,
  );

  for (const entry of manifest.images) {
    const outDir = path.join(IMAGES_DIR, entry.folder);
    const outPath = path.join(outDir, entry.filename);
    await mkdir(outDir, { recursive: true });

    if (!force && (await fileExists(outPath))) {
      console.log(`Skip ${entry.folder}/${entry.filename} (already exists)`);
      skipped += 1;
      continue;
    }

    const photo = await getPhotoById(entry.pexelsId);
    await downloadPhoto(photo, outPath);
    console.log(`Saved ${entry.folder}/${entry.filename} (Pexels ID ${entry.pexelsId})`);
    downloaded += 1;
    await sleep(300);
  }

  await writeFile(
    path.join(IMAGES_DIR, "listings", "IMAGE_CREDITS.md"),
    buildCreditsMarkdown(manifest),
  );

  console.log(
    `\nDone. Downloaded ${downloaded}, skipped ${skipped}. Credits updated.`,
  );
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});

#!/usr/bin/env node

/**
 * Verifies all images referenced in image-manifest.json exist locally.
 * Exits 0 when every file is present (no API key required).
 */

import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const MANIFEST_PATH = path.join(IMAGES_DIR, "image-manifest.json");

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  const missing = [];

  for (const entry of manifest.images) {
    const filePath = path.join(IMAGES_DIR, entry.folder, entry.filename);

    if (!(await fileExists(filePath))) {
      missing.push(`${entry.folder}/${entry.filename}`);
    }
  }

  if (missing.length > 0) {
    console.error("Missing local image files:");
    missing.forEach((file) => console.error(`  - public/images/${file}`));
    console.error(
      "\nRun `npm run fetch-images` with PEXELS_API_KEY in .env.local to download them.",
    );
    process.exit(1);
  }

  console.log(`All ${manifest.images.length} manifest images are present locally.`);
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});

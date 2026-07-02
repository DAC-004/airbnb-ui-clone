# Add Safe Local Images to Airbnb UI Clone

## Purpose

Use this file as the complete Cursor instruction file for adding safe, local listing images to the Airbnb UI Clone project.

This task is limited to image integration and compliance preservation. The project must continue to satisfy the original assignment requirements for a Next.js 16, TypeScript, Tailwind CSS, App Router Airbnb-style UI clone.

The goal is to replace placeholder photo areas with legally safe local demo images while preserving all required routes, state logic, navigation behavior, component structure, and evaluation criteria.

---

## Project Context

The project is an Airbnb-style vacation rental interface built with:

- Next.js 16
- TypeScript
- Tailwind CSS
- App Router
- Custom React components only

The app must implement exactly three primary views:

| Route | Page | Required Purpose |
|---|---|---|
| `/` | Home Page | Search, category filtering, and listing card grid |
| `/catalog` | Catalog Page | Search results, sort control, listing cards, and map placeholder |
| `/rooms/[id]` | Room Detail Page | Room gallery, listing details, host info, amenities, and booking card |

This project is evaluated as a student/junior developer component architecture exercise. Do not treat this as a full production rental platform. The priority is rubric compliance, clean component structure, and correct use of React/Next.js fundamentals.

---

## High-Level Rubric Summary

The image integration must preserve all of the following requirements.

### Required Setup

- A `context.md` file must exist at the project root.
- The project must use Next.js 16, TypeScript, Tailwind CSS, and the App Router.
- The project must use `/app` for routes.
- The project must use `/components` for reusable UI pieces.
- The project must use `/types` for TypeScript interfaces.
- Tailwind utility classes must be used for all styling.
- No inline `style={{}}` objects are allowed.

### Required Routes

The project must include these routes:

- `/`
- `/catalog`
- `/rooms/[id]`

Do not add extra routes for this image task.

### Required Navigation

- Use Next.js `Link` for all internal navigation.
- Do not use plain `<a href="...">` tags for internal navigation.
- Clicking a listing card on the Home page must navigate to the matching Room Detail page.
- Clicking a listing card on the Catalog page must navigate to the matching Room Detail page.
- The Room Detail page must include a back button or breadcrumb that returns to the Catalog page.

### Required Home Page Behavior

The Home page must include:

- Top navigation bar with logo, search input, and user menu icons.
- Search bar using `useState`.
- Real-time listing filtering as the user types.
- Horizontal category filter row.
- Active category state using `useState`.
- Active category visual highlight.
- Responsive listing card grid.
- Each listing card must show a photo area, title, price per night, and star rating.
- Simulated loading using `useEffect`.
- A loading indicator while listing data is unavailable.
- Single-column layout at 375px mobile viewport.
- Multi-column layout at desktop breakpoints.

### Required Catalog Page Behavior

The Catalog page must include:

- Results header showing number of results.
- Sort control for ascending/descending price.
- Sort state using `useState`.
- Reuse of the same Listing Card component from the Home page.
- Map placeholder area.
- Map placeholder on the right side of cards on desktop.
- Map placeholder below cards on mobile.

Do not implement the optional real interactive map for this task.

### Required Room Detail Page Behavior

The Room Detail page must include:

- Loading simulated with `useEffect` when the page mounts.
- Use of the `id` from the URL.
- Simulated fetch using `setTimeout`.
- Loading state while room data is unavailable.
- Photo gallery at the top.
- Gallery index tracked with `useState`.
- Previous / Next buttons to cycle through photos.
- Listing header with title, star rating, number of reviews, and location.
- Host info row with avatar placeholder, host name, and years hosting.
- Amenities grid with icon + label pairs.
- Booking card with price per night.
- Guest counter using `useState`.
- CTA button.

Do not implement the optional date picker for this task.

### Required Code Quality

- Each component should live in its own file inside `/components`.
- Components should have one clear responsibility.
- No component should exceed approximately 80 lines of JSX + logic where practical.
- Components must be functional components.
- Components should be defined as `const`.
- No class components are allowed.
- TypeScript interfaces or types must be defined for the main data shapes.
- Tailwind utility classes must be used for styling.
- No UI component libraries are allowed.

Forbidden UI libraries include, but are not limited to:

- shadcn/ui
- MUI
- Ant Design
- Chakra UI
- Bootstrap
- DaisyUI

---

## Legal and Safety Rules for Images

Use legally safe local demo images only.

### Allowed Image Sources

Use images from sources with clear free-use licenses, such as:

- Unsplash
- Pexels
- Your own photos
- School-provided assets, if explicitly allowed
- Other open-license images only if the license is documented

### Forbidden Image Sources

Do not use:

- Airbnb listing photos copied from Airbnb.com
- Airbnb logos
- Airbnb icons
- Airbnb brand assets
- Screenshots of Airbnb listings as listing card images
- Random Google Images
- Pinterest images
- Instagram images
- Zillow images
- Booking.com images
- Hotel website images without permission
- Real estate listing photos without permission
- Any image without a clear license or ownership record

### Brand Safety Rule

This project may be an Airbnb-style UI clone for educational purposes, but it must not appear to be an official Airbnb product.

Do not add:

- Airbnb logo files
- Airbnb wordmark images
- Airbnb-owned listing photos
- Airbnb trademarked assets
- Official Airbnb favicon
- Official Airbnb icons
- Any copy suggesting the project is affiliated with Airbnb

---

## Required Image Folder Structure

All listing images must be stored locally in the public folder.

Expected folder:

```txt
public/images/listings/
```

Example structure:

```txt
public/
└── images/
    └── listings/
        ├── cabin-01.jpg
        ├── beach-house-01.jpg
        ├── city-loft-01.jpg
        ├── mountain-retreat-01.jpg
        ├── lake-house-01.jpg
        ├── desert-villa-01.jpg
        ├── apartment-01.jpg
        ├── villa-01.jpg
        └── IMAGE_CREDITS.md
```

Image paths used in code should look like this:

```txt
/images/listings/cabin-01.jpg
/images/listings/beach-house-01.jpg
/images/listings/city-loft-01.jpg
```

Do not use relative paths like:

```txt
../../public/images/listings/cabin-01.jpg
```

Do not use external image URLs like:

```txt
https://images.unsplash.com/...
https://images.pexels.com/...
```

The app should reference local files from `/public` using root-based paths.

---

## Recommended Image Naming Convention

Use clean, descriptive, lowercase filenames.

Good examples:

```txt
cabin-01.jpg
beach-house-01.jpg
city-loft-01.jpg
mountain-retreat-01.jpg
lake-house-01.jpg
desert-villa-01.jpg
apartment-01.jpg
villa-01.jpg
```

Avoid filenames like:

```txt
photo-1653398597364-2f3f82861ed0.jpg
IMG_3829.jpeg
Screenshot 2026-06-24 at 9.22.13 PM.png
airbnb-listing-real-photo.jpg
```

---

## Preflight Instructions for Cursor

Before editing code, inspect the project.

### Files and folders to inspect first

Inspect these before making changes:

```txt
context.md
app/page.tsx
app/catalog/page.tsx
app/rooms/[id]/page.tsx
components/
data/
types/
public/images/listings/
```

Also inspect any file that appears to contain listing data, room data, category data, or reusable card components.

Possible filenames include:

```txt
data/listings.ts
data/rooms.ts
types/listing.ts
types/room.ts
components/ListingCard.tsx
components/RoomGallery.tsx
components/ListingGrid.tsx
components/BookingCard.tsx
```

Use the actual filenames in the project. Do not invent new files if the project already has the correct structure.

---

## Preflight Terminal Commands

Run these commands from the project root.

Check whether the image folder exists:

```bash
ls public/images/listings
```

If the folder does not exist, create it:

```bash
mkdir -p public/images/listings
```

If there are no image files in the folder, stop and report:

```txt
No local image files were found in public/images/listings/. Add the image files first, then rerun the image integration task.
```

Do not wire fake image paths into the app if the files do not exist.

---

## Task Scope

### In Scope

You may:

- Add image fields to listing data.
- Add image arrays to room data if needed for the gallery.
- Update TypeScript interfaces to include image fields.
- Replace placeholder photo areas with local image rendering.
- Use Next.js `Image` from `next/image`.
- Add or update `IMAGE_CREDITS.md`.
- Add a short note to `context.md` about local demo image usage.
- Improve image container styling only where necessary to support correct display.

### Out of Scope

Do not:

- Redesign the whole UI.
- Change the assignment structure.
- Add a real map.
- Add a date picker.
- Add booking logic.
- Add authentication.
- Add API routes.
- Add server/database functionality.
- Add external image URLs.
- Configure remote image domains.
- Add image upload functionality.
- Add UI libraries.
- Add CSS frameworks.
- Replace Tailwind with custom CSS.
- Change route names.
- Remove existing `useState` usage.
- Remove existing `useEffect` loading simulation.
- Replace `Link` with `<a>` for internal navigation.
- Convert required interactive client components into server components in a way that breaks rubric behavior.
- Make unrelated logic changes.
- Make unrelated refactors.

---

## Data Model Requirements

Find the current listing or room type in `/types`.

If the project has a `Listing` type, add an `image` field if one does not already exist.

Example:

```ts
export type Listing = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
};
```

If the Room Detail page supports multiple photos, use an `images` field.

Example:

```ts
export type Room = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  hostName: string;
  yearsHosting: number;
  amenities: string[];
  images: string[];
};
```

Use the actual project data shape. Do not delete existing fields. Do not rename existing fields unless absolutely necessary.

---

## Listing Data Instructions

Find the mock data used by the Home and Catalog pages.

Each listing should point to a local image.

Example:

```ts
export const listings = [
  {
    id: "1",
    title: "Modern Cabin in the Woods",
    location: "Hudson Valley, New York",
    price: 185,
    rating: 4.92,
    category: "Cabins",
    image: "/images/listings/cabin-01.jpg",
  },
  {
    id: "2",
    title: "Beach House Near the Shore",
    location: "Montauk, New York",
    price: 240,
    rating: 4.88,
    category: "Beach",
    image: "/images/listings/beach-house-01.jpg",
  },
];
```

If the current project already has categories, keep them unchanged.

If the project already has listing IDs tied to `/rooms/[id]`, do not change those IDs.

---

## Room Gallery Data Instructions

The Room Detail page must retain the required gallery behavior.

If each room has multiple images, use a local `images` array.

Example:

```ts
images: [
  "/images/listings/cabin-01.jpg",
  "/images/listings/cabin-02.jpg",
  "/images/listings/cabin-03.jpg",
]
```

If there are not enough unique images, it is acceptable to reuse safe local demo images across rooms temporarily. However, do not reference missing files.

The Room Detail page must still:

- Track the active photo index with `useState`.
- Render the current image based on the active index.
- Include Previous and Next buttons.
- Cycle through available gallery photos.

---

## Component Instructions

### Listing Card Component

Find the reusable listing card component.

It may be named something like:

```txt
ListingCard.tsx
PropertyCard.tsx
RoomCard.tsx
```

Update it to render the local image using Next.js `Image`.

Required import:

```tsx
import Image from "next/image";
```

Recommended image container pattern:

```tsx
<div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
  <Image
    src={listing.image}
    alt={`${listing.title} in ${listing.location}`}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>
```

Adapt variable names to the actual component.

Do not paste this blindly if the component uses different prop names. Preserve existing behavior.

The listing card must still:

- Use `Link` for navigation.
- Navigate to `/rooms/[id]`.
- Show title.
- Show price per night.
- Show star rating.
- Work on both Home and Catalog pages.

### Room Gallery Component or Section

Find the room gallery implementation.

It may exist inside:

```txt
app/rooms/[id]/page.tsx
components/RoomGallery.tsx
components/Gallery.tsx
```

Update the photo display to use Next.js `Image`.

Recommended pattern:

```tsx
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100 md:aspect-[16/9]">
  <Image
    src={currentImage}
    alt={`${room.title} photo ${currentPhotoIndex + 1}`}
    fill
    sizes="100vw"
    className="object-cover"
    priority={currentPhotoIndex === 0}
  />
</div>
```

The gallery controls must remain functional.

Do not remove:

- `currentPhotoIndex`
- `setCurrentPhotoIndex`
- Previous button
- Next button
- Gallery state logic

---

## Accessibility Requirements

Every image must have meaningful alt text.

Good alt text examples:

```txt
Modern Cabin in the Woods in Hudson Valley, New York
Beach House Near the Shore in Montauk, New York
City Loft in Brooklyn, New York photo 1
```

Avoid weak alt text:

```txt
image
photo
listing
house
```

Decorative placeholder graphics may use empty alt text only if they are truly decorative. Listing photos are not decorative in this project because they communicate listing information.

---

## Tailwind Styling Requirements

Use Tailwind only.

Recommended classes for listing card image containers:

```txt
relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100
```

Recommended image classes:

```txt
object-cover transition-transform duration-300 group-hover:scale-105
```

Recommended room gallery container classes:

```txt
relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100 md:aspect-[16/9]
```

Do not use inline styles.

Forbidden:

```tsx
<div style={{ height: "300px" }}>
```

Use Tailwind instead:

```tsx
<div className="h-[300px]">
```

---

## `context.md` Update Requirement

Update `context.md` with a short section named:

```md
## Image Asset Notes
```

Add this content or a close equivalent:

```md
## Image Asset Notes

Listing images are local demo assets stored in `/public/images/listings/`. They are used to replace placeholder photo areas in the Home page, Catalog page, and Room Detail gallery. These images are not copied from Airbnb and do not include Airbnb logos, icons, or proprietary brand assets. The image integration does not change the required routes, navigation behavior, local state behavior, simulated loading behavior, or page structure.
```

Do not rewrite the full `context.md` unless the file is missing required content.

---

## `IMAGE_CREDITS.md` Requirement

Create or update this file:

```txt
public/images/listings/IMAGE_CREDITS.md
```

Use this structure:

```md
# Image Credits

These images are used for educational/demo purposes in a Next.js Airbnb-style UI clone.

## Usage Rules

- No Airbnb-owned listing photos are used.
- No Airbnb logos or proprietary brand assets are used.
- Images are local files stored in `/public/images/listings/`.
- Image paths are referenced from local mock listing data.

## Sources

- `cabin-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `beach-house-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `city-loft-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `mountain-retreat-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `lake-house-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `desert-villa-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `apartment-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]
- `villa-01.jpg` — Source: [Unsplash/Pexels/Own Photo] — Photographer: [Name if available] — URL: [Source URL]

## Notes

Source details must be completed by the project owner before final submission if they are not known at implementation time.
```

Do not invent photographer names or URLs.

If exact image source details are unavailable, write:

```md
Source details need to be completed by the project owner before submission.
```

---

## Cursor Implementation Prompt

Use the following as the direct instruction to the coding agent.

```md
# Task: Add Safe Local Listing Images

You are working on a Next.js 16 Airbnb-style UI clone built with TypeScript, Tailwind CSS, and the App Router.

Add safe local listing images to the project while preserving all assignment requirements.

## First, inspect the project

Inspect these before editing:

- `context.md`
- `app/page.tsx`
- `app/catalog/page.tsx`
- `app/rooms/[id]/page.tsx`
- `components/`
- `data/`
- `types/`
- `public/images/listings/`

Find the actual listing data source, room data source, listing card component, and room gallery implementation.

## Image rules

Use local images only from:

```txt
public/images/listings/
```

Use paths like:

```txt
/images/listings/cabin-01.jpg
```

Do not use:

- Airbnb-owned listing photos
- Airbnb logos
- Airbnb icons
- Airbnb proprietary brand assets
- Random Google Images
- External image URLs
- Remote image configuration
- Any image dependency or image library

Use Next.js `Image` from `next/image` for rendering images.

## Preflight check

Check whether local images exist:

```bash
ls public/images/listings
```

If the folder does not exist, create it:

```bash
mkdir -p public/images/listings
```

If no image files exist, stop and report that the local image files must be added first. Do not reference missing files.

## Required implementation

1. Update the listing data so each listing has a local image path.
2. Update TypeScript interfaces/types if needed.
3. Update the reusable listing card component to render the image with `next/image`.
4. Preserve listing card navigation using Next.js `Link`.
5. Preserve reuse of the listing card on both the Home and Catalog pages.
6. Update the Room Detail gallery to use local images while preserving gallery state and Previous / Next controls.
7. Add meaningful alt text for all listing and gallery images.
8. Add or update `public/images/listings/IMAGE_CREDITS.md`.
9. Add a short `Image Asset Notes` section to `context.md`.
10. Run lint/build checks if available.

## Preserve Home page requirements

Do not remove or break:

- `useState` for search input
- Real-time filtering as the user types
- `useState` for active category
- Category highlighting
- `useEffect` simulated loading
- Loading indicator
- Mobile-first single-column grid
- Desktop multi-column grid

## Preserve Catalog page requirements

Do not remove or break:

- Results header
- Number of results
- Ascending/descending sort by price
- `useState` for sort order
- Reused listing card component
- Map placeholder

Do not implement the optional real map.

## Preserve Room Detail page requirements

Do not remove or break:

- `useEffect` simulated room loading
- Use of `id` from the URL
- `setTimeout` simulated fetch
- Loading state
- Photo gallery
- `useState` gallery index
- Previous / Next gallery buttons
- Listing header
- Host info row
- Amenities grid
- Booking card
- Guest counter using `useState`

Do not implement the optional date picker.

## Code quality rules

- Components must be functional components.
- Components must be defined as `const`.
- No class components.
- Keep components focused and small.
- Use TypeScript types/interfaces.
- Use Tailwind utility classes only.
- No inline `style={{}}`.
- No UI component libraries.
- No unrelated refactors.

## Final validation

Verify:

- Home page images load.
- Catalog page images load.
- Room Detail gallery images load.
- No broken image icons appear.
- Clicking cards navigates to `/rooms/[id]`.
- Room Detail back button or breadcrumb returns to `/catalog`.
- Search still works.
- Category filter still works.
- Sort still works.
- Guest counter still works.
- Gallery Previous / Next buttons still work.
- No external image URLs are used.
- No Airbnb-owned assets are used.
- No plain internal `<a href="...">` navigation was introduced.
- `npm run lint` passes, if available.
- `npm run build` passes, if available.

## Final report

When complete, report:

1. Files inspected
2. Files changed
3. Image folder used
4. Data fields updated
5. Components updated
6. Confirmation that no Airbnb-owned assets were used
7. Confirmation that no route, logic, or rubric behavior was changed
8. Lint/build result
9. Any missing image credit details the project owner must complete
```

---

## Recommended Manual Steps Before Running Cursor

Before asking Cursor to implement, manually add images into:

```txt
public/images/listings/
```

Suggested minimum image count:

```txt
8 images for listing cards
3 to 5 images per featured room gallery if possible
```

A simple starter set is enough:

```txt
cabin-01.jpg
beach-house-01.jpg
city-loft-01.jpg
mountain-retreat-01.jpg
lake-house-01.jpg
desert-villa-01.jpg
apartment-01.jpg
villa-01.jpg
```

For the Room Detail gallery, you can reuse safe local images if needed:

```txt
cabin-01.jpg
cabin-02.jpg
cabin-03.jpg
```

If you only have one image per listing, keep the gallery logic but use an array of available safe images.

---

## Safe Example Listing Data

Use this only as a reference. Match the actual structure in the project.

```ts
export const listings = [
  {
    id: "1",
    title: "Modern Cabin in the Woods",
    location: "Hudson Valley, New York",
    price: 185,
    rating: 4.92,
    reviews: 128,
    category: "Cabins",
    image: "/images/listings/cabin-01.jpg",
    images: [
      "/images/listings/cabin-01.jpg",
      "/images/listings/mountain-retreat-01.jpg",
      "/images/listings/lake-house-01.jpg",
    ],
  },
  {
    id: "2",
    title: "Beach House Near the Shore",
    location: "Montauk, New York",
    price: 240,
    rating: 4.88,
    reviews: 94,
    category: "Beach",
    image: "/images/listings/beach-house-01.jpg",
    images: [
      "/images/listings/beach-house-01.jpg",
      "/images/listings/villa-01.jpg",
      "/images/listings/apartment-01.jpg",
    ],
  },
];
```

---

## Safe Example Listing Card Pattern

Use this only as a reference. Adapt to the actual component.

```tsx
import Image from "next/image";
import Link from "next/link";

import type { Listing } from "@/types/listing";

type ListingCardProps = {
  listing: Listing;
};

export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="group block">
      <article className="space-y-3">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={listing.image}
            alt={`${listing.title} in ${listing.location}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-neutral-950">
              {listing.title}
            </h3>
            <p className="text-sm text-neutral-800">★ {listing.rating}</p>
          </div>

          <p className="text-sm text-neutral-500">{listing.location}</p>

          <p className="text-sm text-neutral-950">
            <span className="font-semibold">${listing.price}</span> night
          </p>
        </div>
      </article>
    </Link>
  );
};
```

---

## Safe Example Room Gallery Pattern

Use this only as a reference. Adapt to the actual Room Detail component.

```tsx
import Image from "next/image";
import { useState } from "react";

import type { Room } from "@/types/room";

type RoomGalleryProps = {
  room: Room;
};

export const RoomGallery = ({ room }: RoomGalleryProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const currentImage = room.images[currentPhotoIndex];

  const showPreviousPhoto = () => {
    setCurrentPhotoIndex((currentIndex) =>
      currentIndex === 0 ? room.images.length - 1 : currentIndex - 1
    );
  };

  const showNextPhoto = () => {
    setCurrentPhotoIndex((currentIndex) =>
      currentIndex === room.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="space-y-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100 md:aspect-[16/9]">
        <Image
          src={currentImage}
          alt={`${room.title} photo ${currentPhotoIndex + 1}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority={currentPhotoIndex === 0}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={showPreviousPhoto}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
        >
          Previous
        </button>

        <p className="text-sm text-neutral-500">
          {currentPhotoIndex + 1} / {room.images.length}
        </p>

        <button
          type="button"
          onClick={showNextPhoto}
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
        >
          Next
        </button>
      </div>
    </section>
  );
};
```

---

## Final Acceptance Criteria

The task is complete only when all of the following are true:

- Local images exist in `public/images/listings/`.
- Listing data references local image paths.
- Listing cards render actual images.
- Room Detail gallery renders actual images.
- No broken images appear.
- Home page behavior is unchanged.
- Catalog page behavior is unchanged.
- Room Detail behavior is unchanged.
- Listing card navigation still works.
- The Room Detail back button or breadcrumb still works.
- `useState` requirements are still satisfied.
- `useEffect` requirements are still satisfied.
- `Link` is used for internal navigation.
- No internal plain `<a href="...">` tags are introduced.
- No Airbnb-owned assets are used.
- No external image URLs are used.
- `IMAGE_CREDITS.md` exists.
- `context.md` includes the image asset note.
- Components remain small and focused.
- TypeScript types remain valid.
- Tailwind utility classes are used for styling.
- No inline styles are introduced.
- No UI libraries are added.
- `npm run lint` passes, if available.
- `npm run build` passes, if available.

---

## Final Developer Report Template

After completing the task, provide this report:

```md
# Image Integration Report

## Files Inspected

- [List files inspected]

## Files Changed

- [List files changed]

## Image Folder Used

- `public/images/listings/`

## Data Updates

- [Describe image/image array fields added or updated]

## Component Updates

- [Describe Listing Card and Room Gallery updates]

## Compliance Confirmation

- No Airbnb-owned listing photos were used.
- No Airbnb logos, icons, or proprietary brand assets were used.
- No external image URLs were used in components.
- No route behavior was changed.
- No required state logic was removed.
- No required loading simulation was removed.
- No internal navigation was changed from `Link` to `<a>`.
- No UI libraries were added.
- No inline styles were introduced.

## Validation Results

- `npm run lint`: [pass/fail/not available]
- `npm run build`: [pass/fail/not available]

## Remaining Owner Action

- [List any missing image credit details that must be completed before submission]
```

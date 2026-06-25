# Airbnb UI Clone

A mobile-first Airbnb-style vacation rental interface built with **Next.js 16**, **React**, **TypeScript**, **Tailwind CSS**, and the **App Router**.

Browse listings on the home page, compare results on the catalog page, and view room details with photo gallery, host info, amenities, and a booking card.

## Routes

| Route | Page |
|---|---|
| `/` | Home — search, category filter, listing grid |
| `/catalog` | Catalog — sort results, map placeholder |
| `/rooms/[id]` | Room detail — gallery, host, amenities, booking |

## Project structure

```
/app          App Router pages
/components   Reusable UI components
/types        TypeScript interfaces
/data         Local mock listing data
context.md    Project specs and vision-to-spec documentation
```

## Getting started

Install dependencies (if needed):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run lint    # ESLint
npm run start   # start production server
```

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

Styling uses Tailwind utility classes only. No UI component libraries.

### Optional features

- Interactive map on `/catalog` (Leaflet + OpenStreetMap)
- Native date picker on room detail booking card
- Total price calculated from selected check-in / check-out dates

See [`context.md`](./context.md) for full specs.

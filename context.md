# Airbnb UI Clone Context

## Project Description

This project is a mobile-first Airbnb-style vacation rental interface built with Next.js 16, React, TypeScript, Tailwind CSS, and the App Router.

The goal is to implement three core Airbnb-style views:
- Home page
- Catalog/search results page
- Room detail page

The interface should be clean, responsive, and component-based. It should use Tailwind CSS utility classes only and should not depend on any prebuilt UI component library.

## Project Structure

- `/app` — App Router pages and layouts
- `/components` — reusable UI components
- `/types` — TypeScript interfaces for listing and room data
- `/data` — local mock listing and room data (24 listings) used by pages at runtime

## User Description

The user is a traveler browsing vacation rentals. They want to search for places, filter listings by category, compare prices and ratings, open a listing detail page, view photos, review host information, check amenities, and prepare to book a stay.

## Pages

### Home Page `/`

The Home page includes:
- Top navigation bar
- Logo
- Search bar input
- User menu icons
- Horizontal category filter row
- Responsive listing card grid (6 columns on wide desktop, 24 listings)

The Home page allows the user to search listings in real time and filter listings by category. Listing data starts empty; a single `useEffect` with a 1-second `setTimeout` populates local state and clears the loading indicator together.

### Catalog Page `/catalog`

The Catalog page includes:
- Results header
- Number of results
- Sort control for ascending or descending price
- Reused listing cards
- Interactive map area (Leaflet + OpenStreetMap; `MapPlaceholder` while loading)

On desktop, the map appears to the right of the listing results (~42% width, sticky). On mobile, it appears below the cards.

### Room Detail Page `/rooms/[id]`

The Room Detail page includes:
- Photo gallery with Previous and Next controls
- Listing title
- Star rating
- Number of reviews
- Location
- Host information
- Amenities grid
- Booking card
- Guest counter
- Booking CTA button
- Back button or breadcrumb returning to `/catalog`

## Main Components

- Navbar
- UserMenu
- SearchBar
- CategoryFilter
- ListingCard
- ListingGrid
- LoadingState
- CatalogHeader
- MapPlaceholder
- PhotoGallery
- PhotoGalleryControls
- RoomHeader
- HostInfo
- AmenitiesGrid
- BookingCard
- ListingMap
- BookingDateFields
- BackToCatalog

## Vision-to-Spec Workflow Notes

This project followed the vision prompting workflow before implementation:

1. **Capture** — Screenshots of Airbnb reference pages at **375px mobile** and **768px+ desktop** viewports.
2. **Prompt** — Each screenshot was attached to a coding agent with a request to identify component names, props, and layout relationships.
3. **Document** — Specs were written in this file before building each view.

### Reference Screenshots

| Viewport | Reference | Informs |
|---|---|---|
| Mobile (375px) | Airbnb home/catalog on iPhone | Navbar, search pill, category row, single-column cards |
| Mobile (375px) | Airbnb search-results style rows | Card metadata hierarchy, section spacing |
| Desktop (768px+) | Airbnb full home page | Wider grid, Explore nav link, multi-column card rows |

### Visual Design Tokens (from screenshots)

| Token | Value / pattern |
|---|---|
| Background | White (`bg-white`) |
| Primary text | Near-black (`text-neutral-900`) |
| Secondary text | Medium gray (`text-neutral-500` / `text-neutral-600`) |
| Brand accent | Airbnb pink-red `#FF385C` (logo, CTA buttons) |
| Borders | Light gray (`border-neutral-200` / `border-neutral-300`) |
| Card/image radius | Rounded corners (`rounded-xl`) |
| Search bar | Full-width pill with subtle border/shadow |
| Category row | Icon stacked above label; bottom border on active tab |
| Listing image | Landscape or square placeholder; category badge overlay |
| Card metadata | Title + star rating on one row; location and price below |
| Booking/search CTA | Full-width rounded button in brand accent color |

### Page Layout from Vision (375px → 768px+)

**Home `/`**
- Sticky navbar → search bar → horizontally scrollable category filter → listing grid.
- Mobile: single-column card stack. Desktop: progressive columns (`sm`: 2, `md`: 3, `lg`: 4, `xl`: **6**) inside a `max-w-screen-2xl` container.
- **24 listings** fill four full rows at the 6-column breakpoint.

**Catalog `/catalog`**
- Navbar → results header (count + sort; **24 stays**) → listing grid beside/below interactive map.
- Mobile: cards first, map below. Desktop: cards left (~58%), map right (~42%).

**Room Detail `/rooms/[id]`**
- Navbar → back link → full-width photo gallery → header → host → amenities.
- Mobile: booking card below content. Desktop: booking card sticky in right column.

The Home page supports discovery.
The Catalog page supports comparison.
The Room Detail page supports reviewing one listing before booking.

## Component Specifications from Vision Prompting

Specs derived from mobile (375px) and desktop Airbnb-style screenshots before implementation. Each entry documents **purpose**, **props/data**, **layout behavior**, and **page usage**.

### Navbar
- **Purpose:** Global top navigation with branding and account actions.
- **Props/data:** None.
- **Layout:** Sticky full-width white bar with bottom border. Logo (pink-red wordmark + house glyph) left; Explore `<Link>` hidden on mobile, visible from `md`; hosting and user-menu icon buttons right in a pill cluster.
- **Vision notes:** Matches Airbnb header — minimal chrome, no heavy shadow; actions grouped on the right.
- **Page usage:** Home, Catalog, Room Detail.

### SearchBar
- **Purpose:** Controlled search input for filtering listings.
- **Props/data:** `value: string`, `onChange: (value: string) => void`, optional `placeholder`.
- **Layout:** Full-width rounded pill (`rounded-full`) with search glyph and input; subtle border and hover shadow; mobile-first padding scales at `md`.
- **Vision notes:** Mirrors Airbnb centered search pill on mobile home — single field rather than multi-segment desktop bar.
- **Page usage:** Home.

### CategoryFilter
- **Purpose:** Horizontal category tabs with icon + label for discovery filtering.
- **Props/data:** `categories: string[]`, `activeCategory: string`, `onCategoryChange: (category) => void`.
- **Layout:** Horizontally scrollable row (`overflow-x-auto`) below search; each item is a vertical stack (Unicode icon above label); active tab uses darker text and `border-b-2` underline; inactive tabs are muted gray.
- **Vision notes:** Matches Airbnb category scroller — icon-first tabs, not dropdown; scrolls on narrow viewports.
- **Page usage:** Home.

### ListingCard
- **Purpose:** Clickable summary card for a single listing.
- **Props/data:** `listing: Listing` (`id`, `title`, `location`, `category`, `pricePerNight`, `rating`, `image`).
- **Layout:** Square image placeholder with gradient and category badge; title + star rating on one row; location line; price per night. Entire card is a `<Link>` to `/rooms/[id]`.
- **Vision notes:** Follows Airbnb card hierarchy — image dominates, compact metadata below, rating aligned with title.
- **Page usage:** Home and Catalog via `ListingGrid`.

### ListingGrid
- **Purpose:** Responsive grid wrapper for listing cards.
- **Props/data:** `listings: Listing[]`, optional `layout: "default" | "home"`, optional `prioritizeImages: boolean`.
- **Layout:** **Home layout** (`layout="home"`): 1 column on mobile; 2 at `sm`; 3 at `md`; 4 at `lg`; **6 at `xl`** with tighter gaps for compact cards. **Default layout** (Catalog): 1 column on mobile; 2 at `md`; 3 at `lg`; 4 at `xl`. Empty-state message when no results.
- **Vision notes:** Mobile screenshot shows vertical card stack; desktop home screenshot shows dense multi-column rows (6 across at wide viewports).
- **Page usage:** Home (`layout="home"`), Catalog (default layout).

### LoadingState
- **Purpose:** Visible loading feedback while simulated data loads.
- **Props/data:** Optional `message: string`.
- **Layout:** Centered spinner (brand-accent ring) and message with vertical spacing.
- **Vision notes:** Stand-in for Airbnb skeleton/shimmer — simple spinner acceptable for class project.
- **Page usage:** Home, Room Detail.

### CatalogHeader
- **Purpose:** Catalog results summary and price sort control.
- **Props/data:** `resultCount: number`, `sortOrder: "asc" | "desc"`, `onSortChange`.
- **Layout:** Stacked on mobile; result count and sort `<select>` inline from `md`; bottom border separates header from results.
- **Vision notes:** Inspired by Airbnb “X stays” results bar — count left, controls right on desktop.
- **Page usage:** Catalog.

### MapPlaceholder
- **Purpose:** Fallback map stand-in while the interactive map loads (or if map fails).
- **Props/data:** None.
- **Layout:** Gray rounded box with centered **Loading map…** label; matches map wrapper height (`min-h-72` mobile, `min-h-[520px]` desktop).
- **Vision notes:** Base-evaluation placeholder; shown during dynamic import and client mount before `ListingMap` renders.
- **Page usage:** Catalog loading fallback via dynamic import and `ListingMap` mount guard.

### ListingMap
- **Purpose:** Interactive map view with price pins for catalog listings.
- **Props/data:** `listings: Listing[]` (includes `latitude`, `longitude`; all **24 listings** pinned).
- **Layout:** Full-height rounded map with explicit mobile/desktop heights; price markers use inline-styled div icons; popups link to `/rooms/[id]`. Imperative Leaflet init in `useEffect` with ref-based container for reliable production rendering (including Vercel).
- **Vision notes:** Optional challenge — replaces static map placeholder on `/catalog`. Uses CARTO Voyager tiles (OpenStreetMap data). Map helpers live in `/utils/map.ts`.
- **Page usage:** Catalog (client-only, `dynamic` import with `ssr: false`). `MapPlaceholder` shown while the chunk loads.

### BookingDateFields
- **Purpose:** Native check-in / check-out date inputs for the booking card.
- **Props/data:** `checkIn`, `checkOut`, `minCheckOut?`, change handlers.
- **Layout:** Two-column grid inside bordered card; HTML5 `type="date"` inputs.
- **Vision notes:** Optional challenge — functional date picker without a UI library.
- **Page usage:** Room Detail inside `BookingCard`.

### BookingCard
- **Purpose:** Booking sidebar with price, dates, guest count, total, and reserve action.
- **Props/data:** `pricePerNight`, `guestCount`, `maxGuests?`, `checkIn`, `checkOut`, `nights`, `totalPrice`, date/guest handlers, optional `onReserve`.
- **Layout:** Bordered card with shadow; date fields; guest stepper; total breakdown when dates valid; full-width **Reserve** CTA in `#FF385C`.
- **Vision notes:** Optional challenge adds date selection and `$price × nights = total` summary.
- **Page usage:** Room Detail. Helpers: `BookingDateFields`, `BookingGuestControls`, `BookingTotalSummary`.

### PhotoGallery
- **Purpose:** Room photo viewer with navigation controls.
- **Props/data:** `photos: string[]`, `currentIndex: number`, `onPrevious`, `onNext`.
- **Layout:** Full-width aspect-ratio frame (`4/3` mobile, `16/9` desktop) with photo counter overlay; circular prev/next buttons (‹ ›) at sides; dot indicators along bottom when multiple photos.
- **Vision notes:** Matches Airbnb detail gallery — large hero image, overlay controls, pagination dots.
- **Page usage:** Room Detail. Helper: `PhotoGalleryControls`.

### RoomHeader
- **Purpose:** Primary listing metadata below gallery.
- **Props/data:** `title`, `rating`, `reviews`, `location`.
- **Layout:** Large bold title; inline meta row with star icon + rating, review count, and location separated by middle dots.
- **Vision notes:** Follows Airbnb listing title block — title first, secondary stats on one line below.
- **Page usage:** Room Detail.

### HostInfo
- **Purpose:** Host identity block.
- **Props/data:** `host: Host` (`name`, `yearsHosting`, `avatar`).
- **Layout:** Section heading (“Hosted by …”); circular avatar placeholder with initial; name and years-hosting subtitle in a horizontal row.
- **Vision notes:** Simplified Airbnb host section — avatar + text, no messaging button in base scope.
- **Page usage:** Room Detail.

### AmenitiesGrid
- **Purpose:** List amenities offered by the listing.
- **Props/data:** `amenities: string[]`.
- **Layout:** Section heading; 1-column list on mobile, 2-column grid from `md`; each row is check icon + label pair.
- **Vision notes:** Mirrors Airbnb “What this place offers” — icon-left, label-right, grid on wider screens.
- **Page usage:** Room Detail.

### BackToCatalog
- **Purpose:** Internal navigation back to catalog results.
- **Props/data:** None.
- **Layout:** Inline `<Link>` with left chevron and “Back to catalog” label.
- **Vision notes:** Breadcrumb-style return path; replaces browser back for demo navigation flow.
- **Page usage:** Room Detail.

### UserMenu
- **Purpose:** Right-side navbar action cluster (hosting + profile menu).
- **Props/data:** None.
- **Layout:** Two rounded buttons — hosting glyph and hamburger + avatar pill.
- **Vision notes:** Simplified Airbnb globe/host/profile cluster using Unicode glyphs.
- **Page usage:** Rendered inside `Navbar`.

### PhotoGalleryControls
- **Purpose:** Prev/next buttons and dot indicators for `PhotoGallery`.
- **Props/data:** `photos`, `currentIndex`, `isFirstPhoto`, `isLastPhoto`, `onPrevious`, `onNext`.
- **Layout:** Absolutely positioned circular buttons on gallery sides; dot row centered at bottom.
- **Vision notes:** Extracted from `PhotoGallery` to keep component under ~80 lines.
- **Page usage:** Used only by `PhotoGallery`.

## Implementation Rules

- Use Next.js 16.
- Use TypeScript.
- Use Tailwind CSS.
- Use the App Router.
- Use `/app` for routes.
- Use `/components` for reusable UI pieces.
- Use `/types` for TypeScript interfaces.
- Use `/data` for local mock data.
- Do not use shadcn.
- Do not use MUI.
- Do not use Ant Design.
- Do not use Chakra.
- Do not use Bootstrap.
- Do not use any prebuilt UI component library.
- Do not use inline `style={{}}` objects.
- Use Tailwind utility classes for all styling.
- Use functional React components only.
- Define components with `const`.
- Use Next.js `<Link>` for all internal navigation.
- Do not use plain `<a href="">` tags for internal navigation.
- Keep each component focused on one responsibility.
- Keep components inside `/components`.
- Define TypeScript interfaces for listing and room data.
- Use `useState` in at least three distinct cases.
- Use `useEffect` to simulate data loading on at least two pages.
- Build mobile-first at 375px before adjusting for desktop at 768px and above.
- Keep each component file in `/components` under approximately 80 lines of JSX and logic; split into helpers when larger.

## Required State Usage

The project will use `useState` for:
- Search input value
- Active category
- Sort order
- Photo gallery index
- Guest counter

## Required Effect Usage

The project will use `useEffect` for:
- Simulated Home page listing data loading (single 1-second `setTimeout`; empty initial list, then populate state and hide loading together)
- Simulated Room Detail page data loading

## Optional Features (Implemented)

The following stretch goals are implemented after the base requirements:

- **Real interactive map** — `/catalog` uses **Leaflet** with CARTO Voyager tiles (OpenStreetMap data). Each listing is pinned by `latitude` / `longitude` with a popup linking to `/rooms/[id]`. No Google Maps API key required.
- **Functional date picker** — Room detail booking card uses native HTML5 date inputs for check-in and check-out (no date-picker UI library).
- **Total price calculation** — When valid dates are selected, the booking card shows `$price × nights = total` using helpers in `/utils/booking.ts`.

Dependencies added for the map only: `leaflet`, `@types/leaflet`. No shadcn, MUI, Ant Design, Chakra, Bootstrap, or DaisyUI.

## Image Asset Notes

Listing images are local demo assets stored in `/public/images/listings/` (13 unique JPEG files reused across **24 listings**). Host avatars live in `/public/images/hosts/` (8 JPEGs). Pinned Pexels photo IDs are recorded in `/public/images/image-manifest.json` so the same files can be re-downloaded reproducibly. All image files are committed to git so the app works after clone without a Pexels API key. These images are not copied from Airbnb and do not include Airbnb logos, icons, or proprietary brand assets. The image integration does not change the required routes, navigation behavior, local state behavior, simulated loading behavior, or page structure.

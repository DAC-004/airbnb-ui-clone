# Airbnb UI Clone Context

## Project Description

This project is a mobile-first Airbnb-style vacation rental interface built with Next.js 16, React, TypeScript, Tailwind CSS, and the App Router.

The goal is to implement three core Airbnb-style views:
- Home page
- Catalog/search results page
- Room detail page

The interface should be clean, responsive, and component-based. It should use Tailwind CSS utility classes only and should not depend on any prebuilt UI component library.

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
- Responsive listing card grid

The Home page allows the user to search listings in real time and filter listings by category.

### Catalog Page `/catalog`

The Catalog page includes:
- Results header
- Number of results
- Sort control for ascending or descending price
- Reused listing cards
- Map placeholder area

On desktop, the map placeholder appears to the right of the listing results. On mobile, it appears below the cards.

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
- SearchBar
- CategoryFilter
- ListingCard
- ListingGrid
- LoadingState
- CatalogHeader
- MapPlaceholder
- PhotoGallery
- RoomHeader
- HostInfo
- AmenitiesGrid
- BookingCard
- BackToCatalog

## Vision-to-Spec Workflow Notes

The UI is based on the Airbnb visual model:
- Mobile-first layout
- Clean white background
- Rounded listing cards
- Large image placeholders
- Compact listing metadata
- Clear spacing
- Simple navigation
- Responsive grids
- Detail page focused on photos, host details, amenities, and booking information

The Home page supports discovery.
The Catalog page supports comparison.
The Room Detail page supports reviewing one listing before booking.

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

## Required State Usage

The project will use `useState` for:
- Search input value
- Active category
- Sort order
- Photo gallery index
- Guest counter

## Required Effect Usage

The project will use `useEffect` for:
- Simulated Home page listing data loading
- Simulated Room Detail page data loading

## Optional Features Not Required for Base Evaluation

The following are optional and should only be attempted after all base requirements are complete:
- Real interactive map
- Functional date picker
- Total price calculation from selected dates

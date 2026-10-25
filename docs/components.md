# CamTrip — Vue Component Architecture

## 1. Overview

CamTrip is a Cambodia travel planning application that helps users discover destinations, explore accommodations, and plan trips with estimated budgets.

The frontend is built using Vue 3, TypeScript, Vue Router, and Pinia. For Week 4, we use hard-coded data to demonstrate Vue components, props, events, and reactivity.

## 2. Application Component Tree

```text
App.vue
├── Navbar.vue
├── RouterView
│   ├── HomeView.vue
│   │   ├── SearchBar.vue
│   │   └── DestinationCard.vue
│   │
│   ├── DestinationDetailView.vue
│   │   ├── DestinationGallery.vue
│   │   └── DestinationInfo.vue
│   │
│   ├── AccommodationView.vue
│   │   ├── AccommodationFilter.vue
│   │   └── AccommodationCard.vue
│   │
│   └── TripPlannerView.vue
│       ├── DestinationSelector.vue
│       ├── ItineraryPreview.vue
│       └── BudgetSummary.vue
│
└── Footer.vue
```

## 3. Screen 1 — Home / Discover

**Purpose:** Allow users to search and discover tourist destinations in Cambodia.

**Components:**
- `HomeView.vue`: Parent component that manages the search state and filters destinations.
- `SearchBar.vue`: Search input component.
- `DestinationCard.vue`: Displays a destination's image, name, province, and estimated cost.

| Component | Props | Emits | State owner |
|---|---|---|---|
| HomeView | None | None | Owns search and derives filtered destinations |
| SearchBar | modelValue: string | update:modelValue(string) | HomeView |
| DestinationCard | destination: Destination | select(id: number) | HomeView handles navigation |

**Data flow:** HomeView passes the search text to SearchBar and receives changes through `update:modelValue`. It calculates the filtered destinations using `computed` and passes each destination to DestinationCard.

## 4. Screen 2 — Destination Details

**Purpose:** Display detailed information about a selected destination.

**Components:**
- `DestinationDetailView.vue`: Retrieves the selected destination from hard-coded data using the route ID.
- `DestinationGallery.vue`: Displays destination photos.
- `DestinationInfo.vue`: Displays the description, province, highlights, and estimated cost.

| Component | Props | Emits | State owner |
|---|---|---|---|
| DestinationDetailView | None (reads route ID) | None | Owns selected destination lookup |
| DestinationGallery | images: string[] | None | Owns active image index |
| DestinationInfo | destination: Destination | add-to-plan(id: number) | Trip planner store owns selected destinations |

**Data flow:** The view passes destination information to its child components. When the user clicks Add to Trip Plan, DestinationInfo emits the destination ID, which the view forwards to the shared trip planner state.

## 5. Screen 3 — Accommodation Listing

**Purpose:** Allow users to browse accommodations and filter them by location, price, and property type.

**Components:**
- `AccommodationView.vue`: Manages accommodation filters.
- `AccommodationFilter.vue`: Displays filter controls.
- `AccommodationCard.vue`: Displays hotel information and estimated nightly prices.

| Component | Props | Emits | State owner |
|---|---|---|---|
| AccommodationView | None | None | Owns filters and filtered accommodations |
| AccommodationFilter | filters: AccommodationFilters | update:filters(filters) | AccommodationView |
| AccommodationCard | accommodation: Accommodation | select(id: number) | AccommodationView handles selection |

**Data flow:** AccommodationView passes filter values to AccommodationFilter. When filters change, the child emits the updated values. The parent recalculates the visible accommodations.

## 6. Screen 4 — Trip Planner

**Purpose:** Allow users to select destinations, choose travel dates, and view a sample itinerary with estimated costs.

**Components:**
- `TripPlannerView.vue`: Coordinates the trip planning screen.
- `DestinationSelector.vue`: Allows users to select destinations.
- `ItineraryPreview.vue`: Displays a sample day-by-day itinerary.
- `BudgetSummary.vue`: Displays estimated travel costs.

| Component | Props | Emits | State owner |
|---|---|---|---|
| TripPlannerView | None | None | Uses shared trip planner state |
| DestinationSelector | destinations: Destination[], selectedIds: number[] | toggle(id: number) | Trip planner store |
| ItineraryPreview | itinerary: ItineraryDay[] | None | TripPlannerView derives itinerary |
| BudgetSummary | total: number, travelers: number | None | TripPlannerView derives total cost |

**Data flow:** The trip planner store keeps selected destination IDs, travel dates, and traveler count. TripPlannerView calculates the sample itinerary and budget using computed properties, then passes the results to its child components.

## 7. Shared Components

| Component | Props | Emits | State owner |
|---|---|---|---|
| Navbar.vue | None | None | Vue Router owns current route |
| Footer.vue | None | None | No reactive state |
| SearchBar.vue | modelValue: string | update:modelValue(string) | Parent view |

## 8. State Management

**Local state (`ref`):**
- Home search text
- Accommodation filter selections
- Active gallery image

**Derived state (`computed`):**
- Filtered destinations
- Filtered accommodations
- Estimated total trip budget

**Shared state (Pinia):**
- Selected trip destinations
- Travel dates
- Number of travelers

For Week 4, all destination and accommodation records are hard-coded in `src/data/`. No backend API is required.

## 9. Props Down, Events Up

CamTrip follows Vue's one-way data flow pattern.

1. Parent components pass data to children using props.
2. Child components display the received data.
3. Child components emit events when users perform actions.
4. Parent components or shared stores update the state.
5. Vue automatically updates the interface when reactive state changes.

**Example:**

```vue
<DestinationCard
  v-for="destination in visible"
  :key="destination.id"
  :destination="destination"
  @select="openDestination"
/>
```

The destination object is passed down through the `destination` prop. When the user selects a card, the child emits `select` with the destination ID. The parent handles navigation to the details screen.

## 10. Week 4 Implementation Scope

The initial prototype will focus on:

- Home / Discover screen with destination search
- Destination Details screen with hard-coded destination data
- Trip Planner screen with sample itinerary and estimated budget

The Accommodation Listing screen is documented and wireframed, but may be implemented in a later milestone.

All screens will use Vue 3 components, TypeScript interfaces, props, emits, and reactive state.

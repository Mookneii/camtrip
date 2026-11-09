# CamTrip — Travel Discovery & Trip Planner

CamTrip is a travel discovery and manual budget itinerary planning application designed to help travelers explore destinations and organize their trips in Cambodia.

Users can discover places, view destination details, create trips, and manage their travel budgets.

## 1. Project Overview

- **Project Name:** CamTrip
- **Milestone:** M1 — Frontend Implementation
- **Project Type:** Individual Project
- **Target Users:** Travelers who want to explore destinations and plan trips.
- **Main Goal:** Provide a simple platform for discovering destinations and organizing travel plans with estimated budgets.

## 2. Technologies Used

### Frontend
- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- HTML
- CSS

### Development Tools
- Node.js
- npm
- Visual Studio Code
- Git and GitHub

### Mock API
- JSON Server
- JSON database (`db.json`)

## 3. Implemented Features (M1)

### 3.1 Home Page
- Display available travel destinations.
- Browse destination information.
- Navigate to destination detail pages.

### 3.2 Destination Details
- Display detailed information about selected destinations.
- View information about individual places.

### 3.3 Trip Management
- View the traveler's trips.
- Display trip information.
- Navigate to the trip creation form.

### 3.4 Create Trip Form
- Create a new trip.
- Enter a trip title.
- Select start and end dates.
- Set a travel budget.
- Validate required fields.
- Ensure the end date is not before the start date.
- Ensure the budget is greater than zero.
- Display validation error messages.
- Save trips through the mock API.

### 3.5 Navigation
- Vue Router for page navigation.
- Separate views for different application pages.
- Not Found (404) page for unavailable routes.

## 4. Project Structure

```text
camtrip/
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── data/
│   │   ├── router/
│   │   ├── stores/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── types.ts
│   ├── db.json
│   ├── package.json
│   └── vite.config.ts
│
├── docs/
│   ├── wireframes/
│   └── components.md
│
└── README.md
```

## 5. Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Step 1: Clone the repository

```bash
git clone https://github.com/Mookneii/camtrip.git
```

Navigate into the project:

```bash
cd camtrip/frontend
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start the Mock API

Open a terminal and run:

```bash
npm run api
```

The mock API will run at:

```text
http://localhost:3000
```

### Step 4: Start the Frontend

Open another terminal in the frontend directory:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

## 6. API Endpoints

The application currently uses JSON Server as a mock backend.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/places` | Retrieve places |
| GET | `/trips` | Retrieve trips |
| POST | `/trips` | Create a new trip |

The mock database is stored in `frontend/db.json`.

## 7. Validation Rules

The Create Trip form includes the following validation rules:

| Field | Validation |
|---|---|
| Trip title | Required |
| Start date | Required |
| End date | Required |
| End date | Must be after or equal to start date |
| Budget | Must be greater than zero |

Validation messages are displayed under the corresponding fields.

## 8. Testing

Run the TypeScript type check:

```bash
npm run type-check
```

Run the development server:

```bash
npm run dev
```

Run the mock API:

```bash
npm run api
```

Manually test the following:

- Home page loads successfully.
- Destination details can be accessed.
- My Trips page displays trips.
- Create Trip form displays validation errors.
- Invalid dates are rejected.
- Zero or negative budgets are rejected.
- Valid trip information is saved successfully.
- The application navigates back to My Trips after successful creation.

## 9. Current Limitations

- JSON Server is used instead of a production backend.
- User authentication is not implemented yet.
- The current trip creation implementation uses a demo `userId` of `1`.
- Data is stored in a local JSON database.
- Real user ownership and authorization will be implemented in a later milestone.

## 10. Future Improvements

- Implement backend services using NestJS.
- Integrate PostgreSQL and Prisma.
- Implement user registration and login.
- Add real user ownership and authorization.
- Improve trip itinerary management.
- Add places to trips and manage estimated expenses.
- Improve application responsiveness and user experience.

---

**Project:** CamTrip  
**Milestone:** M1 — Frontend Implementation  
**Status:** In Progress

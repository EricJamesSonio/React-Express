--- CLIENT ---

Plans:

* Clean and consistent folder structure
* Component-based architecture
* Reusable UI and logic components
* Separation of presentation and logic
* SOLID and DRY principles
* Maintainable and scalable React setup

---

## [Folder Structure]

* Folders should be lowercase and plural
* Files inside are singular and use PascalCase

CLIENT:

* [components]
  --- ExampleComponent.jsx

* [pages]
  --- ExamplePage.jsx

* [layouts]
  --- ExampleLayout.jsx

* [containers]
  --- ExampleContainer.jsx

* [routes]
  --- AppRoutes.jsx

* [context]
  --- ExampleContext.jsx

* [services]
  --- ExampleService.js

* [utils]

  * [config]
    --- ExampleConfig.ts
  * [hooks]
    --- ExampleHook.ts
  * [helpers]
    --- ExampleHelper.ts

* app.jsx

* main.jsx

---

## [Folder Explanations]

CLIENT:

* [components]
  --- Contains reusable and presentational UI elements.
  --- Should be stateless and focused on displaying data through props.
  --- Examples: Buttons, Cards, Modals, Inputs, Tables, Icons.

* [pages]
  --- Represents full pages or views in the application.
  --- Combines multiple components and containers to build full page layouts.
  --- Used for routing and navigation (e.g., HomePage, ProductPage).

* [layouts]
  --- Defines the structural design shared across pages.
  --- Contains consistent UI patterns such as headers, sidebars, and footers.
  --- Used to wrap pages to provide global layouts.

* [containers]
  --- Manages logic and data-fetching for specific views or components.
  --- Responsible for connecting to services or contexts and passing data to components.
  --- Acts as the bridge between business logic and presentation components.

* [routes]
  --- Contains routing configurations for the client-side application.
  --- Maps paths to pages using React Router or similar routing library.
  --- Can handle protected routes and layout-based routing setups.

* [context]
  --- Manages global state accessible throughout the app.
  --- Uses React’s Context API for state sharing without prop drilling.
  --- Common examples: AuthenticationContext, ThemeContext, CartContext.

* [services]
  --- Contains business logic and API integration functions.
  --- Handles HTTP requests, data transformation, and communication with the backend.
  --- Written in JavaScript (not JSX) since it handles logic, not UI rendering.
  --- Keeps fetch logic and endpoints separated from React components.

* [utils]

  * [config]
    --- Contains configuration files and constants used across the application (e.g., API URLs, environment settings).
  * [hooks]
    --- Contains custom React hooks for reusable logic (e.g., useFetch, useAuth, useForm).
  * [helpers]
    --- Contains small utility functions for formatting, calculations, and other helper logic (e.g., formatPrice, validateEmail).

* app.jsx
  --- The root React component that defines the application structure.
  --- Initializes routes and layouts.
  --- Wraps the app with global providers such as Context, Theme, or Router.

* main.jsx
  --- The main entry point of the React app.
  --- Renders the root `<App />` component into the DOM.
  --- Initializes rendering and global configurations (React.StrictMode, BrowserRouter, etc.).

---

## [Design Principles]

* Single Responsibility: Each component or file has one clear purpose.
* Reusability: Shared logic and UI elements are built once and reused throughout the app.
* Separation of Concerns:

  * Components handle display.
  * Containers handle data and logic.
  * Services handle API and backend communication.
* Consistent naming conventions across all folders and files.
* Avoid deeply nested folders to maintain simplicity.

---

## [Application Flow]

User Interaction
↓
Component → triggers container logic or hook
↓
Container → calls service or context
↓
Service → communicates with backend API
↓
Data returned → passed to component as props
↓
Component → renders updated UI

---

## [General Notes]

* Keep components focused on presentation and avoid direct API calls.
* Use containers or hooks for logic and state management.
* Keep routing centralized for maintainability.
* Place all API and business logic in the services folder for separation of concerns.
* Store configuration and constants in the utils/config folder.
* Write clean and reusable hooks for shared logic patterns.
* Maintain consistent TypeScript types and interfaces across the app.
* Use context for global state instead of prop drilling.
* Follow a consistent import order and naming convention.
* Keep files short, clear, and well-documented.

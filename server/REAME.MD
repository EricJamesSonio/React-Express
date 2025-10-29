--- SERVER ---

Plans:

* Clean folder
* Design Patterns
* Algorithms Applied in Services
* Object Based Codes (OOP)
* SOLID Principles
* Reusable Codes

---

## [Folder Structure]

* Folders should be lowercase and plural
* Files inside are singular and use PascalCase

BACKEND:

* [models]
  --- ExampleModel.js

* [controllers]
  --- ExampleController.js

* [routes]
  --- ExampleRoute.js

* [services]
  --- ExampleService.js

* server.js

DATABASE:

* [configs]
  --- Db.js

* [models]
  --- ExampleModel.js

* [seeds]
  --- ExampleSeed.js

* initdb.js

---

## [Folder Explanations]

BACKEND:

* [models]
  --- Models are the ones that interface with the database.
  --- Defines the structure of the data.
  --- Executes CRUD operations.
  --- Should not contain any business logic.

* [controllers]
  --- Handles incoming requests from the client.
  --- Extracts and validates request data.
  --- Calls services to execute operations.
  --- Sends back the appropriate HTTP status and JSON response.
  --- Converts internal errors into proper responses to avoid crashing the client.

* [services]
  --- Contains business logic and computations.
  --- Uses algorithms and follows object-based (class) structure.
  --- Applies SOLID principles for better scalability.
  --- Handles logic processing but not HTTP or database operations directly.

* [routes]
  --- Defines and manages all API routes.
  --- Connects endpoints to their respective controllers.
  --- Organizes route paths and versions (e.g., /api/v1).

* server.js
  --- Initializes the Express server.
  --- Connects to the database.
  --- Registers and injects all routes to make them accessible to the client.
  --- Sets up middleware and handles global errors.

---

DATABASE:

* [configs]
  --- Handles database configuration and connection setup.
  --- Manages environment variables for database credentials.

* [models]
  --- Contains database schemas and structures.
  --- Used to represent database collections or tables.

* [seeds]
  --- Contains seed data used to prepopulate the database.
  --- Helps set up default or sample data for development.

* initdb.js
  --- Main entry file for initializing and seeding the database.
  --- Executes connection and runs all seed scripts.
  --- Can be used to reset or reinitialize the database.

---

## [Design Principles]

* Single Responsibility Principle: Each file has one specific purpose.
* Open/Closed Principle: Code should be open for extension but closed for modification.
* Liskov Substitution Principle: Subclasses should be replaceable without breaking existing logic.
* Interface Segregation Principle: Classes should depend only on what they actually use.
* Dependency Inversion Principle: High-level modules should not depend on low-level implementations.

---

## [System Flow]

Client Request
↓
Route → maps request to the correct controller
↓
Controller → validates request and calls service
↓
Service → processes logic and interacts with models
↓
Model → executes database operations
↓
Response → returned to the client

---

## [General Notes]

* Keep controllers thin and services smart.
* Do not mix HTTP logic with database logic.
* Keep business logic isolated within services.
* Use environment variables for sensitive data.
* Maintain consistent error handling across all layers.
* Apply reusable patterns and modular structures for scalability.
* Follow the folder naming and file naming conventions strictly.

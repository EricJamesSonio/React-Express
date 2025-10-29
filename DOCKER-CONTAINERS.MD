# --- DOCKER CONTAINERS ---

## [Containers Overview]

### 1. **guitar-server**

* Runs **Node.js (Express)** backend
* Handles API requests and routes
* Connects to the MySQL container
* Uses `.env.docker` for environment config
* Exposes port **5000**

---

### 2. **guitar-client**

* Runs **React (Vite)** frontend served by **Nginx**
* Communicates with backend API
* Serves static production build
* Exposes port **3001**

---

### 3. **guitar-db**

* Runs **MySQL 8.1** database
* Stores all backend and app data
* Automatically creates database from `${DB_NAME}`
* Persists data using **db_data** volume
* Exposes port **3307**

---

### 4. **guitar-initdb (manual)**

* Initializes and seeds the database
* Executes `npm run init-db` inside `/server`
* Used for manual seeding or test data setup
* Runs **only when manually triggered** via:

  ```bash
  docker-compose run --rm initdb
  ```

---

## [Container Network]

* Shared internal **Docker bridge network**: `app-network`
* Containers communicate using service names
* External access points:

  * Frontend → **[http://localhost:3001](http://localhost:3001)**
  * Backend → **[http://localhost:5000](http://localhost:5000)**
  * Database → **127.0.0.1:3307**

---

## [Result Summary]

| Container     | Purpose                | Port | Access                                             |
| ------------- | ---------------------- | ---- | -------------------------------------------------- |
| guitar-server | Express Backend        | 5000 | [http://localhost:5000](http://localhost:5000)     |
| guitar-client | React Frontend (Nginx) | 3001 | [http://localhost:3001](http://localhost:3001)     |
| guitar-db     | MySQL Database         | 3307 | Internal / Localhost                               |
| guitar-initdb | Manual DB Seeder       | N/A  | Run manually with `docker-compose run --rm initdb` |

---

## [Final Outcome]

* **4 connected containers** under one Docker network
* **Automatic startup** for `db`, `server`, and `client`
* **Manual control** for `initdb` (no auto-run)
* **Persistent MySQL data** with `db_data` volume
* **Full-stack setup** easily launched using:

  ```bash
  docker-compose up -d --build
  ```

# --- DOCKER CONTAINERS ---

## [Containers Overview]

### 1. **app_server**

* Runs Node.js (Express) backend
* Handles API requests and routes
* Connects to MySQL container
* Exposes port **5000**

### 2. **app_client**

* Runs React (Vite) frontend via Nginx
* Communicates with backend API
* Serves static build
* Exposes port **3000**

### 3. **app_db**

* Runs MySQL database
* Stores all application data
* Uses `.env.docker` for credentials
* Persists data via `mysql_data` volume
* Exposes port **3307**

### 4. **initdb (optional)**

* Initializes and seeds database
* Runs `initdb.js` for setup
* Used for initial or test data population

---

## [Container Network]

* Shared internal Docker network
* Communication via container names
* External access points:

  * Frontend → **[http://localhost:3000](http://localhost:3000)**
  * Backend → **[http://localhost:5000](http://localhost:5000)**
  * Database → **127.0.0.1:3307**

---

## [Result Summary]

| Container  | Purpose         | Port | Access                                         |
| ---------- | --------------- | ---- | ---------------------------------------------- |
| app_server | Express Backend | 5000 | [http://localhost:5000](http://localhost:5000) |
| app_client | React Frontend  | 3000 | [http://localhost:3000](http://localhost:3000) |
| app_db     | MySQL Database  | 3307 | Internal / Localhost                           |
| initdb     | Seed Setup      | N/A  | Auto-run (optional)                            |

---

## [Final Outcome]

* Isolated and connected containers
* Full-stack system in one environment
* Persistent data and consistent configs
* Run all with `docker-compose up --build`

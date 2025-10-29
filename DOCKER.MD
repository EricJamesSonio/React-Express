
---

# --- DOCKER SETUP ---

Docker provides isolated environments for **backend (Express)**, **frontend (React)**, and **MySQL**.
It supports both **local (XAMPP)** and **containerized** setups for flexible development and deployment.

---

## [Goals]

* Support both local and Docker environments
* Keep `.env` (local) and `.env.docker` (container) separate
* Prevent redundant configurations
* Enable full-stack orchestration (client, server, db)
* Maintain consistency and portability

---

## [Environment Setup]

### Local Environment

* Uses **XAMPP MySQL**
* Configured via `.env`
* For local development and testing

### Docker Environment

* Uses **MySQL container**
* Configured via `.env.docker`
* For deployment, staging, and production builds

---

# -----------------------------------------

## SERVER DOCKERFILE

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env.docker .env
EXPOSE 5000
CMD ["npm", "start"]
```

### [.dockerignore]

```
node_modules
npm-debug.log
.env
.DS_Store
```

---

# -----------------------------------------

## CLIENT DOCKERFILE

```dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### [.dockerignore]

```
node_modules
build
dist
.env
.DS_Store
```

---

# -----------------------------------------

## DOCKER-COMPOSE SETUP

```yaml
version: "3.9"

services:
  db:
    image: mysql:8.0
    container_name: app_db
    restart: always
    ports:
      - "3307:3306"
    env_file:
      - ./server/.env.docker
    volumes:
      - mysql_data:/var/lib/mysql

  server:
    build: ./server
    container_name: app_server
    ports:
      - "5000:5000"
    env_file:
      - ./server/.env.docker
    depends_on:
      - db
    volumes:
      - ./server:/app

  client:
    build: ./client
    container_name: app_client
    ports:
      - "3000:80"
    depends_on:
      - server

volumes:
  mysql_data:
```

---

# -----------------------------------------

## ENVIRONMENT FILES

### [.env] (Local)

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=starbucks_clone
NODE_ENV=development
PORT=5000
```

### [.env.docker] (Docker)

```
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASS=secret
DB_NAME=starbucks_clone
NODE_ENV=production
PORT=5000
```

---

# -----------------------------------------

## [Workflow]

### Local

1. Start XAMPP MySQL
2. Use `.env`
3. Run backend and frontend locally

### Docker

1. Stop local MySQL (avoid port conflict)
2. Run:

   ```
   docker-compose up --build
   ```
3. Starts: **server**, **client**, **db**

### Stop

```
docker-compose down
```

---

# -----------------------------------------

## [Best Practices]

* Use `.env` (local) and `.env.docker` (containers)
* Never commit sensitive env files
* Use `docker-compose` for orchestration
* Persist MySQL data with volumes
* Keep container ports unique
* Test connections when switching environments

---

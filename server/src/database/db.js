import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get absolute path to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decide which .env to load
// Priority: DOCKER_ENV_FILE > process.env.NODE_ENV=docker > local .env
let envPath = path.resolve(__dirname, '../../.env'); // default local
if (process.env.DOCKER_ENV_FILE) {
  envPath = path.resolve(__dirname, `../../${process.env.DOCKER_ENV_FILE}`);
} else if (process.env.NODE_ENV === 'docker') {
  envPath = path.resolve(__dirname, '../../.env.docker');
}

dotenv.config({ path: envPath });

export const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'guitar_store',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log(
  `✅ Connected to database: ${process.env.DB_NAME} (${process.env.DB_HOST}) using env: ${envPath}`
);
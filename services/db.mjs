import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;

console.log(process.env);

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export default pool;

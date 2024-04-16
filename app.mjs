import express from "express";
import pool from "./services/db.mjs";
//import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get the list of books
app.get("/hac/incidents", (_, res) => {
  pool
    .query("SELECT * FROM incidents")
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({ error: error });
    });
  //const incidentsData = { id: "2" };
  //return res.json(incidentsData);
});

app.use((err, _req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500);
  res.json({ error: err.message });
});

app.use("*", (_, res) => {
  return res
    .status(404)
    .json({ error: "the requested resource does not exist on this server" });
});

export default app;

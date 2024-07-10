import pgSession from "connect-pg-simple";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import pool from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const pgSessionStore = pgSession(session);
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(
  session({
    store: new pgSessionStore({
      pool: pool,
      tableName: "session",
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use("/api", authRoutes);

pool.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Database connected");
  }
});

pool.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
});

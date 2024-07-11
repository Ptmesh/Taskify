import pgSession from "connect-pg-simple";
import cors from "cors";
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
app.use(cors());

app.use(
  session({
    store: new pgSessionStore({
      pool: pool,
      tableName: "session",
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use("/api", authRoutes);

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

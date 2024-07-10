import bcrypt from "bcrypt";
import pool from "../db/db.js";

export const createUser = async (user) => {
  const { firstname, lastname, email, phone, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users(first_name, last_name, email, phone_number, password) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [firstname, lastname, email, phone, hashedPassword]
  );
  return result.rows[0];
};

export const findUserEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

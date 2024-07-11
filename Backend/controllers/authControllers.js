import bcrypt from "bcrypt";
import { createUser, findUserEmail } from "../models/userModels.js";

export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;
    const user = await createUser({
      firstname,
      lastname,
      email,
      phone,
      password,
    });
    req.session.userID = user.id;
    res.status(200).json({ message: "Registration Success", user });
    console.log(user, "Registered successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error, "Couldn't register the user");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userID = user.id;
      res.status(200).json(user);
      console.log(user, "Logged in successfully");
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error, "Couldn't login the user");
  }
};

export const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to destroy session" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully" });
  });
};

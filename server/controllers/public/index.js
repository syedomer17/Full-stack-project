import express from "express";
import userModel from "../../models/User/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    let { fullName, email, phone, age, password } = req.body;

    // Validate input
    if (!fullName || !email || !phone || !age || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email or phone already exists
    let emailCheck = await userModel.findOne({ email });
    if (emailCheck) {
      return res.status(400).json({ message: "Email already in use" });
    }
    let phoneCheck = await userModel.findOne({ phone });
    if (phoneCheck) {
      return res.status(400).json({ message: "Phone number already in use" });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with hashed password
    await userModel.create({
      fullName,
      email,
      phone,
      age,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "all fields required⚠" });
    }
    // check if email exist
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "user doesn't exist" });
    }
    // check if password is correct
    if (user.password !== password) {
      return res.status(400).json({ msg: "wrong password❌" });
    }

    //  generate token

    let token = jwt.sign(
      {
        userId: user.id,
        // email: user.email,
        // fullname: user.fullname,
      },
      "secret",
      { expiresIn: "2h" }
    );
    res.status(200).json({ msg: "user logged in successfully", token });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: error });
  }
});

export default router;

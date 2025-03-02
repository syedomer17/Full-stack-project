import express from "express";
import userModel from "../../models/User/User.js";

const router = express.Router();

// Get all users
router.get("/getall", async (req, res) => {
  try {
    let getAllUsers = await userModel.find({});
    res.status(200).json(getAllUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Get user by ID
router.get("/getbyid/:id", async (req, res) => {
  try {
    let userInput = req.params.id;
    let getUserById = await userModel.findById(userInput);

    if (!getUserById) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(getUserById);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Update user by ID
router.put("/updatebyid/:id", async (req, res) => {
  try {
    let userInput = req.params.id;
    let userData = req.body;

    let getUserById = await userModel.findById(userInput);
    if (!getUserById) {
      return res.status(404).json({ message: "User not found" });
    }

    let updatedUser = await userModel.findByIdAndUpdate(userInput, userData);
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Delete user by ID
router.delete("/deletebyid/:id", async (req, res) => {
  try {
    let userInput = req.params.id;
    let deletedUser = await userModel.findByIdAndDelete(userInput);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Delete all users
router.delete("/deleteall", async (req, res) => {
  try {
    await userModel.deleteMany({});
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;

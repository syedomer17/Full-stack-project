import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import cors from "cors";

import userRouter from "./controllers/Users/index.js";
import publicRouter from "./controllers/public/index.js";

const app = express(); // Move this above all uses of `app`

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const PORT = config.get("PORT")|| 5001 // Safer handling

app.use(express.json()); // Middleware for JSON request body parsing

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: `Server is running ⚡` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Routes
app.use("/api/public", publicRouter);
app.use("/api/users", userRouter);

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).json({ msg: "Invalid Route ❌" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 YOUR SERVER IS RUNNING AT http://localhost:${PORT}`);
});

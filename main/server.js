import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./configs/db.js";
import "./configs/instrument.js";
import * as Sentry from "@sentry/node";
import companyRoutes from "./routes/companyRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express
const app = express();

// Database and Cloudinary connection logic
const connectAll = async () => {
  try {
    await connectDB();
    await connectCloudinary();
  } catch (err) {
    console.error("Connection failed:", err.message);
  }
};

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  await connectAll();
  next();
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/user", userRoutes);

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// Catch-all route to serve the build's index.html for any frontend routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Port
const port = process.env.PORT || 3000;

Sentry.setupExpressErrorHandler(app);

// In production (Docker), we listen on the port directly. 
// Vercel handles the listener elsewhere (exports app), but for Docker/EC2/AppRunner, we need it.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

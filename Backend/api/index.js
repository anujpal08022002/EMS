import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import connectDB from "../config/db.js";
import dns from "dns";
import authRouter from "../routes/authRoutes.js";
import employeesRouter from "../routes/employeeRoutes.js";
import profileRouter from "../routes/profileRoutes.js";
import attendanceRouter from "../routes/attendanceRoutes.js";
import leaveRouter from "../routes/leaveRoutes.js";
import payslipRouter from "../routes/payslipsRoutes.js";
import dashboardRouter from "../routes/dashboardRoutes.js";
import { serve } from "inngest/express";
import { inngest, functions } from "../inngest/index.js";

if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8"]);
}

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(multer().none());

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.get("/", (req, res) => res.send("EMS server is running"));
app.use("/api/auth", authRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/profile", profileRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/payslips", payslipRouter);
app.use("/api/dashboard", dashboardRouter);

app.use("/api/inngest", serve({ client: inngest, functions }));

export default app;

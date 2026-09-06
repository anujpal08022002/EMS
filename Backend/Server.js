import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import connectDB from "./config/db.js";
import dns from "dns"; // this is used to resolve the hostname to an IP address
import authRouter from "./routes/authRoutes.js";
import employeesRouter from "./routes/employeeRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import leaveRouter from "./routes/leaveRoutes.js";
import payslipRouter from "./routes/payslipsRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

// Set the DNS server to Google's public DNS server, Because
// some ISPs may block certain DNS servers, which can cause issues with resolving hostnames. By using a reliable DNS server like Google's, we can ensure that the hostname is resolved correctly.
if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8"]);
}

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(multer().none());

// Routes
app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/auth", authRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/profile", profileRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/payslips", payslipRouter);
app.use("/api/dashboard", dashboardRouter);

// inngest
app.use("/api/inngest", serve({ client: inngest, functions }));

await connectDB();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

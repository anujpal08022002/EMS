# EMS — Employee Management System

A full-stack Employee Management System built with the MERN stack, with **separate portals for Admins and Employees** to manage attendance, leave applications, payslips, and profiles.

🔗 **Live Demo:** [https://ems-frontend-seven-jet.vercel.app](https://ems-frontend-seven-jet.vercel.app)
🎥 **Project Walkthrough (Recording):** [Google Drive Link](https://drive.google.com/file/d/1XzpdVzC_wIfutwyg-k8jvIlKDwktBbYn/view?usp=sharing)

---

## 📌 About the Project

EMS is designed to simplify day-to-day HR operations for organizations. Admins get a centralized view to manage employees, review leave requests, and monitor attendance across the organization, while employees get a self-service portal to check in/out, apply for leave, track their leave history, and view their payslips.

The system enforces **role-based access** — admins and employees see and can do different things based on their role, both on the frontend and backend.

---

## 🚀 Use Case

- Organizations looking to digitize attendance and leave tracking instead of manual spreadsheets/registers
- Centralizing employee records, payslip history, and leave approvals in one place
- Automating repetitive HR reminders (attendance follow-ups, pending leave approvals) without manual tracking

---

## 🛠️ Tech Stack

**Frontend:** React (Vite), Tailwind CSS, Axios, React Router
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose)
**Authentication:** JWT-based, role-based access control
**Email Service:** Nodemailer + Brevo (SMTP) — for transactional and reminder emails
**Background Jobs:** Inngest
**Deployment:** Vercel (serverless backend + frontend)

---

## ⚙️ How Inngest is Used

The project uses **Inngest** to handle background/delayed tasks that shouldn't block regular API responses:

- **Auto Check-out Reminder** — if an employee forgets to check out, a background job waits and sends a reminder email automatically
- **Leave Approval Reminder** — if a leave application stays pending for 24 hours, Inngest triggers a reminder email to the admin
- **Daily Attendance Cron** — a scheduled job runs every day at a fixed time to check which employees haven't marked attendance and notifies them by email

This keeps the core API fast and responsive, while these longer-running/delayed workflows run reliably in the background.

---

## 👤 Author

**Anuj Pal**
[LinkedIn](https://www.linkedin.com/in/anujpal08022002/) · [GitHub](https://github.com/anujpal08022002)

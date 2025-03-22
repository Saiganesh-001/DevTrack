# 🌟 Advanced MERN B2B Teams Project Management SaaS - *DevTrack*  

## 📌 Project Overview  

Welcome to **DevTack**, a powerful and scalable multi-tenancy project management system built with **Node.js**, **MongoDB**, and **React**. Designed for real-world B2B needs, this project delivers features like Google Sign-In, workspace management, project tracking, task collaboration, role-based permissions, and more. Perfect for developers aiming to create SaaS-based team collaboration platforms.  

---

## Demo

### 📸 Project Screenshot
<img width="1280" alt="Screenshot 2025-03-23 001849" src="https://github.com/user-attachments/assets/a2867d2d-6de9-4b48-9923-302b1401db33" />
<img width="1280" alt="Screenshot 2025-03-23 001935" src="https://github.com/user-attachments/assets/84d35a56-210e-453a-8c0a-9ddbfe6dfb54" />
<img width="1280" alt="Screenshot 2025-03-23 002036" src="https://github.com/user-attachments/assets/fb4b8d9b-c51d-4893-b829-91f6d3b3fed3" />
<img width="1280" alt="Screenshot 2025-03-23 002122" src="https://github.com/user-attachments/assets/f48f241b-e94e-4ce4-8baf-ece7e661d79b" />


---

## 🌟 Key Features  

- 🔐 **Authentication** (Google Sign-In, Email, Password)  
- 🏢 **Create & Manage Multiple Workspaces**  
- 📊 **Projects & Epics Management**  
- ✅ **Tasks** (CRUD, Status, Priority, Assignee)  
- 👥 **Roles & Permissions** (Owner, Admin, Member)  
- ✉️ **Invite Members to Workspaces**  
- 🔍 **Filters & Search** (Status, Priority, AssignedTo)  
- 📈 **Analytics Dashboard**  
- 📅 **Pagination & Load More**  
- 🔒 **Cookie Session Management**  
- 🚪 **Logout & Session Termination**  
- 🌱 **Seeding** for Test Data  
- 💾 **Mongoose Transactions** for Robust Data Integrity  
- 🌐 **Built with MERN Stack** (Node.js, MongoDB, React, TypeScript)  

---

## 🚀 Tools & Technologies  

This project leverages the latest tools and frameworks for modern development:  

- **Node.js**: Scalable backend architecture  
- **React.js**: Dynamic frontend framework  
- **MongoDB & Mongoose**: Flexible and scalable database solutions  
- **Google OAuth**: Seamless Google Sign-In integration  
- **TypeScript**: For a type-safe codebase  
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design  
- **Vite.js**: Lightning-fast frontend development  


---

### Set Up Environment Variables  

Create a `.env` file in the root of your project and configure these variables:  

```plaintext  
PORT=8000
NODE_ENV=development
MONGO_URI="mongodb+srv://<username>:<password>@<>.mongodb.net/devtrack_db"  

SESSION_SECRET="session_secret_key"

GOOGLE_CLIENT_ID=<your-google-client-id>  
GOOGLE_CLIENT_SECRET=<your-google-client-secret>  
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```  

### Run the Application

Install dependencies and start the development server:  

```bash  
npm install  
npm run dev  
```  

Access the backend at `http://localhost:8000`.  

---

## 🌐 Deploying DevTrack  

### 1. Add Environment Variables  
Add the `.env` variables to your hosting platform (e.g., Vercel).  

### 2. Deploy  
Deploy your app using your preferred method to make it live.  

---

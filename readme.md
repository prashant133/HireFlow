# 🚀 HireFlow – Production-Style Job Portal Backend

HireFlow is a modular, role-based job portal backend built using **Node.js, Express.js, and MongoDB**.  
The system enables recruiters and candidates to interact securely while providing recruiter-focused analytics powered by MongoDB aggregation.

This project demonstrates backend engineering principles such as:

- Layered architecture
- Role-based access control
- Data integrity enforcement
- Scalable analytics
- Ownership validation

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt (Password Hashing)
- express-validator
- MongoDB Aggregation Framework

---

## 🏗 Project Architecture

```
src/
 ├── modules/
 │    ├── auth/
 │    ├── jobs/
 │    ├── applications/
 │    ├── analytics/
 │
 ├── middlewares/
 ├── utils/
 └── index.js
```

### Request Flow

```
Route → Controller → Service → Model
```

This structure ensures:

- Clean separation of concerns  
- Maintainable codebase  
- Scalable backend design  
- Business logic isolation  

---

## 🔐 Authentication & Authorization

- JWT-based authentication  
- Role-based access control (`RECRUITER` / `CANDIDATE`)  
- Ownership validation to prevent horizontal privilege escalation  
- Secure password hashing using bcrypt  

---

## 👥 User Roles

### 👔 Recruiter
- Create, update, delete jobs  
- View applicants for their jobs  
- Update application status  
- Access analytics dashboard  

### 👨‍💻 Candidate
- Apply to jobs  
- View their submitted applications  

---

## 💼 Core Features

### 🧾 Job Management
- Create / Update / Delete jobs  
- Recruiter ownership enforcement  
- Secure access control  

### 📩 Application Management
- Apply to jobs  
- Prevent duplicate applications using compound unique index  
- Recruiter can update application status  
- Applicants viewable per job  

### 📊 Recruiter Analytics
- Applicants per job (including jobs with zero applicants)  
- Application status breakdown  
- Aggregation pipelines using:
  - `$lookup`
  - `$match`
  - `$group`
  - `$project`
  - `$addFields`
  - `$sort`

---

## 🧠 Database Design Highlights

### Compound Unique Index

Prevents duplicate job applications:

```js
applicationSchema.index({ jobId: 1, candiateId: 1 }, { unique: true });
```

This ensures a candidate cannot apply to the same job more than once.

---

# 📡 API Endpoints Overview

## 🔐 Authentication

- `POST /auth/register` — Register a new user  
- `POST /auth/login` — Authenticate user and return JWT token  

---

## 💼 Jobs

- `POST /jobs/create-job` — Create job (Recruiter only)  
- `PUT /jobs/:jobId` — Update job (Owner only)  
- `DELETE /jobs/:jobId` — Delete job (Owner only)  

---

## 📩 Applications

- `POST /application/:jobId/apply` — Apply to job (Candidate only)  
- `PATCH /application/:applicationId/status` — Update application status (Recruiter only)  
- `GET /application/my` — View logged-in candidate applications  
- `GET /application/:jobId` — View applicants for a job (Recruiter only)  

---

## 📊 Analytics

- `GET /analytics/applicants-per-job` — Applicants per job  
- `GET /analytics/status-breakdown` — Status distribution  

---

## ⚠️ Error Handling

- Global error middleware  
- Custom `ApiError` class  
- Standardized `ApiResponse` format  
- Centralized validation middleware  

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/hireflow.git
cd hireflow
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 4️⃣ Start the Server

```bash
npm start
```


# 👤 Author

Prashant Deshar
Backend Developer
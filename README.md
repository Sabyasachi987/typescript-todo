# 📌 TypeScript Todo - Express + TypeScript + Prisma + PostgreSQL  

This is a **backend API** built using **Express.js, TypeScript, Prisma, and PostgreSQL**.  
It provides **authentication with JWT** and **CRUD operations for todos**.  

---

## 🚀 Technologies Used  

### **Backend**  
- 🟢 **Node.js** – JavaScript runtime environment  
- ⚡ **Express.js** – Fast and minimalistic web framework  
- 🟦 **TypeScript** – Statically typed JavaScript  
- 🔵 **Prisma** – ORM for PostgreSQL  
- 📜 **Zod** – Schema validation  
- 🔐 **JWT (jsonwebtoken)** – Authentication  
- 🔑 **Bcrypt.js** – Password hashing  
- ⚙ **Dotenv** – Environment variable management  

### **Database**  
- 🗄 **PostgreSQL** – Relational database  
- 🛠 **Prisma Migrations** – Database schema management  

---


📂 Folder Structure
│── /src
│   ├── /config
│   │   ├── prisma.ts       # Prisma client instance
│   │   ├── env.ts          # Environment variable configuration
│   ├── /middlewares
│   │   ├── authMiddleware.ts # JWT authentication middleware
│   ├── /models
│   │   ├── user.ts         # Zod validation schemas for user
│   │   ├── todo.ts         # Zod validation schemas for todo
│   ├── /routes
│   │   ├── userRoutes.ts   # Routes for user (signup, login)
│   │   ├── todoRoutes.ts   # Routes for todos (CRUD)
│   ├── /controllers
│   │   ├── userController.ts # Signup, login logic
│   │   ├── todoController.ts # CRUD logic for todos
│   ├── app.ts              # Express app setup
│   ├── server.ts           # Start the server
│── /prisma
│   ├── schema.prisma       # Prisma schema
│   ├── migrations/         # Database migrations
│── /dist                   # Compiled TypeScript output (ignored in Git)
│── package.json
│── tsconfig.json
│── .env                    # Environment variables
│── .gitignore
│── README.md


## 🔧 **Setup & Installation**  

1️⃣ **Clone the repository:**  
```bash
git clone https://github.com/yourusername/typescript-todo.git
cd typescript-todo



2️⃣ Install Dependencies
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the root folder and add:
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key

4️⃣ Run Prisma Migrations
npx prisma migrate dev

5️⃣ Start the Server
npm run dev
The server will run on http://localhost:3000 by default.


## API Endpoints
| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| POST   | `/signup`      | Register a new user |
| POST   | `/signin`      | Authenticate user   |
| POST   | `/createTodo`  | Create a new todo   |
| GET    | `/getTodo`     | Get all todos       |
| PUT    | `/:id`         | Update a todo       |




🔒 Todo routes require authentication. You must send a JWT token in the headers:

Authorization:YOUR_TOKEN_HERE (BEARER IS NOT USED IN TOKEN GENERATION SO ONLY TOKEN)


## **🛠 TypeScript & Prisma Commands**  

| Command                        | Description                                      |
|--------------------------------|--------------------------------------------------|
| `npx tsc --watch`              | Compile TypeScript files and watch for changes  |
| `npx tsc`                      | Compile TypeScript manually                     |
| `npm run dev`                  | Start the server in development mode            |
| `npm run build`                | Build the project (compile TS to JS)            |
| `npm run start`                | Start the compiled JS version                   |
| `npx prisma init`              | Initialize Prisma in the project                |
| `npx prisma migrate dev`       | Apply migrations to the database                |
| `npx prisma migrate reset`     | Reset the database (dangerous, use with caution) |
| `npx prisma generate`          | Generate Prisma client after schema changes     |
| `npx prisma studio`            | Open Prisma Studio (GUI for database)           |
| `npx prisma db push`           | Sync schema without migrations                  |

## **📜 License**  
MIT  


import  dotnev from "dotenv" 
dotnev.config()

export const env={
    PORT:process.env.PORT || 3000,
    JWT_SECRET:process.env.JWT_SECRET || "SECRET",
    DB_URL:process.env.DATABASE_URL || ""
}

/**✅ Why use || in env.ts?
1️⃣ Prevents undefined values → Ensures fallback if env variables are missing.
2️⃣ Avoids runtime errors → Stops crashes by providing defaults.
3️⃣ Ensures correct types → Keeps values as strings. */
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();



// WHEN USING TS STICK TO NAMED EXPORT AND NEVER USE EXPORT DEFAULT 


/** Named Export (export const)
Syntax: export const prisma = new PrismaClient();
Import: import { prisma } from "./file"; ✅ (Curly braces required)
Best For: Multiple exports from a file.

2️⃣ Default Export (export default)
Syntax: export default prisma;
Import: import prisma from "./file"; ✅ (No curly braces needed)
Best For: Exporting only one thing from a file.

3️⃣ CommonJS Export (module.exports)
Syntax:
module.exports = prisma;
Import: const prisma = require("./file"); ✅ (Works in CommonJS)

Best For: Node.js projects using CommonJS ("module": "CommonJS" in tsconfig.json). */
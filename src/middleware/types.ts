import { Request } from 'express';

export interface AuthRequest extends Request {
    user?: { id: number};  // or number, depending on your system
}
/**TL;DR: TypeScript Interfaces & Why We Specify Types for req, res, and next


1️⃣ What Are Interfaces?
✅ Interfaces define the structure of an object (what properties it should have).
✅ They enforce type safety and make code more readable.
✅ Used to extend built-in types like Express's Request.

🔹 Basic Example
interface User {
  username: string;
  age: number;
}


This ensures any object assigned to User must have username (string) and age (number).




2️⃣ Why Do We Specify Types for req, res, and next?
When writing Express middleware/controllers in TypeScript, we must explicitly specify types for req, res, and next because TypeScript needs to know:
What properties exist on req and res?
What methods are available?
Prevent accidental errors.




🔹 Example Without Types (JavaScript)
app.get("/", (req, res) => {
  res.send("Hello World");
});
🔹 In JavaScript, req and res are dynamic, so we don’t need to specify types.



🔹 Example With Types (TypeScript)
import { Request, Response, NextFunction } from "express";
const handler = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello TypeScript");
};
🔹 Here, Request, Response, and NextFunction are imported from Express to ensure correct typing.





3️⃣ Why Extend Express’s Request Type?
By default, req does not include custom properties like user.
🔹 To fix this, we extend the Request type with an interface.

🔹 Example: Extending Request
import { Request } from "express";
interface CustomRequest extends Request {
  user?: any;
}
const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  req.user = { id: 1, name: "Alice" }; // Now TypeScript recognizes this!
  next();
};


🔹 This allows us to safely add req.user.





4️⃣ Why Do We Specify NextFunction?
next is a function used in middleware to pass control to the next handler.
✅ We specify next: NextFunction so TypeScript knows it’s a function.
✅ If we don’t, TypeScript may not recognize next().





🔑 Summary
✔ Interfaces define object structure & enforce type safety.
✔ We specify types for req, res, and next to prevent errors.
✔ We extend Request when adding custom properties (like user).
✔ next: NextFunction ensures TypeScript recognizes it as a function.

 */
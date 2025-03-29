import {z} from "zod"

export const userschema=z.object({
    username:z.string().min(3,"USERNAME SHOULD BE MORE THAN 3 CHARACTERS"),
    password:z.string().min(3,"PASSWORD SHOULD BE MORE THAN 3 CHARACTERS")
})

export type user=z.infer<typeof userschema>;

/**For example, if your schema is:

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});



Then this:
type User = z.infer<typeof userSchema>;


is the same as manually writing:
type User = {
  username: string;
  age: number;
}; */
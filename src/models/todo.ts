import {z} from "zod"

export const todoschema=z.object({
    title:z.string(),
    description:z.string(),
    done:z.boolean().optional().default(false)
})

export type todo=z.infer<typeof todoschema>;

//console.log(z
/*If you see { object: [Function], string: [Function], ... }, then zod.object() is valid.

If you see { z: { object: [Function], string: [Function] } }, then zod.z.object() is required.*/

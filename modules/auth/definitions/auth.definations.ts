import { z } from "zod";
export const LoginSchema = z.object({
  username: z.string().min(1, "This field cannot be left empty!"),
  password: z
    .string()
    .trim()
    .min(1, "This field cannot be left empty!")
    .max(50, "Characers cannot excess more than 50 characters"),
});

export type ILogin = z.infer<typeof LoginSchema>;

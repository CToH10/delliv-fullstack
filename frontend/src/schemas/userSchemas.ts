import { z } from "zod";

const strongPassword: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const passwordMessage: string =
  "Must contain at least one lowercase, one uppercase and a number; can contain a special character";

export const registerSchema = z
  .object({
    username: z.string().max(120).min(1),
    fullName: z.string().max(120).min(1),
    email: z.string().max(120).email().min(1),
    password: z.string().min(10).regex(strongPassword, passwordMessage),
    confirmPassword: z.string().min(1),
    address: z.object({
        cep: z.string().min(1).max(9),
        state: z.string().min(1).max(19),
        city: z.string().min(1).max(30),
        street: z.string().min(1).max(50),
        number: z.string().min(1).max(30),
        complement: z.string().min(1).max(120).optional(),
    })
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const updateUserSchema = z.object({
  password: z.optional(
    z.string().min(10).regex(strongPassword, passwordMessage).or(z.literal(""))
  ),
  username: z.string().max(120).optional(),
  fullName: z.string().max(120).min(1).optional(),
  email: z.string().max(120).email().optional(),
});

export type TRegister = z.infer<typeof registerSchema>;

export type TUpdateUser = z.infer<typeof updateUserSchema>;

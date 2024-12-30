import { newPassword } from "@/actions/new-password";
import { UserRole } from "@prisma/client";
import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Minimum of 8 character required!",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(8, {
    message: "Minimum 8 character!",
  }),
  name: z.string().min(1, {
    message: "Your Name",
  }),
});

// Pengaturan Schema zod

export const SettingsSchema = z
  .object({
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    name: z.optional(z.string()),
    isTwoFactorEnable: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "New Password Required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password required!",
      path: ["password"],
    }
  );

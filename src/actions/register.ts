"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

import { RegisterSchema } from "../../schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate field
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  // Get data from validateFields contain {name, email,pass,}
  const { name, email, password } = validateFields.data;
  // Hash pass with bcrypt with 10 salt
  const hashPass = await bcrypt.hash(password, 10);

  // Existing User or not
  const existingUser = await getUserByEmail(email);
  // Get user email already use or not
  if (existingUser) {
    return {
      error: "Email sudah digunakan!",
    };
  }

  // Create register user
  await db.user.create({
    data: {
      name,
      email,
      password: hashPass,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Email sudah terkonfirmasi!!" };
};

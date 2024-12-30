import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import { UserRole } from "@prisma/client";

import { db } from "./lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "./data/user";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { UserRole } from "@prisma/client";
import { getAccountByUserId } from "./data/account";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log({
        user,
        account,
      });
      // * Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      if (!user || !user?.id) return false;

      const existingUser = await getUserById(user.id);

      // * Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      // TODO: Add 2FA Check
      if (existingUser.isTwoFactorEnable) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        // To check there are twoConfirm or not
        if (!twoFactorConfirmation) return false;

        // Delete 2FA confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        });
      }
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      // Check 2 FA enable or not
      if (session.user) {
        session.user.isTwoFactorEnable = token.isTwoFactorEnable as boolean;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email as string;
        session.user.isOAuth = token.isOAuth as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);
      // Get Account id
      token.isOAuth = !!existingAccount; // boolean

      // Update name from token
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      // Check enable 2FA
      token.isTwoFactorEnable = existingUser.isTwoFactorEnable;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const AdminServerAction = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { succes: "Server aksi diperbolehkan" };
  }

  return { error: "Server aksi tidak diperbolehkan!" };
};

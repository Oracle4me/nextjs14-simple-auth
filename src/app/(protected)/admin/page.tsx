// server action to
"use client";

import { RoleGate } from "@/components/auth/role/role-gate";
import { UserInfo } from "@/components/auth/user/user-info";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
import { AdminServerAction } from "../../../actions/admin";

const ServerPage = () => {
  // Protecd admin page

  const onSeverClick = () => {
    AdminServerAction().then((data) => {
      if (data.succes) {
        toast.success(data.succes);
      }

      if (data.error) {
        toast.error(data.error);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Route API Disetujui!");
      } else {
        toast.error("Route API tidak disetujui!");
      }
    });
  };
  // Take sesseion from server action
  return (
    <Card className="w-[600px]">
      <CardHeader className="font-semibold text-center text-xl">
        Admin API
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Kamu diperbolehkan untuk melihat isi konten dibawah ini!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Khusus API Admin</p>
        </div>
        <Button onClick={onApiRouteClick}>Klik</Button>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Khusus API Server Aksi</p>
        </div>
        <Button onClick={onSeverClick}>Klik</Button>
      </CardContent>
    </Card>
  );
};

export default ServerPage;

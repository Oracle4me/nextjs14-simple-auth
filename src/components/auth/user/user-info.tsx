// user action depending on parents components || if parents "use server" this component going to be serve acrion or likewise

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExtendedUser } from "../../../../next-auth";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center bg-e">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between border p-3 shadow-sm">
          <p className="text-sm font-medium">Id</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between border p-3 shadow-sm">
          <p className="text-sm font-medium">Nama</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between border p-3 shadow-sm">
          <p className="text-sm font-medium">Authentikasi 2 Faktor</p>
          <Badge
            variant={user?.isTwoFactorEnable ? "success" : "destructive"}
            className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
            {user?.isTwoFactorEnable ? "On" : " Off"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

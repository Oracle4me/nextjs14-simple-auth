// server action to

import { UserInfo } from "@/components/auth/user/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  // Ambil sesi dari aksi server
  const user = await currentUser();
  return (
    <div>
      <UserInfo label="Komponen Server" user={user} />
    </div>
  );
};

export default ServerPage;

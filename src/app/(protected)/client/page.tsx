// server action to

import { UserInfo } from "@/components/auth/user/user-info";
import { currentUser } from "@/lib/auth";

const ClientPage = async () => {
  // Take sesseion from server action
  const user = await currentUser();
  return (
    <div>
      <UserInfo label="Komponen Client" user={user} />
    </div>
  );
};

export default ClientPage;

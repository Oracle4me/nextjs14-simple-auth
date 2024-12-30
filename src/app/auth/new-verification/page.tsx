import { Suspense } from "react";
import { NewVerificationForm } from "@/components/auth/new-verification-form";

const NewPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewPasswordPage;

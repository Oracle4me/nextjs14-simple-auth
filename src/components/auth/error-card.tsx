import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Card } from "../ui/card";

export const ErrorCard = () => {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <CardWrapper
        headerTitle="Error Page!"
        headerLabel="Oops! Something went wrong!"
        backButtonLabel="Back to login"
        backButtonHref="/auth/login">
        <div className="w-full flex justify-center items-center">
          <ExclamationTriangleIcon />
        </div>
      </CardWrapper>
    </div>
  );
};

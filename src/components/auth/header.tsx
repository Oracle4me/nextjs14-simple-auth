import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  title: string;
  label: string;
}

export const Header = ({ label, title }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-x-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

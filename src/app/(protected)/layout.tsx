import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProctededLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col gap-y-10 justify-center items-center bg-sky-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProctededLayout;

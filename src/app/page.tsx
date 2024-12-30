import { LoginButton } from "@/components/auth/login-btn";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-slate-800">
      <div className="space-y-6 text-center">
        <h1 className="font-semibold text-6xl text-white shadow-md">Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

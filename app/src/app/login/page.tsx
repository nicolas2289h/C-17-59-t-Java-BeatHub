import { ClientLogin } from "@/components/app/login/ClientLogin";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ClientLogin />
      </div>
    </main>
  );
}

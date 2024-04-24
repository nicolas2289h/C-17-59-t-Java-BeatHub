import { ClientHome } from "@/components/app/home/ClientHome";
import HeroSection from "@/components/sections/HeroSection";
import HitsSection from "@/components/sections/HitsSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ClientHome />
      </main>
      <HitsSection/>
    </>
  );
}

import { Hero } from "../components/landing-page/Hero";
import { Header } from "../components/landing-page/Header";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Header />
      <Hero />
    </main>
  );
}
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Benefits from "@/components/layout/Benefits/Benefits";

export default function Home() {
  return (
    <main className="bg-[#000]">
      <div className="m-auto grid max-w-[1440px] grid-cols-12 gap-x-[30px] bg-main-grey-100">
        <Header />
        <Hero />
        <Benefits />
      </div>
    </main>
  );
}

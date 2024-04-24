import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-x-[30px] bg-main-grey-100">
      <Header />
      <Hero />
    </main>
  );
}

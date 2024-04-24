import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import How from "@/components/layout/How";

export default function Home() {
  return (
    <main className="bg-[#000]">
      <div className="m-auto grid max-w-[1440px] grid-cols-12 gap-x-[30px] bg-main-grey-100">
        <Header />
        <Hero />
        <How />
      </div>
    </main>
  );
}

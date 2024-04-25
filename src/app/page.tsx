import Hero from "@/components/layout/Hero";
import Benefits from "@/components/layout/Benefits/Benefits";
import Expertise from "@/components/layout/Expertise/Expertise";
import Integrations from "@/components/layout/Integrations/Integrations";
import News from "@/components/layout/News/News";
import Results from "@/components/layout/Results/Results";

export default function Home() {
  return (
    <div className="col-start-1 col-end-13 grid max-w-[1440px] grid-cols-12 gap-x-[30px] bg-main-grey-100">
      <Hero />
      <Benefits />
      <Expertise />
      <Integrations />
      <News />
      <Results />
    </div>
  );
}

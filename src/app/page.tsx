import Hero from "@/components/layout/Home/Hero";
import Benefits from "@/components/layout/Home/Benefits/Benefits";
import Expertise from "@/components/layout/Home/Expertise/Expertise";
import Integrations from "@/components/layout/Home/Integrations/Integrations";
import News from "@/components/layout/Home/News/News";
import Results from "@/components/layout/Home/Results/Results";
import Testimonials from "@/components/layout/Home/Testimonials/Testimonials";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
    <div className="col-start-1 col-end-13 grid max-w-[1440px] grid-cols-12 gap-x-[30px] overflow-hidden bg-main-grey-100">
      <Hero />
      <Benefits />
      <Expertise />
      <Integrations />
      <News />
      <Results />
      <Testimonials />
      <Banner />
    </div>
  );
}

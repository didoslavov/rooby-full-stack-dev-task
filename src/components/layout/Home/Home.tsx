import Hero from "@/components/layout/Home/Hero/Hero";
import Benefits from "@/components/layout/Home/Benefits/Benefits";
import Expertise from "@/components/layout/Home/Expertise/Expertise";
import Integrations from "@/components/layout/Home/Integrations/Integrations";
import News from "@/components/layout/Home/News/News";
import Results from "@/components/layout/Home/Results/Results";
import Testimonials from "@/components/layout/Home/Testimonials/Testimonials";
import Banner from "@/components/ui/Banner";

function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Expertise />
      <Integrations />
      <News />
      <Results />
      <Testimonials />
      <Banner />
    </>
  );
}

export default HomePage;

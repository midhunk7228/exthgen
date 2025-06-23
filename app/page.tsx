import dynamic from "next/dynamic";
// import BuyMeACoffee from "./AppComponents/BuyMeACoffee";
import InnovationSection from "./AppComponents/InnovationSection";
import Navbar from "./AppComponents/Navbar";
import ProjectList from "./AppComponents/PojectList";
import TestimonialSection from "./AppComponents/Testimonial";
import WaterDropWave from "./AppComponents/WaterDropWave";
import WhatweOffer from "./AppComponents/WhatWeOffer";
import WhatWeOfferLogos from "./AppComponents/WhatWeOfferLogos";

const BuyMeACoffee = dynamic(() => import("./AppComponents/BuyMeACoffee"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
});
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <WaterDropWave />
      <WhatweOffer />
      <WhatWeOfferLogos />
      <ProjectList />
      <TestimonialSection />
      <InnovationSection />
      <BuyMeACoffee />
    </div>
  );
}

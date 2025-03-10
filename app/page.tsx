import BuyMeACoffee from "./AppComponents/BuyMeACoffee";
import InnovationSection from "./AppComponents/InnovationSection";
import Navbar from "./AppComponents/Navbar";
import ProjectList from "./AppComponents/PojectList";
import TestimonialSection from "./AppComponents/Testimonial";
import WaterDropWave from "./AppComponents/WaterDropWave";
import WhatweOffer from "./AppComponents/WhatWeOffer";

export default function Home() {
  return (
    <div className='min-h-screen w-full'>
      <WaterDropWave />    
      <WhatweOffer  />  
      <ProjectList />
      <TestimonialSection />
      <InnovationSection />
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

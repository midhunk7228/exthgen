import BuyMeACoffee from './components/BuyMeACoffee';
import InnovationSection from './components/Innovation';
import ProjectList from './components/ProjectList';
import RippleWave from './components/RippleEffect'
import PartnerCarousel from './components/SlideShow';
import PartnerLogosSlider from './components/SlideShow';
import Slideshow from './components/SlideShow'
import TestimonialSection from './components/Testimonial';
import WaterDropWave from './components/WaterDropWave'
import WhatweOffer from './components/WhatweOffer'

function App() {
  const companyLogos = [
    { src: "./ClientLogos/burger-king-24690.svg", alt: "burger-king-24690" },
    { src: "./ClientLogos/cartoon-network.svg", alt: "cartoon-network" },
    { src: "./ClientLogos/harley-davidson-3.svg", alt: "harley-davidson-3" },
    { src: "./ClientLogos/kuwait-airways-1.svg", alt: "kuwait-airways-1" },
    { src: "./ClientLogos/tripadvisor-logo-circle-green-vertical-lockup-registered-rgb.svg", alt: "tripadvisor-logo-circle-green-vertical-lockup-registered-rgb" },
    { src: "./ClientLogos/tv-azteca.svg", alt: "tv-azteca.svg" },
    
  ];
  return (
    <div className='min-h-screen w-full'>
      <WaterDropWave />
      {/* <RippleWave /> */}
      <WhatweOffer />
      {/* <div className="flex justify-center items-center w-full">
        <PartnerLogosSlider />
      </div> */}
      <ProjectList />
      <TestimonialSection />
      <InnovationSection />
      <BuyMeACoffee />
    </div>
  )
}

export default App

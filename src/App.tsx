import BuyMeACoffee from './components/BuyMeACoffee';
import InnovationSection from './components/Innovation';
import ProjectList from './components/ProjectList';
import TestimonialSection from './components/Testimonial';
import WaterDropWave from './components/WaterDropWave'
import WhatweOffer from './components/WhatweOffer'
import WhatWeOfferLogos from './components/WhatWeOfferLogos';

function App() {
  
  return (
    <div className='min-h-screen w-full'>
      <WaterDropWave />
      {/* <RippleWave /> */}
      <WhatweOffer />
      <WhatWeOfferLogos />
      {/* <div className="flex justify-center items-center w-full">
        <PartnerLogosSlider />
      </div> */}
      <ProjectList />
      <TestimonialSection />
      <InnovationSection />
      <BuyMeACoffee url="/footer-vid.mp4"/>
    </div>
  )
}

export default App

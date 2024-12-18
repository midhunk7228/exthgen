import BuyMeACoffee from './components/BuyMeACoffee';
import InnovationSection from './components/Innovation';
import ProjectList from './components/ProjectList';
import TestimonialSection from './components/Testimonial';
import WaterDropWave from './components/WaterDropWave'
import WhatweOffer from './components/WhatweOffer'

function App() {
  
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

import React from 'react'
import Vision from '../../components/Vision'
import InnovationSection from '../../components/Innovation'
import BuyMeACoffee from '../../components/BuyMeACoffee'
import WhyWe from '../../components/WhyWe'
import TeamPage from '../../components/OurTeam'

function About() {
  return (
    <div className='flex flex-col'>
        <Vision />
        <div className='flex pt-44'>

        <InnovationSection />
        </div>
        <TeamPage />
        <WhyWe />
        <BuyMeACoffee />
    </div>
  )
}

export default About
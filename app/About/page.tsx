import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import InnovationSection from "../AppComponents/InnovationSection";
import TeamPage from "../AppComponents/TeamPage";
import Vision from "../AppComponents/Vision";
import WhyWe from "../AppComponents/WhyWe";

function About() {
  return (
    <div className="flex flex-col">
      <Vision />
      <div className="flex pt-44 justify-center">
        <InnovationSection />
      </div>
      <TeamPage />
      <WhyWe />
      {/* <BuyMeACoffee /> */}
    </div>
  );
}

export default About;

import dynamic from "next/dynamic";
// import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import InnovationSection from "../AppComponents/InnovationSection";
import TeamPage from "../AppComponents/TeamPage";
import Vision from "../AppComponents/Vision";
// import WhyWe from "../AppComponents/WhyWe";

const WhyWe = dynamic(() => import("../AppComponents/WhyWe"), {
  loading: () => (
    <div className="h-96 bg-[#E8ECEE] animate-pulse flex items-center justify-center">
      <div className="text-gray-500">Loading...</div>
    </div>
  ),
});

const BuyMeACoffee = dynamic(() => import("../AppComponents/BuyMeACoffee"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
});

function About() {
  console.log("test...");
  return (
    <div className="flex flex-col">
      <Vision />
      <div className="flex pt-44 justify-center">
        <InnovationSection />
      </div>
      <TeamPage />
      <WhyWe />
      <BuyMeACoffee />
    </div>
  );
}

export default About;

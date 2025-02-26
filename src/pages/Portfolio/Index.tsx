import BuyMeACoffee from "../../components/BuyMeACoffee";
import JoinUs from "../../components/JoinUs";
import PortfolioSection from "../../components/PortfolioSection";
import RecentProjectPage from "../../components/RecentProjects";
import TestimonialSection from "../../components/Testimonial";

function Portfolio() {
  return (
    <div className="flex flex-col">
      <PortfolioSection />
      <RecentProjectPage />
      <TestimonialSection/>
      <JoinUs/>
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

export default Portfolio;

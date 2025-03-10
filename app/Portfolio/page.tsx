import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import JoinUs from "../AppComponents/JoinUs";
import PortfolioSection from "../AppComponents/PortfolioSection";
import RecentProjectPage from "../AppComponents/RecentProject";
import TestimonialSection from "../AppComponents/Testimonial";


function Portfolio() {
  return (
    <div className="flex flex-col">
      <PortfolioSection />
      <RecentProjectPage />
      <TestimonialSection />
      <JoinUs />
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

export default Portfolio;

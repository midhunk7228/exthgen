import BuyMeACoffee from "../../components/BuyMeACoffee";
import JoinUs from "../../components/JoinUs";
import PortfolioSection from "../../components/PortfolioSection";
import RecentProjectPage from "../../components/RecentProjects";
import Testimonials from "../../components/Testimonials";

function Portfolio() {
  return (
    <div className="flex flex-col">
      <PortfolioSection />
      <RecentProjectPage />
      <Testimonials/>
      <JoinUs/>
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

export default Portfolio;

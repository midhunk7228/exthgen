import BuyMeACoffee from "../../components/BuyMeACoffee";
import JoinUs from "../../components/JoinUs";
import PortfolioSection from "../../components/PortfolioSection";
import RecentProjectPage from "../../components/RecentProjects";
import ServiceFooter from "../../components/ServiceFooter";
import ServiceHeader from "../../components/ServiceHeader";
import ServicesContent from "../../components/ServicesContent";
import TestimonialSection from "../../components/Testimonial";

function Services() {
  return (
    <div className="flex flex-col">
      <ServiceHeader />
      <ServicesContent />
      <ServiceFooter/>
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

export default Services;

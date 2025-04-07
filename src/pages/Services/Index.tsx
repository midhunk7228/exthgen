import BuyMeACoffee from "../../components/BuyMeACoffee";
import ServiceFooter from "../../components/ServiceFooter";
import ServiceHeader from "../../components/ServiceHeader";
import ServicesContent from "../../components/ServicesContent";

function Services() {
  return (
    <div className="flex flex-col">
      <ServiceHeader />
      <ServicesContent />
      <ServiceFooter/>
      <BuyMeACoffee url="/footer-vid.mp4"/>
    </div>
  );
}

export default Services;

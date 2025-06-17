import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import ServicesContent from "../AppComponents/ServiceContent";
import ServiceFooter from "../AppComponents/ServiceFooter";
import ServiceHeader from "../AppComponents/ServiceHeader";

function Services() {
  return (
    <div className="flex flex-col">
      <ServiceHeader />
      <ServicesContent />
      <ServiceFooter />
      <BuyMeACoffee />
    </div>
  );
}

export default Services;

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
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

export default Services;

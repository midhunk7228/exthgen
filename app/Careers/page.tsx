import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import CareerHeader from "../AppComponents/CareerHeader";
import CareerMain from "../AppComponents/CareerMain";
import CoolThings from "../AppComponents/CoolThings";

function Careers() {
  return (
    <div className="flex flex-col">
      <CareerHeader />
      <CareerMain />
      <CoolThings />
      <BuyMeACoffee />
    </div>
  );
}

export default Careers;

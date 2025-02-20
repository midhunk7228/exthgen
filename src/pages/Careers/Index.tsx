import BuyMeACoffee from "../../components/BuyMeACoffee";
import CareerHeader from "../../components/CareerHeader";
import CareerMain from "../../components/CareerMain";
import CoolThings from "../../components/CoolThings";

function Careers() {
  return (
    <div className="flex flex-col">
      <CareerHeader />
      <CareerMain />
      <CoolThings/>
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  );
}

export default Careers;

import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import CareerHeader from "../AppComponents/CareerHeader";
import CareerMain from "../AppComponents/CareerMain";
import CoolThings from "../AppComponents/CoolThings";


function Careers() {
  return (
    <div className="flex flex-col">
      <CareerHeader />
      <CareerMain  />
      <CoolThings />
      <BuyMeACoffee url="./footer-vid.mp4"/>
    </div>
  );
}

export default Careers;

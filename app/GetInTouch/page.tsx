import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import GetInTouch from "../AppComponents/GetInTouch";

function GetInTouchIndex() {
  return (
    <div className="flex flex-col">
      <GetInTouch />
      <BuyMeACoffee />
    </div>
  );
}

export default GetInTouchIndex;

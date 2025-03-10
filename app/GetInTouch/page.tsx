import BuyMeACoffee from "../AppComponents/BuyMeACoffee"
import GetInTouch from "../AppComponents/GetInTouch"


function GetInTouchIndex() {
  return (
    <div className="flex flex-col">
      <GetInTouch />
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  )
}

export default GetInTouchIndex
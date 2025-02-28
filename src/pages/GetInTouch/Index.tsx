import BuyMeACoffee from '../../components/BuyMeACoffee'
import GetInTouch from '../../components/GetInTouch'

function GetInTouchIndex() {
  return (
    <div className="flex flex-col">
      <GetInTouch />
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  )
}

export default GetInTouchIndex
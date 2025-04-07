import BuyMeACoffee from '../../components/BuyMeACoffee'
import GetInTouch from '../../components/GetInTouch'

function GetInTouchIndex() {
  return (
    <div className="flex flex-col">
      <GetInTouch />
      <BuyMeACoffee url="/footer-vid.mp4"/>
    </div>
  )
}

export default GetInTouchIndex
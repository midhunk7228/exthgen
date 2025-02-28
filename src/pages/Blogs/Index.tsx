import BlogHeader from '../../components/BlogHeader'
import BlogList from '../../components/BlogList'
import BuyMeACoffee from '../../components/BuyMeACoffee'
import JoinUs from '../../components/JoinUs'

function Blogs() {
  return (
    <div className="flex flex-col">
      <BlogHeader />
      <BlogList />
      <JoinUs />
      <BuyMeACoffee url="./bottom_img.jpeg"/>
    </div>
  )
}

export default Blogs
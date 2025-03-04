import { useLocation } from 'react-router-dom';
import BlogDetailsContent from '../../components/BlogDetailsContent'
import BlogDetailsHeader from '../../components/BlogDetailsHeader'
import BuyMeACoffee from '../../components/BuyMeACoffee'
import RelatedBlogs from '../../components/RelatedBlogs'

function BlogsDetails() {
  const location = useLocation();

  const blogDetails = location.state?.blog;
  console.log(blogDetails, "employeedetails")

  return (
    <div className="flex flex-col">
      <BlogDetailsHeader blogDetails = {blogDetails}/>
      <BlogDetailsContent blogDetails = {blogDetails}/>
      <RelatedBlogs />
      <BuyMeACoffee url="../bottom_img.jpeg"/>
    </div>
  )
}

export default BlogsDetails
import { useLocation } from 'react-router-dom';
import BlogDetailsContent from '../../components/BlogDetailsContent'
import BlogDetailsHeader from '../../components/BlogDetailsHeader'
import BuyMeACoffee from '../../components/BuyMeACoffee'
import RelatedBlogs from '../../components/RelatedBlogs'
import { useEffect } from 'react';

function BlogsDetails() {
  const location = useLocation();

  const blogDetails = location.state?.blog;
  console.log(blogDetails, "employeedetails")

  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col">
      <BlogDetailsHeader blogDetails = {blogDetails}/>
      <BlogDetailsContent blogDetails = {blogDetails}/>
      <RelatedBlogs />
      <BuyMeACoffee url="../footer-vid.mp4"/>
    </div>
  )
}

export default BlogsDetails
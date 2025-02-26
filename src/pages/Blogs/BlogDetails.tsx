import BlogDetailsContent from '../../components/BlogDetailsContent'
import BlogDetailsHeader from '../../components/BlogDetailsHeader'
import BuyMeACoffee from '../../components/BuyMeACoffee'
import RelatedBlogs from '../../components/RelatedBlogs'

function BlogsDetails() {
  return (
    <div className="flex flex-col">
      <BlogDetailsHeader />
      <BlogDetailsContent />
      <RelatedBlogs />
      <BuyMeACoffee url="../bottom_img.jpeg"/>
    </div>
  )
}

export default BlogsDetails
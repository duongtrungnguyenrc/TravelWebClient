
import {BlogContent, BlogContentTable , BlogContentRight, BlogContentRelated,BlogContentComment} from "@/app/_components";
const BlogPage = () => {
  return (<>
    <BlogContent />
    <BlogContentTable/>
    <BlogContentRelated/>
    <BlogContentComment/>
    <BlogContentRight/>

  </>);
}
export default BlogPage;
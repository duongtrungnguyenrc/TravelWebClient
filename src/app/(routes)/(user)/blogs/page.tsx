import { DefaultHero, NormalBlogs, PopularBlogs } from "@/app/_components";

const BlogsPage = () => {
  return (
  <>
    <DefaultHero/>
    <PopularBlogs/>
    <NormalBlogs/>
  </>
  );
};
export default BlogsPage;
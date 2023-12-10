

import {BlogContent, BlogContentRight, ServiceReview} from "@/app/_components";
import BlogReview from "@/app/_components/BlogReview/BlogReview";
import { blogServices } from "@/app/_services";
import { BlogDetailResponse } from "@/app/_types";

const BlogPage = async ({ params } : { params: { id: string } }) => {

  const response = await blogServices.get(undefined, undefined, +params.id);
  console.log(response);
  

  return (
    <div className="wrapper container d-flex flex-column pb-5">
      <div className="row">
        <div className="col-12">
          <BlogContent post={(response.data as BlogDetailResponse)?.post} />
          <BlogReview id={(response.data as BlogDetailResponse)?.post?.id + "" || "1"} ratingAcceptance/>
        </div>
      </div>
      <div className="row">
        <h3 className="mb-4">
          <strong>Bài viết liên quan:</strong>
        </h3>
        <BlogContentRight posts={(response.data as BlogDetailResponse)?.relevantPosts || []}/>
      </div>
    </div>
  );
}
export default BlogPage;
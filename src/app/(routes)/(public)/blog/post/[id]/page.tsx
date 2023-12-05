

import {BlogContent, BlogContentRight, ServiceReview} from "@/app/_components";
import { blogServices } from "@/app/_services";
import { BlogDetailResponse } from "@/app/_types";

const BlogPage = async ({ params } : { params: { id: string } }) => {

  const response = await blogServices.get(undefined, undefined, +params.id);

  return (
    <div className="wrapper container d-flex flex-column pb-5">
      <div className="row">
        <div className="col-12">
          <BlogContent post={(response.data as BlogDetailResponse)?.post} />
          <ServiceReview id={"1"}/>
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
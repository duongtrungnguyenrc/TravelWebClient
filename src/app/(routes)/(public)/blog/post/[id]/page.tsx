
'use client'

import {BlogContent, BlogContentRight, ServiceReview} from "@/app/_components";
import { Container } from "@mui/material";

const BlogPage = ({ params } : { params: { id: string } }) => {

  return (
    <Container maxWidth="xl" className="wrapper">
      <div className="row">
        <div className="col-8">
          <BlogContent id={+params.id} />
          <ServiceReview id={"1"}/>
        </div>
        <div className="col-4">
          <BlogContentRight/>
        </div>
      </div>
    </Container>
  );
}
export default BlogPage;
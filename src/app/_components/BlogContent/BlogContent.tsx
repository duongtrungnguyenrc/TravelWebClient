"use client";

import "./styles.scss";
import Chip from "@mui/material/Chip";
import { Blog } from "@/app/_types";
import paragraphLayouts from '../BlogParagraphLayout/BlogParagraphLayout';
import { Avatar } from "@mui/material";

const BlogContent = ({ post } : { post: Blog | null }) => {

  return (
    <section className="post-wrapper">
      <div>
        <Chip label={ post?.type } size="small" className="rounded"/>
        <h1 className="blog-title mt-2">{ post?.title }</h1>
        <div className='d-flex align-items-center gap-2 my-3'>
            <Avatar/>
            <div>{ post?.author } { post?.time }</div>
        </div>
        <img
            src={ post?.img }
            alt={ post?.title }
            loading="lazy"
            className="blog-thumbnail"
        />
      </div>
      {
        post?.paragraphs.map((paragraph) => {
          const Element = paragraphLayouts[paragraph.layout];
          return <Element key={paragraph.id } paragraph={paragraph} image={paragraph.image.src}/>
        })
      }
    </section>
  );
};

export default BlogContent;
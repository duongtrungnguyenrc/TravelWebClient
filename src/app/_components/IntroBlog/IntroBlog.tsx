// Produced by Khai Nguyen
// Modify by Duong Trung Nguyen

'use client'

import './styles.scss';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import variants from '@/app/_variants';
import { Typography } from '@mui/material';

interface LayoutProps {
  title?: string;
  content?: string;
}

const IntroBlog = ({title , content}: LayoutProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <section className="container-blog" ref={ref} >
      <motion.div 
        className="blog-left-site"
        variants={variants.toRightVariant}
        initial="hidden"
        animate={control}
      >
        <img src="/images/home-slider-1.jpg" alt="" />
      </motion.div>
      <div className="blog-right-site">
        <motion.div className="heading-blog" variants={variants.toTopVariant} initial="hidden" animate={control}>
          <h1 className="heading-name">
            {title}
          </h1>
        </motion.div>
        <motion.div className="content-intro-blog" variants={variants.toBottomVariant} initial="hidden" animate={control}>
          <Typography variant='body2'>
            {content}
          </Typography>
          <div className="btn-more">
            <button className=" btn btn-big btn-yellow">Learn More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default IntroBlog;

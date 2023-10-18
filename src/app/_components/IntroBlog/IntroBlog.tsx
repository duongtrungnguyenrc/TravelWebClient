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
    <section className="container-blog container-fluid d-flex p-0" ref={ref} >
      <motion.div 
        className="col-12 col-md-5 col-lg-5 px-0 blog-left-site"
        variants={variants.toRightVariant}
        initial="hidden"
        animate={control}
      >
        <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Hoi-An-soi-dong.jpg" alt="" />
      </motion.div>
      <div className="col-12 col-md-7 col-lg-7 blog-right-site">
        <motion.div className="heading-blog" initial="hidden" animate={control}>
          <h1 className="heading-name">
            {title}
          </h1>
        </motion.div>
        <motion.div className="content-intro-blog mt-4" initial="hidden" animate={control}>
          <Typography variant='body1'>
            {content}
          </Typography>
          <button className="mt-5 btn btn-sm btn-yellow">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};
export default IntroBlog;

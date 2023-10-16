// Produced by Khai Nguyen

'use client'

import './styles.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import variants from '@/app/_variants';
import { useInView } from 'react-intersection-observer';
import { Typography } from '@mui/material';

interface LayoutProps {
  title?: string;
  content?: string;
  myList?: string[]; 
}
const IntroBlogRight = ({title , content , myList}: LayoutProps) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
  return (
    <section ref={ref} className="container-blog-right">
      <motion.div className="blog-right-site" variants={variants.toLeftVariant} initial="hidden" animate={control}>
        <img src="/images/home-slider-3.jpg" alt="" />
      </motion.div>
      <div className="blog-left-site">
        <motion.div className="heading-blog" initial="hidden" animate={control}>
          <h1 className="heading-name">
            {title}
          </h1>
        </motion.div>
        <motion.div className="content-intro-blog" initial="hidden" animate={control}>
          <Typography variant='body1'>
            {content}
          </Typography>
          <div className="list-container">
            <ul className ="list-content">
            {myList ? (
                <>
                  <li>{myList[0]}</li>
                  <li>{myList[1]}</li>
                  <li>{myList[2]}</li>
                </>
              ) : null}
            </ul>
          </div>
          <div className="btn-more">
            <button className=" btn btn-big btn-yellow">Learn More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default IntroBlogRight;

// Produced by Khai Nguyen
// Modify by Duong Trung Nguyen

'use client'

import './styles.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import variants from '@/app/_variants';
import { useInView } from 'react-intersection-observer';

const VideoPlace = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);
    return (
        <section ref={ref} className="video-container">
            <motion.div className="video-play"  variants={variants.scaleUpVariant} initial="hidden" animate={control}>
                <iframe className= "video" src="https://www.youtube.com/embed/NSnkb1IAjbE?si=iGFNFLu1aKB1hcsV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
            </motion.div>
        </section>
    )
}
export default VideoPlace ;
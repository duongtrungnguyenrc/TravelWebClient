// Produced by Duong Trung Nguyen

'use client'

import "./styles.scss";
import Clock from "../Clock/Clock";
import Weather from "../Weather/Weather";
import Calendar from "../Calendar/Calendar";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import variants from '@/app/_variants';

const DailyStatus = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
      else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <section ref={ref} className="container-weather flex-center">
            <div className="container-item d-flex">
                <motion.div className="status-item flex-center" variants={variants.scaleUpVariant} initial="hidden" animate={control}>
                    <Calendar/>
                </motion.div>
                <motion.div className="status-item flex-center" variants={variants.scaleUpVariant} initial="hidden" animate={control}>
                    <Clock/>
                </motion.div>
                <motion.div className="status-item flex-center" variants={variants.scaleUpVariant} initial="hidden" animate={control}>
                    <Weather/>
                </motion.div>
            </div>
        </section>
    );
};
export default DailyStatus;
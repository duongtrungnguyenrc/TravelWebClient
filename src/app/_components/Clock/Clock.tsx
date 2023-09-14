'use client'

import { useState, useEffect } from "react";
import "./styles.scss";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
   const timeout = setTimeout(() => {
      setTime(new Date());
    }, 10000);

    clearTimeout(timeout);
  }, []);
  
  return (
    <div className="clock-site">
        <div className="image-icon">
            <div className="clock"></div>
        </div>
        <div className="item-title">
            <p>Time</p>
        </div>
        <div className="detail-value">
            <p>{time.getHours() + ":" + time.getMinutes() + (time.getHours() > 12 ? " PM" : " AM")}</p>
        </div>
    </div>
  );
};
export default Clock;
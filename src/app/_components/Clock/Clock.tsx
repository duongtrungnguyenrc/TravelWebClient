// Produced by Duong Trung Nguyen

'use client'

import "./styles.scss";
import { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => {
        clearInterval(intervalID);
        };
    }, []); 

    const formatTime = (time: Date) => {
        return time.toLocaleTimeString();
    };
  
  return (
    <div className="clock-site">
        <div className="image-icon">
            <div className="clock"></div>
        </div>
        <div className="item-title">
            <p>Time</p>
        </div>
        <div className="detail-value">
            <p>{ formatTime(time) }</p>
        </div>
    </div>
  );
};
export default Clock;
'use client'

import { Typography } from "@mui/material";
import "./styles.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_context/store";

const AdminHero = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
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

    const generateHelloLine = () => {
        const currentTime = new Date().getHours();
        if(currentTime > 18 && formatTime(time).includes("PM")) {
            return "buổi tối";
        }
        else if (formatTime(time).includes("PM")) {
            return "buổi chiều";
        }
        else {
            return "buổi sáng";
        }
    }

    return (
        <div className="admin-hero-site">
           <div className="hero-site">
                <video
                    src="/videos/beachVid.mov"
                    autoPlay
                    loop
                    muted/>
                <div className="hero-content">
                    <Typography className="time">
                        { formatTime(time) }
                    </Typography>
                    <h1 className="hero-title">Chào { generateHelloLine() + " " + currentUser.user?.fullName.split(" ")[0] }</h1>
                </div>
           </div>
        </div>
    );
};
export default AdminHero;
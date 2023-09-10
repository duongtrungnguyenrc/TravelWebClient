'use client'

import { useState } from "react";
import "./styles.scss"

const RegisterGallery = () => {
    const positionList = [["left", "active", "right"], ["right", "left", "active"], ["active", "right", "left"]]
    const [ currGallery, setCurrGallery ] = useState(0); 

    setInterval(() => {
        if(currGallery === positionList.length - 1) {
            setCurrGallery(0)
        }
        else {
            setCurrGallery(currGallery + 1)
        }
    }, 10000)

  return (
    <section className="register-gallery-site flex-center">
        <div className="gallery-list flex-center">
            <div className={"gallery left-animate " + positionList[currGallery][0]}>
                <img src="/images/register-gallery-1.png" alt=""/>
            </div>
            <div className={"gallery center-animate " + positionList[currGallery][1]}>
                <img src="/images/register-gallery-1.png" alt=""/>
            </div>
            <div className={"gallery right-animate " + positionList[currGallery][2]}>
                <img src="/images/register-gallery-1.png" alt=""/>
            </div>
        </div>
        {/* <div className="control-group d-flex">
            <button className="btn btn-yellow" onClick={() => handlePrev()}>prev</button>
            <button className="btn btn-yellow" onClick={() => handleNext()}>next</button>
        </div> */}
    </section>
  );
};
export default RegisterGallery;
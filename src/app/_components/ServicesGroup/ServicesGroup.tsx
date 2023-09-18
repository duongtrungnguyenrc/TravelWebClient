// produced by Duong Trung Nguyen
'use client'

import { useState } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./styles.scss";

import{ Tour } from "@/app/_types";


const ServicesGroup = ({ servicesList } : { servicesList : Tour[] }) => {
  const [ currList, setCurrList ] = useState<Tour[]>(servicesList);

  const handleNext = () => {
    const chagedValue = currList[0];
    setCurrList(currList.slice(1).concat(chagedValue));
  }

  const handlePrev = () => {
    const reversedList = [...currList].reverse();
    const changedValue = reversedList[0];
    const updatedList = reversedList.slice(1).concat(changedValue).reverse();
  
    setCurrList(updatedList);
  }

  return (
    <section className="services-group-site">
        <div className="services-group-top">
            <h1 className="services-group-title">Destinations Most Popular</h1>
            <h1 className="services-group-description">Some of the most popular destinations for you visit with a view the beautiful one.</h1>
            <div className="services-group-control">
              <button className="btn btn-light btn-sm btn-shadow" onClick={() => handlePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.2929 3.29297L6.58594 12L15.2929 20.707L16.7069 19.293L9.41394 12L16.7069 4.70697L15.2929 3.29297Z" fill="#C7923E"/>
                </svg>
              </button>
              <button className="btn btn-yellow btn-sm btn-shadow" onClick={() => handleNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7.29297 4.70697L14.586 12L7.29297 19.293L8.70697 20.707L17.414 12L8.70697 3.29297L7.29297 4.70697Z" fill="white"/>
                </svg>
              </button>
            </div>
        </div>
        <div className="services-group-body">
        {
          currList?.map((value, index) => {
            return <ServiceItem key={index} service={value}/>
          })
        }
        </div>
    </section>
  );
};
export default ServicesGroup;
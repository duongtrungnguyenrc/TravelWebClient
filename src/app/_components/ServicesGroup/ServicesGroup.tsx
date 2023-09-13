// produced by Duong Trung Nguyen
'use client'

import ServiceItem from "../ServiceItem/ServiceItem";
import "./styles.scss";

import TourType from "@/app/_data/Tour";


const ServicesGroup = ({ servicesList } : { servicesList : TourType[] }) => {
  return (
    <section className="services-group-site">
        <div className="services-group-top">
            <h1 className="services-group-title">Destinations <br /> Most Popular</h1>
            <h1 className="services-group-description">Some of the most popular destinations for you visit with a view the beautiful one.</h1>
            <div className="services-group-control">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                  <path d="M7.08331 17.0004L27.625 17.0004" stroke="#0C111F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 26C15 22.1429 7 17 7 17C7 17 15 11.8572 15 8" stroke="#0C111F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                  <path d="M26.9167 17.0004L6.375 17.0004" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 26C19 22.1429 27 17 27 17C27 17 19 11.8572 19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
        </div>
        <div className="services-group-body">
        {
          servicesList?.map((value, index) => {
            return <ServiceItem key={index} service={value}/>
          })
        }
        </div>
    </section>
  );
};
export default ServicesGroup;
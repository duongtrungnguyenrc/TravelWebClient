// produced by Duong Trung Nguyen
'use client'

import { useState } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./styles.scss";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import{ Tour } from "@/app/_types";
import { Container, IconButton } from "@mui/material";


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
    <Container maxWidth="xl" component="section" className="services-group-site px-3">
        <div className="services-group-top">
            <h1 className="services-group-title">Destinations Most Popular</h1>
            <h1 className="services-group-description">Some of the most popular destinations for you visit with a view the beautiful one.</h1>
            <div className="services-group-control gap-0">
              <IconButton onClick={() => handlePrev()}>
                <ChevronLeftIcon fontSize="large"/>
              </IconButton>
              <IconButton onClick={() => handleNext()}>
                <ChevronRightIcon fontSize="large"/>
              </IconButton>
            </div>
        </div>
        <div className="services-group-body">
        {
          currList?.map((value, index) => {
            return <ServiceItem key={index} service={value}/>
          })
        }
        </div>
    </Container>
  );
};
export default ServicesGroup;
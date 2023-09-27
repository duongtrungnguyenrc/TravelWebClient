'use client'

import { useParams } from 'next/navigation';


const TourPage = () => {
  const params = useParams()
  console.log(params.tour);
  
  return (<></>);
};
export default TourPage;
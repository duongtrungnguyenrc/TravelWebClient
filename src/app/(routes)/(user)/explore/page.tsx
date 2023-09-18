import { DefaultHero, ServicesList, ServicesGroup, Benefit } from "@/app/_components";
import TourList from "@/app/_data/TourList";
import { tourServices } from "@/app/_services";
import { Tour } from "@/app/_types";

const HomePage = async () => {
  const response = await tourServices.getAllTours();
    
  return (
    <>
      {/* <DefaultHero/> */}
      {/* <ServicesList servicesList={response.status ? response.data as Tour[] : []}/> */}
      <ServicesList servicesList={TourList}/>
      {/* <Benefit/> */}
      <ServicesGroup servicesList={TourList}/>
    </>
  );
};
export default HomePage;
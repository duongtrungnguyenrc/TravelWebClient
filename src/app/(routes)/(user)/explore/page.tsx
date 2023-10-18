import { DefaultHero, ServicesList, ServicesGroup, Benefit } from "@/app/_components";
import { tourServices } from "@/app/_services";
import { Tour } from "@/app/_types";

const HomePage = async () => {
  // const response = await tourServices.getAllTours(1, 20);
    
  return (
    <div className="container-fluid p-0">
      <ServicesList/>
      <ServicesGroup servicesList={[]}/>
    </div>
  );
};
export default HomePage;
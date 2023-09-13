import { DefaultHero, ServicesList, ServicesGroup, Benefit } from "@/app/_components";
import TourList from "@/app/_data/TourList";

const HomePage = () => {
  return (
    <>
      <DefaultHero/>
      <ServicesList servicesList={TourList}/>
      <Benefit/>
      <ServicesGroup servicesList={TourList}/>
    </>
  );
};
export default HomePage;
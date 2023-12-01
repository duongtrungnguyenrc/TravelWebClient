import { ServicesList, ServicesGroup } from "@/app/_components";

const HomePage = () => {    
  return (
    <div className="container-fluid p-0">
      <ServicesList/>
      <ServicesGroup/>
    </div>
  );
};
export default HomePage;
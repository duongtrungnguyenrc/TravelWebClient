// Produced by Duong Trung Nguyen
import { AdminHero, OrderList, ProfitChart } from "@/app/_components";

const AdminPage = () => {

   return (
      <div>
         <div className="row">
            <div className="col-9">
               <AdminHero/>
            </div>
            <div className="col-3 pl-0">
               <ProfitChart/>
            </div>
         </div>
         <div className="row mt-2">
            <OrderList/>
         </div>
      </div>
   );
};
export default AdminPage;
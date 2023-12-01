import { AdminNavBar, AdminSideBar } from "@/app/_components";
import { ReactNode } from "react";

const AdminLayout = ({ children } : { children: ReactNode }) => {
  return (
    <div className="d-flex flex-row" style={{height: "100vh"}}>
        <div className="col-2">
          <AdminSideBar/>
        </div>
        <div className="col-10 px-0 d-flex flex-column bg-light">
          <AdminNavBar/>
          { children }
        </div>
    </div>
  );
};
export default AdminLayout;
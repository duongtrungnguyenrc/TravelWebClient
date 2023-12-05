import { AdminNavBar, AdminSideBar } from "@/app/_components";
import { ReactNode } from "react";

const AdminLayout = ({ children } : { children: ReactNode }) => {
  return (
    <div className="d-flex position-relative" style={{height: "100vh"}}>
        <AdminSideBar/>
        <div className="col-10 px-0 d-flex flex-column bg-light">
          <AdminNavBar/>
          <div style={{height: "calc(100vh - 69px)", overflow: "auto", padding: "1rem"}}>
            { children }
          </div>
        </div>
    </div>
  );
};
export default AdminLayout;
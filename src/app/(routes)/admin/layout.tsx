import { AdminNavBar } from "@/app/_components";
import { ReactNode } from "react";

const AdminLayout = ({ children } : { children: ReactNode }) => {
  return (
    <>
        <div className="row h-100">
            <AdminNavBar/>
            { children }
        </div>
    </>
  );
};
export default AdminLayout;
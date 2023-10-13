import { Bottom, NavBar } from "@/app/_components";
import { ReactNode } from "react";


const HomeLayout = ({ children } : { children: ReactNode }) => {
  const testRoutes = [
    { routeName: "Khám phá", routePath: "/explore" },  
    { routeName: "Room & Suites", routePath: "/explore" },
    { routeName: "Restaurant & Bar", routePath: "/explore" },
    { routeName: "Diễn đàn", routePath: "/blog" },
    { routeName: "Đăng nhập", routePath: "/auth/login" }
  ]
  return (
    <>
      <NavBar routes={testRoutes}/>
          { children }
      <Bottom/>
    </>
  );
};
export default HomeLayout;
import { Bottom, NavBar } from "@/app/_components";
import { ReactNode } from "react";


const HomeLayout = ({ children } : { children: ReactNode }) => {
  const testRoutes = [
    { routeName: "Explore", routePath: "/explore" },  
    { routeName: "Room & Suites", routePath: "/explore" },
    { routeName: "Restaurant & Bar", routePath: "/explore" },
    { routeName: "Blog", routePath: "/blog" },
    { routeName: "Login", routePath: "/login" }
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
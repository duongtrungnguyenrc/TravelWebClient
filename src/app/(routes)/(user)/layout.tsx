import { Bottom, FloatingChat, NavBar } from "@/app/_components";
import { ReactNode } from "react";


const HomeLayout = ({ children } : { children: ReactNode }) => {
  return (
    <>
      <NavBar/>
          { children }
      <Bottom/>
      <FloatingChat/>
    </>
  );
};
export default HomeLayout;
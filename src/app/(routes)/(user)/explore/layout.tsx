import { Benefit, DefaultHero } from "@/app/_components";
import { ReactNode } from "react";

const Layout = ({ children } : { children: ReactNode }) => {
  return (
    <>
        <DefaultHero/>
        {children}
        {/* <Benefit/> */}
    </>
  );
};
export default Layout;
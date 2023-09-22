import { LoginGallery } from "@/app/_components";
import { ReactNode } from "react";
import "./styles.scss";


const AuthLayout = ({ children } : { children: ReactNode }) => {
  
  return (
    <div className="container login-container">
        <section className="left-container">
          <LoginGallery/>
        </section>
        <section className="right-container">
          { children }
        </section>
    </div>
  );
};
export default AuthLayout;
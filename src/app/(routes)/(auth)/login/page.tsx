// Produced by Duong Trung Nguyen

'use client'

import LoginForm from "@/app/_components/LoginForm/LoginForm";
import { authServices } from "@/app/_services";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {  
  const router = useRouter();

  const signIn = async (email: string, password: string, isRemember: boolean) => {
    const response = await authServices.signIn(email, password);
    if(response.status) {            
        if(isRemember) {
          localStorage.setItem("saved_email", email);
          localStorage.setItem("saved_password", password);
        }
        router.push("/");
        return true;
    }
    else {
        toast.error(response.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return false;
    }
  }

  return (
    <LoginForm signIn={signIn}/>
  );
};
export default LoginPage;
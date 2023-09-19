// Produced by Duong Trung Nguyen
'use client'

import RegisterForm from "@/app/_components/RegisterForm/RegisterForm";
import { authServices } from "@/app/_services";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();

  const register = async (fullName: string, email: string, phone: string, password: string, isRemember: boolean) => {
    const response = await authServices.signUp(fullName, email, phone, password);
      if(response.status) {            
          if(isRemember) {
              localStorage.setItem("saved_email", email);
              localStorage.setItem("saved_password", password);
          }
          toast.success(response.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
          });
          router.push("/auth/login");
      }
      else {
          toast.error(response.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
          });
      }
  }
  return (
    <RegisterForm handleRegister={register}/>
  );
};
export default Register;
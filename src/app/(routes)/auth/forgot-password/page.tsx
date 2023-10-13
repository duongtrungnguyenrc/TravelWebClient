// Produced by Duong Trung Nguyen

'use client'

import { ForgotPasswordForm } from "@/app/_components";
import { userServices } from "@/app/_services";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {

  const getUserByEmail = async (email: string) => {
    const response = await userServices.getUserByEmail(email);
    if(response.status) {            
        return response.data;
    }
    else {
        toast.error(response.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return null;
    }
  }
  return (
    <ForgotPasswordForm submitAction={getUserByEmail}/>
  );
};
export default ForgotPasswordPage;
import request from "./requestServices";
import responseServices from "./responseServices";
import { AxiosError, AxiosResponse } from "axios";

const authServices = {
    signIn: async (email : string, password : string) => {        
        try {
            const response : AxiosResponse = await request.post("auth/signin", { email, password });            
            localStorage.setItem("access_token", response.data.data.accessToken);
            localStorage.setItem("access_role", response.data.data.roles);
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    signUp: async (fullName: string, email: string, phone: string, password: string, address: string = "address default") => {
        try {            
            const response: AxiosResponse = await request.post("auth/signup", { fullName, email, phone, password, address });            
            return responseServices.success(response);

        } catch (error) {
           return responseServices.error(error as AxiosError);
        }
    },
    restorePasswordRequest: async (email: string) => {
        try {            
            const response: AxiosResponse = await request.post("/reset-password/send-mail", { email });            
            return responseServices.success(response);

        } catch (error) {
           return responseServices.error(error as AxiosError);
        }
    },
    restorePassword: async (newPassword: string, token: string | null) => {
        try {            
            const response: AxiosResponse = await request.post(`/reset-password/change/${token}`, { newPassword });            
            return responseServices.success(response);

        } catch (error) {
           return responseServices.error(error as AxiosError);
        }
    },
    checkLogin: async () => {
        try {            
            const token = localStorage.getItem("access_token");   
            const response: AxiosResponse = await request.post(`/auth/verify`, { token });     
            return responseServices.success(response);

        } catch (error) {
           return responseServices.error(error as AxiosError);
        }
    },
    activate: async (token: string, activateCode : string) => {
        try {            
            const response: AxiosResponse = await request.post(`/auth/activate`, { token, activateCode });     
            return responseServices.success(response);

        } catch (error) {
           return responseServices.error(error as AxiosError);
        }
    }
}

export default authServices;
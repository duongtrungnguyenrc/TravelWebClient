import request from "./requestServices";
import { Response } from "../_types";
import { AxiosError, AxiosResponse } from "axios";

const authServices = {
    signIn: async (email : string, password : string) => {        
        try {
            const response = await request.post("auth/signin", { email, password });            
            localStorage.setItem("access_token", response.data.data.accessToken);
            localStorage.setItem("access_role", response.data.data.roles);
            return {
                code: response.status, 
                status: true, 
                message: response.data.message, 
                data: response.data.data
            } as Response;
        } catch (error) {
            const response = (error as AxiosError);
            return {
                code: response.response?.status, 
                status: false, 
                message: (response.response?.data as Response).message, 
                data: (response.response?.data as Response).data
            } as Response;
        }
    },
    signUp: async (fullName: string, email: string, phone: string, password: string, address: string = "address default") => {
        try {            
            const response: AxiosResponse = await request.post("auth/signup", { fullName, email, phone, password, address });            
            return {
                code: response.status, 
                status: true, 
                message: response.data.message, 
                data: response.data.data
            } as Response;

        } catch (error) {
            const response: AxiosError = (error as AxiosError);
            return {
                code: response.response?.status, 
                status: false, 
                message: (response.response?.data as Response).message, 
                data: (response.response?.data as Response).data
            } as Response;
        }
    },
    restorePasswordRequest: async (email: string) => {
        try {            
            const response: AxiosResponse = await request.post("/reset-password/send-mail", { email });            
            return {
                code: response.status, 
                status: true, 
                message: response.data.message, 
                data: response.data.data
            } as Response;

        } catch (error) {
            const response: AxiosError = (error as AxiosError);
            return {
                code: response.response?.status, 
                status: false, 
                message: (response.response?.data as Response).message, 
                data: (response.response?.data as Response).data
            } as Response;
        }
    },
    restorePassword: async (newPassword: string, token: string | null) => {
        try {            
            const response: AxiosResponse = await request.post(`/reset-password/change/${token}`, { newPassword });            
            return {
                code: response.status, 
                status: true, 
                message: response.data.message, 
                data: response.data.data
            } as Response;

        } catch (error) {
            const response: AxiosError = (error as AxiosError);
            return {
                code: response.response?.status, 
                status: false, 
                message: (response.response?.data as Response).message, 
                data: (response.response?.data as Response).data
            } as Response;
        }
    }
}

export default authServices;
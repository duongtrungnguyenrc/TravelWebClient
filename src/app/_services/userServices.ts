import { AxiosError, AxiosResponse } from "axios";
import request from "./requestServices";
import { Response } from "../_types";
import responseServices from "./responseServices";


const userServices = {
    getUserByEmail: async (email: string) => {
        try {
            const response: AxiosResponse = await request.post(`/user/get-by-email`, {email});                                    
            return {
                code: response.status, 
                status: true, 
                message: response.data.message, 
                data: response.data.data
            } as Response;
        } catch (err) {
            const error: AxiosError = (err as AxiosError);
            
            return {
                code: error.response?.status, 
                status: false, 
                message: (error.response?.data as Response)?.message, 
                data: (error.response?.data as Response)?.data
            } as Response;
        }
    },
    getAccessHistory: async (accessToken: string) => {
        try {
            const response : AxiosResponse = await request.get("user/login-history", {
                headers: {
                    Authorization: accessToken
                }
            });            
            return responseServices.success(response);

        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    getBookingHistory: async (accessToken: string) => {
        try {
            const response : AxiosResponse = await request.get("/order", {
                headers: {
                    Authorization: accessToken
                }
            });            
            return responseServices.success(response);

        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}

export default userServices;
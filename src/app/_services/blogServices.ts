import { AxiosError, AxiosResponse } from "axios";
import request from "./requestServices";
import { Response } from "../_types";

const blogServices = {
    getAllblogs: async () => {
        try {
            const response: AxiosResponse = await request.get("/blog/all");
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
    } 
}

export default blogServices;
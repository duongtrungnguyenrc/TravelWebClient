import request from "./requestServices";
import { Response } from "../_types";
import { AxiosError, AxiosResponse } from "axios";


const tourServies = {
    getAllTours: async (page: number, limit: number) => {        
        try {
            const response: AxiosResponse = await request.get(`/tour/all?page=${[page]}&limit=${limit}`);                                    
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
    getToursByType: async (type: string) => {
        try {
            const response = await request.get(`/tour/type?type=${type}`);
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
export default tourServies;
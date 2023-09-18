import request from "./requestServices";
import { Response } from "../_types";
import { AxiosError, AxiosResponse } from "axios";


const tourServies = {
    getAllTours: async () => {        
        try {
            const response: AxiosResponse = await request.get("/tour/all");                        
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
export default tourServies;
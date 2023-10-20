import { Response } from "../_types";
import { AxiosError, AxiosResponse } from "axios";

const responseServices = {
    success: (response : AxiosResponse) => {
        return {
            code: response.status, 
            status: true, 
            message: response.data.message, 
            data: response.data.data
        } as Response;
    },
    error: (error: AxiosError) => {
        const response = (error as AxiosError);
        return {
            code: response.response?.status, 
            status: false, 
            message: (response.response?.data as Response).message, 
            data: (response.response?.data as Response).data
        } as Response;
    }
}

export default responseServices;
import request from "./requestServices";
import { AxiosError, AxiosResponse } from "axios";
import responseServices from "./responseServices";


const tourServies = {
    getAllTours: async (page: number, limit: number) => {        
        try {
            const response: AxiosResponse = await request.get(`/tour/all?page=${[page]}&limit=${limit}`);                                    
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    getToursByType: async (type: string) => {
        try {
            const response = await request.get(`/tour/type?type=${type}`);
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    getTourById: async (id: string) => {
        try {
            const response = await request.get(`/tour/detail?id=${id}`);
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}
export default tourServies;
import request from "./requestServices";
import { AxiosError, AxiosResponse } from "axios";
import responseServices from "./responseServices";
import { RatingRequest, UpdateRatingRequest } from "../_types";


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
    },
    getTourRating: async (id: string, page: number, limit: number, accessToken?: string) => {
        try {
            const response = await request.get(`/rate/${id}?page=${page}&limit=${limit}`, {
                headers: {
                    Authorization: accessToken,
                }
            });
            return responseServices.success(response);
        }
        catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    addRating: async (accessToken: string, payload: RatingRequest) => {
        try {
            const response = await request.post(`/rate`, payload, {
                headers: {
                    Authorization: accessToken,
                }
            });
            return responseServices.success(response);
        }
        catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    updateRating: async (accessToken: string, payload: UpdateRatingRequest) => {
        try {
            const response = await request.post(`/rate/update`, payload, {
                headers: {
                    Authorization: accessToken,
                }
            });
            return responseServices.success(response);
        }
        catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    removeRating: async (accessToken: string, id: number) => {
        try {
            const response = await request.post(`/rate/delete/${id}` , null, {
                headers: {
                    Authorization: accessToken,
                }
            });
            return responseServices.success(response);
        }
        catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}
export default tourServies;
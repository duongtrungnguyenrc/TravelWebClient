import request from "./requestServices";
import { AxiosError, AxiosResponse } from "axios";
import responseServices from "./responseServices";
import { CreateTourRequest, RatingRequest, TourFilter, UpdateRatingRequest } from "../_types";


const tourServies = {
    getAllTours: async (page: number, limit: number) => {        
        try {
            const response: AxiosResponse = await request.get(`/tour/all?page=${[page]}&limit=${limit}`);                                    
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    adminGetAll: async (page: number, limit: number, accessToken?: string) => {        
        try {
            const response: AxiosResponse = await request.get(`admin/tour/all?page=${[page]}&limit=${limit}`, {
                headers: {
                    Authorization: accessToken,
                }
            });                                    
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
    getTourById: async (id: string, accessToken?: string) => {
        try {
            const response = await request.get(`/tour/detail?id=${id}`, {
                headers: {
                    Authorization: accessToken,
                }
            });
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
    },
    search: async (page: number, limit: number, query: string) => {
        try {
            const response = await request.get(`/tour/search?page=${page}&limit=${limit}&key=${query}`);
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    filter: async (page: number, limit: number, filter: TourFilter) => {        
        try {
            const response: AxiosResponse = await request.post(`/tour/filter`, { page, limit, ...filter });                                    
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    delete: async (id: number, accessToken: string) => {
        try {
            const response: AxiosResponse = await request.post(`admin/tour/delete/${id}`, null, {
                headers: {
                    Authorization: accessToken,
                }
            });                                    
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    create: async (data: CreateTourRequest, accessToken: string) => {
        
        const payload = new FormData();
        payload.append("tour", new Blob([JSON.stringify(data.tour)], {type: "application/json"}));

        if(data.images.length > 0) {
            data.images.forEach((image) => {
                image != null ? payload.append("images", image) : payload.append("images", new Blob([JSON.stringify(null)]));
            });
        }
        else {
            payload.append("images", new Blob([JSON.stringify(null)]));
        }

        try {
            const response: AxiosResponse = await request.post(`admin/tour/add`, payload, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    Authorization: accessToken,
                }
            });                                    
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    getPopularDestinations: async () => {
        try {
            const response: AxiosResponse = await request.get(`/tour/top-destination`);                                    
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}
export default tourServies;
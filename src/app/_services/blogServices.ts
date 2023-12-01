import { AxiosError, AxiosResponse } from "axios";
import request from "./requestServices";
import responseServices from "./responseServices";
import { CreateBlogPostRequest } from "../_types";

const blogServices = {
    get: async (page?: number, limit?: number, id?: number) => {
        try {
            if(id) {
                const response: AxiosResponse = await request.get(`/blog/${id}`);
                return responseServices.success(response)
            }
            else {
                const response: AxiosResponse = await request.get(`/blog/all` + ((page && limit) ? `?page=${page}&limit=${limit}` : ""));
                return responseServices.success(response)
            }

        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    create: async (postData: CreateBlogPostRequest, images: {src: string, name: string, resource: File | null}[], accessToken: string) => {
        try {
            const data = new FormData();
            data.append("blog", new Blob([JSON.stringify(postData)], {type: "application/json"}));

            images.forEach((image) => {
                image.resource != null ? data.append(`images`, image.resource) : data.append(`images`, new Blob([JSON.stringify(null)]));
            });

            const response: AxiosResponse = await request.post(`/admin/blog/add`, data, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    Authorization: accessToken,
                },
            });
            return responseServices.success(response);

        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}

export default blogServices;
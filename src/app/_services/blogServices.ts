import { AxiosError, AxiosResponse } from "axios";
import request from "./requestServices";
import responseServices from "./responseServices";

const blogServices = {
    getAllPosts: async (page: number, limit: number) => {
        try {
            const response: AxiosResponse = await request.get(`/blog/all?page=${page}&limit=${limit}`);
            return responseServices.success(response);

        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },

}

export default blogServices;
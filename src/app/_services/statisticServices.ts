// Produced by Duong Trung Nguyen

import { AxiosError } from "axios";
import request from "./requestServices";
import responseServices from "./responseServices";

const statisticServices = {
    get: async (accessToken?: string) => {
        try {
            const response = await request.get(`/admin/statistic`, (accessToken ? {
                headers: {
                    Authorization: accessToken,
                }
            } : {}));
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
}

export default statisticServices;
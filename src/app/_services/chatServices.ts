import responseServices from "./responseServices";
import request from "./requestServices";
import { AxiosError } from "axios";

const chatServices = {
    get: async (accessToken: string) => {
        try {
            const response = await request.get(`/admin/message/rooms`, (accessToken ? {
                headers: {
                    Authorization: accessToken,
                }
            } : {}));
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}

export default chatServices;
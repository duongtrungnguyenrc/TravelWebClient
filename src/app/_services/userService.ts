import request from "./requestServices";
import responseServices from "./responseServices";
import { AxiosError, AxiosResponse } from "axios";

const userService = {
    getAccessHistory: async (accessToken: string) => {
        try {
            const response : AxiosResponse = await request.get("auth/signin", {
                headers: {
                    Authorization: accessToken
                }
            });            
            return responseServices.success(response);

        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    }
}

export default userService;
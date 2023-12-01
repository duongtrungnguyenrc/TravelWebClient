import { AxiosError } from "axios";
import NewOrderRequest from "../_types/request/NewOrderRequest"
import request from "./requestServices";
import responseServices from "./responseServices";

const orderServices = {
    createOrder: async (payload: NewOrderRequest, accessToken?: string) => {
        try {
            const response = await request.post("/payment/create_payment", payload, (accessToken ? {
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

export default orderServices;
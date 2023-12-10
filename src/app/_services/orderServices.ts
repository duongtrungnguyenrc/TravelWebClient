import { AxiosError } from "axios";
import NewOrderRequest from "../_types/request/NewOrderRequest"
import request from "./requestServices";
import responseServices from "./responseServices";
import { UpdateOrderStatusRequest } from "../_types";

const orderServices = {
    get: async (page: number, limit: number, accessToken?: string) => {
        try {
            const response = await request.get(`/admin/order/all?page=${page}&limit=${limit}`, (accessToken ? {
                headers: {
                    Authorization: accessToken,
                }
            } : {}));
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
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
    },
    updateStatus: async (payload: UpdateOrderStatusRequest, accessToken?: string) => {
        try {
            const response = await request.post("/admin/order", payload, (accessToken ? {
                headers: {
                    Authorization: accessToken,
                }
            } : {}));
            return responseServices.success(response);
        } catch (error) {
            return responseServices.error(error as AxiosError);
        }
    },
    cancel: async (id: number, accessToken?: string) => {
        try {
            const response = await request.post(`/order/cancel/${id}`, null, (accessToken ? {
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
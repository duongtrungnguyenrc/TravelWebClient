import { Order } from "..";

export default interface AllOrdersResponse {
  pages: number;
  orders: Order[]
}


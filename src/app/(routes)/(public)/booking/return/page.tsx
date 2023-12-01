// Produced by Duong Trung Nguyen

'use client'

import { Loading } from "@/app/_components";
import { set } from "@/app/_context/CreateOrderSessionSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ReturnPage = ({ searchParams } : { searchParams: { orderId: string, status: string, sessionToken: string } }) => {
  const router = useRouter()
  const dispath = useDispatch();

  dispath(set(
    {
      orderId: searchParams.orderId,
      status: searchParams.status,
      sessionToken: searchParams.sessionToken,
    }
  ));

  router.back();
  return <Loading/>
};
export default ReturnPage;
// Produced by Duong Trung Nguyen

import { BookingGroup } from "@/app/_components";
import { tourServices } from "@/app/_services";
import { Tour } from "@/app/_types";

const VerifyPage = async ({ params, searchParams } : { params : { id: string }, searchParams: { date: number, sessionToken: string, status: string, orderId: string } }) => {
  const response = await tourServices.getTourById(params.id);

  const result = {
    sessionToken: searchParams.sessionToken, 
    status: searchParams.status, 
    orderId: searchParams.orderId
  }
  
  return <BookingGroup tourDateId={searchParams.date} tour={(response.data as Tour)} sessionResultInfo={result}/>;
};
export default VerifyPage;
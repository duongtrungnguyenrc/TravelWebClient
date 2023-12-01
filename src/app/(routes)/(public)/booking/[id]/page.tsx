import { BookingGroup } from "@/app/_components";
import { tourServices } from "@/app/_services";
import { Tour } from "@/app/_types";
const VerifyPage = async ({ params, searchParams } : { params : { id: string }, searchParams: { date: number } }) => {
  const response = await tourServices.getTourById(params.id);
  
  return <BookingGroup tourDateId={searchParams.date} tour={(response.data as Tour)}/>;
};
export default VerifyPage;
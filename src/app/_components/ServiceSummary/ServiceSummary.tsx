// Produced by Duong Trung Nguyen

'use client'

import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorIcon from "@mui/icons-material/Error";
import { TourDate } from "@/app/_types";
import "./styles.scss";


const ServiceSummary = ({ travelDates } : { travelDates :  TourDate[] | undefined }) => {

  return (
    <div className="p-4 position-sticky border" style={{top: 90}}>
        <Typography variant="h5" fontWeight="bolder">
            <b>Chọn ngày khởi hành</b>
        </Typography>
        <form method="post" className="mt-4">  
            <div className="trip-date-table mt-4">
                <div className="table-head">
                    <Typography></Typography>
                    <Typography><b>NGÀY KHỞI HÀNH</b></Typography>
                    <Typography><b>GIÁ KHỞI ĐIỂM</b></Typography>
                    <Typography><b>LOẠI TOUR</b></Typography>
                </div>
                {
                    travelDates && travelDates?.length > 0 ?
                    <ul className="table-body list-unstyled mt-2">
                        {
                            travelDates?.map((cell) => (
                                <li key={ cell.departDate } className="table-cell">
                                    <span className="flex-center"><input type="radio" name="date" required/></span>
                                    <span><b>{cell.departDate}</b></span>
                                    <span>{cell.adultPrice.toLocaleString("en")} VNĐ</span>
                                    <span>{cell.type}</span>
                                </li>
                            )) 
                        }
                    </ul> 
                    : 
                    <div className="w-100 h-100 d-flex flex-center table-body mt-2">
                        Hiện chưa có lịch trình cho chuyến đi này
                    </div>
                }
            </div>

            <div className="d-flex justify-content-end">
                <Typography variant="body2" color="red" className="d-none align-items-center mr-3">
                    <ErrorIcon fontSize="small" className="mr-1"/> Vui lòng chọn ngày khởi hành
                </Typography>
                <Button href="/booking/verify" disabled={!(travelDates && travelDates?.length > 0)} endIcon={<ChevronRightIcon/>} type="submit">Đặt ngay</Button>
            </div>
        </form>
    </div>
  );
};
export default ServiceSummary;
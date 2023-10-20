// Produced by Duong Trung Nguyen

'use client'

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import { TourDate } from "@/app/_types";
import "./styles.scss";


const ServiceSummary = ({ travelDates } : { travelDates :  TourDate[] | undefined }) => {

    const [age, setAge] = useState("");


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
      };

  return (
    <div className="p-4 position-sticky border" style={{top: 90}}>
        <Typography variant="h5" fontWeight="bolder">
            <b>Chọn ngày khởi hành</b>
        </Typography>
        <form method="post" className="mt-4">
            <Stack direction="row" alignItems="center" spacing={3}>
                <Typography variant="h5" noWrap width="30%" sx={{fontSize: "1rem"}}>
                <b>Khởi hành từ:</b>
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120, width: "100%"}} size="medium">
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select className="rounded-0" value={age} onChange={handleChange} label="Nhà riêng">
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
            </Stack>
            
            <div className="trip-date-table">
                <div className="table-head">
                    <Typography></Typography>
                    <Typography><b>NGÀY KHỞI HÀNH</b></Typography>
                    <Typography><b>GIÁ KHỞI ĐIỂM</b></Typography>
                    <Typography><b>LOẠI TOUR</b></Typography>
                </div>
                <ul className="table-body list-unstyled mt-2">
                    {
                        travelDates?.map((cell) => (
                            <li key={ cell.departDate } className="table-cell">
                                <span className="flex-center"><input type="radio" name="date" required/></span>
                                <span><b>{cell.departDate}</b></span>
                                <span>{cell.adultPrice} VNĐ</span>
                                <span>{cell.type}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="d-flex justify-content-end">
                <Typography variant="body2" color="red" className="d-flex align-items-center mr-3">
                <ErrorIcon fontSize="small" className="mr-1"/> Vui lòng chọn ngày khởi hành
                </Typography>
                <Button endIcon={<ChevronRightIcon/>} type="submit">Đặt ngay</Button>
            </div>
        </form>
    </div>
  );
};
export default ServiceSummary;
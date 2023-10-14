'use client'

import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import { TourDate } from "@/app/_types";


const ServiceSummary = ({ travelDates } : { travelDates :  TourDate[] }) => {

    const [age, setAge] = useState("");


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
      };

  return (
    <div className="p-4 position-sticky border" style={{top: 90}}>
        <Typography variant="h5" fontWeight="bolder">
        <b>Select your trip date</b>
        </Typography>
        <form action="" className="mt-4">
        <Stack direction="row" alignItems="center" spacing={3}>
            <Typography variant="h5" noWrap width="30%" sx={{fontSize: "1rem"}}>
            <b>Start from:</b>
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120, width: "100%"}} size="medium">
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select className="rounded-0" value={age} onChange={handleChange} label="age">
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
        </Stack>

        <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell><b>DATES</b></TableCell>
                <TableCell><b>PRICE</b></TableCell>
                <TableCell><b>TRIP TYPE</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody sx={{maxHeight: 400, overflow: "scroll" }}>
            {travelDates.map((date, index) => (
                <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }, height: "max-content", "&:nth-child(odd)" : {background: "#f0f1f7"} }}
                >
                    <TableCell><input type="radio" name="date" required/></TableCell>
                    <TableCell><b>{date.departDate}</b></TableCell>
                    <TableCell>{date.adultPrice} VNĐ</TableCell>
                    <TableCell>{date.type}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>

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
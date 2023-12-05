// Produced by Duong Trung Nguyen

'use client'

import { statisticServices } from "@/app/_services";
import {
   Chart as ChartJS,
   registerables
 } from 'chart.js'
import { useEffect, useState } from "react";
import "./styles.scss";
import { ProfitStatisticResponse } from "@/app/_types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_context/store";
import { Typography } from "@mui/material";


ChartJS.register(
  ...registerables
)

const ProfitChart = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [ statisticsData, setStatisticsData ] = useState<ProfitStatisticResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await statisticServices.get(currentUser.accessToken);

            if(response.status) {
                setStatisticsData(response.data as ProfitStatisticResponse);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="statistic-container pb-1">
            <div className="statistic-item w-100">
                <div className="d-flex">
                    <Typography variant="body1">
                        Tổng doanh thu:
                    </Typography>
                </div>
                <div className="statistic-value mt-3">
                    { statisticsData?.profit.toLocaleString("vn") } VNĐ
                </div>
            </div>
            <div className="statistic-group">
                <div className="statistic-item">
                    <div className="d-flex">
                        <Typography variant="body1">
                            Lượt đặt tour:
                        </Typography>
                    </div>
                    <div className="statistic-value mt-3">
                        { statisticsData?.orderQuantity }
                    </div>
                </div>
                <div className="statistic-item">
                    <div className="d-flex">
                        <Typography variant="body1">
                            Lượng khách hàng:
                        </Typography>
                    </div>
                    <div className="statistic-value mt-3">
                        { statisticsData?.customerQuantity }
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProfitChart;
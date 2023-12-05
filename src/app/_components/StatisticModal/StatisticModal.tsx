// Produced by Duong Trung Nguyen

'use client';

import { RootState } from '@/app/_context/store';
import { statisticServices } from '@/app/_services';
import { ProfitStatisticResponse } from '@/app/_types';
import { Box, Divider, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Chart as ChartJS, ChartOptions, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './styles.scss';

ChartJS.register(...registerables);

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    border: 'none',
};

const StatisticModal = ({ isOpen, setClose }: { isOpen: boolean; setClose: Function }) => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [statisticsData, setStatisticsData] = useState<ProfitStatisticResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await statisticServices.get(currentUser.accessToken);

            if (response.status) {
                setStatisticsData(response.data as ProfitStatisticResponse);
            }
        };

        fetchData();
    }, []);

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Tháng trước',
                data: statisticsData?.statistic?.lastWeek,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(205, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(205, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Tháng này',
                data: statisticsData?.statistic?.thisWeek,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    console.log(data);

    const options: ChartOptions<'bar'> = {
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Biểu đồ thống kê doanh thu',
            },
        },
    };

    return (
        <Modal
            open={isOpen}
            onClose={() => setClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <strong>
                    Thống kê doanh thu:
                    </strong>
                </Typography>
                <Divider/>
                <ul className="list-unstyled mt-3">
                    <li className="d-flex justify-content-between py-2">
                        <strong>
                            Tổng doanh thu đạt được:
                        </strong>
                        { statisticsData?.profit.toLocaleString("vn") }
                    </li>
                    <li className="d-flex justify-content-between py-2">
                        <strong>
                            Doanh thu tháng này:
                        </strong>
                        { statisticsData?.monthAverage.toLocaleString("vn") }
                    </li>
                    <li className="d-flex justify-content-between py-2">
                        <strong>
                            Lượng khách hàng:
                        </strong>
                        { statisticsData?.customerQuantity }
                    </li>
                    <li className="d-flex justify-content-between py-2">
                        <strong>
                            Số lượng đơn hàng:
                        </strong>
                        { statisticsData?.orderQuantity }
                    </li>
                </ul>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Bar height="100%" data={data} options={options} />
                </Typography>
            </Box>
        </Modal>
    );
};
export default StatisticModal;

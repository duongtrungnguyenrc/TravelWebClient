// Produced by Duong Trung Nguyen

'use client';

import './styles.scss';
import { useEffect, useState } from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { Avatar, Button, Divider, Pagination, Radio } from '@mui/material';
import { AllOrdersResponse } from '@/app/_types';
import { orderServices } from '@/app/_services';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import { Skeleton, StatisticModal } from '..';

const OrderList = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [orderData, setOrderData] = useState<AllOrdersResponse>();
    const [selectedItem, setSelectedItem] = useState(0);
    const [page, setPage] = useState(1);
    const [openStatistic, setOpenStatistic] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await orderServices.get(page, 10, currentUser.accessToken);

            if (response.status) {
                setOrderData(response.data as AllOrdersResponse);
            }
        };
        fetchData();
    }, [page]);

    const selectedOrder = orderData?.orders[selectedItem];

    return (
        <div className="order-list-container row px-3">
            <StatisticModal isOpen={openStatistic} setClose={setOpenStatistic} />
            <div className="col-9">
                <div className="d-flex left-site">
                    <div className="col-3 pl-0 location-container">
                        <Skeleton variant="rounded-rectangular" className="location-skeleton-wrapper">
                            <GoogleMapsEmbed
                                apiKey="AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY"
                                mode="place"
                                q={orderData?.orders[selectedItem]?.tour?.location || ''}
                                allowfullscreen
                                style="width: 100%; height: 450px; border-radius: 20px"
                                language="vi"
                                loading="lazy"
                            />
                        </Skeleton>
                    </div>
                    <div className="col-9 order-list-wrapper">
                        <div className="order-list">
                            <table>
                                <thead>
                                    <th></th>
                                    <th>ID</th>
                                    <th>TOUR NAME</th>
                                    <th>CUSTOMER</th>
                                    <th>STATUS</th>
                                </thead>
                                <tbody>
                                    {orderData?.orders.map((order, index) => {
                                        return (
                                            <tr className="data-row">
                                                <td>
                                                    <Radio
                                                        color="info"
                                                        value={index}
                                                        checked={selectedItem === index}
                                                        onChange={() => setSelectedItem(index)}
                                                    />
                                                </td>
                                                <td>{order.id} </td>
                                                <td>{order.tour.name}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <Avatar />
                                                        {order.contactInfo.customerFullName}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span
                                                        className={
                                                            'status ' +
                                                            (order.status.toLowerCase() === 'đã thanh toán'
                                                                ? 'complete'
                                                                : 'pending')
                                                        }>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex-center mt-2">
                            <Pagination
                                count={orderData?.pages}
                                onChange={(_e, page) => {
                                    page >= 0 && setPage(page);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3 pl-0">
                <div className="order-detail mt-1">
                    <img className="order-thumbnail" src={selectedOrder?.tour?.img} alt="" />
                    <Divider className="my-2" />
                    <ul className="detail-list">
                        <li>
                            <b>Tổng chi phí:</b>
                            <span>{selectedOrder?.totalPrice.toLocaleString('vn')}</span>
                        </li>
                        <li>
                            <b>Trạng thái:</b>
                            <span>{selectedOrder?.status}</span>
                        </li>
                        <li>
                            <b>Ngày đặt:</b>
                            <span>{selectedOrder?.orderDate}</span>
                        </li>
                        <li>
                            <b>Số lượng người lớn:</b>
                            <span>{selectedOrder?.adults}</span>
                        </li>
                        <li>
                            <b>Số lượng trẻ em:</b>
                            <span>{selectedOrder?.children}</span>
                        </li>
                        <Divider className="my-2" />
                        <li>
                            <b>Tour:</b>
                            <span>{selectedOrder?.tour?.name}</span>
                        </li>
                        <li>
                            <b>Xuất phát:</b>
                            <span>{selectedOrder?.tour?.depart}</span>
                        </li>
                        <li>
                            <b>Điểm đến:</b>
                            <span>{selectedOrder?.tour?.location}</span>
                        </li>
                        <li>
                            <b>Hạng vé:</b>
                            <span>{selectedOrder?.tour?.type.toUpperCase()}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 flex-center py-3 gap-2">
                <Button variant="outlined">Hủy</Button>
                <Button variant="outlined" onClick={() => setOpenStatistic(true)}>
                    Xem thống kê chi tiết
                </Button>
                <Button variant="outlined">Hủy</Button>
            </div>
        </div>
    );
};
export default OrderList;

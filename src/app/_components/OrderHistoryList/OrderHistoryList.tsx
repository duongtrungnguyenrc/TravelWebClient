// Produced by Duong Trung Nguyen

'use client';

import { useEffect, useState } from 'react';
import './styles.scss';
import { Order } from '@/app/_types';
import { userServices } from '@/app/_services';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';

const OrderHistory = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [orderData, setOrderData] = useState<Order[]>([]);
    const [selectedItem, setSelectedItem] = useState(0);

    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await userServices.getBookingHistory(currentUser.accessToken);

            if (response.status) {
                setOrderData(response.data as Order[]);
            }
        };
        fetchOrderData();
    }, []);

    return (
        <div className="order-history-list">
            <table>
                <thead>
                    <th>ID</th>
                    <th>TÊN DỊCH VỤ</th>
                    <th>NGÀY ĐẶT</th>
                    <th>TỔNG TIỀN</th>
                    <th>TRẠNG THÁI</th>
                </thead>
                <tbody>
                    {orderData?.map((order) => {
                        return (
                            <tr key={order.id + order.tour.name} className="data-row">
                                <td>{order.id} </td>
                                <td className="d-flex align-items-center gap-1">
                                    <img
                                        className="rounded"
                                        src={order.tour.img}
                                        alt={order.tour.name}
                                        width={80}
                                        height={50}
                                    />
                                    {order.tour.name}
                                </td>
                                <td>{order.orderDate}</td>
                                <td>{order.totalPrice.toLocaleString('vn')} VNĐ</td>
                                <td>
                                    <span
                                        className={
                                            'status ' +
                                            (order.status.toLowerCase() === 'đã thanh toán' ? 'complete' : 'pending')
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
    );
};
export default OrderHistory;

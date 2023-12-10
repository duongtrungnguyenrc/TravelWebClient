// Produced by Duong Trung Nguyen

'use client';

import { useEffect, useState } from 'react';
import './styles.scss';
import { Order } from '@/app/_types';
import { orderServices, userServices } from '@/app/_services';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 3,
    bgcolor: 'background.paper',
    p: 4,
};

const OrderHistory = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [orderData, setOrderData] = useState<Order[]>([]);
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            const response = await userServices.getBookingHistory(currentUser.accessToken);

            if (response.status) {
                setOrderData(response.data as Order[]);
            }
        };
        fetchOrderData();
    }, []);

    const handleCalcelOrder = async () => {
        const response = await toast.promise(orderServices.cancel(open || -1, currentUser.accessToken), {
            pending: 'Đang xử lý...',
        });

        if (response.status) {
            toast.success('Hủy đơn đặt tour thành công');
            setOrderData((prevState) => {
                return prevState.map((order) => {
                    if (order.id === open) {
                        return {
                            ...order,
                            status: 'ĐÃ HỦY',
                        };
                    } else {
                        return order;
                    }
                });
            });
            setOpen(null);
        } else {
            toast.error(response.message);
        }
    };

    return (
        <div className="order-history-list">
            <Modal open={open != null} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Xác nhận hủy
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Bạn có muốn hủy đơn đặt tour?
                    </Typography>
                    <div className="d-flex gap-2 justify-content-end mt-3">
                        <Button variant="contained" color="error" onClick={() => setOpen(null)}>
                            Hủy
                        </Button>
                        <Button variant="contained" onClick={handleCalcelOrder}>
                            Xác nhận
                        </Button>
                    </div>
                </Box>
            </Modal>
            <table>
                <thead>
                    <th>ID</th>
                    <th>TÊN DỊCH VỤ</th>
                    <th>NGÀY ĐẶT</th>
                    <th>TỔNG TIỀN</th>
                    <th>TRẠNG THÁI</th>
                    <th></th>
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
                                            (order.status.trim().toLowerCase() === 'đã thanh toán'
                                                ? 'complete'
                                                : 'pending')
                                        }>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="d-flex flex-center gap-1 h-100">
                                    {order.status.trim().toLowerCase() !== 'đã hoàn thành' &&
                                        order.status.trim().toLowerCase() !== 'đã hủy' && (
                                            <Tooltip title="Hủy">
                                                <IconButton color="error" onClick={() => setOpen(order.id)}>
                                                    <HighlightOffIcon />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    {order.status.trim().toLowerCase() !== 'đã hoàn thành' && (
                                        <title title="Đặt lại">
                                            <IconButton href={`/explore/tour/${order.tour.id}`} className="nowrap">
                                                <AutorenewIcon />
                                            </IconButton>
                                        </title>
                                    )}
                                    <div></div>
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

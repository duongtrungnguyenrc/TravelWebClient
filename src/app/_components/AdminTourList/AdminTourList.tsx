// Produced by Duong Trung Nguyen

'use client';

import { Box, Button, Modal, Pagination, Radio, Typography } from '@mui/material';
import './styles.scss';
import { CreateTourModal, DatePicker, Skeleton } from '..';
import { AllToursResponse, Tour } from '@/app/_types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Grid } from '@mui/material';
import { tourServices } from '@/app/_services';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 3,
    width: 400,
    bgcolor: 'background.paper',
    overflow: 'hidden',
    p: 4,
};

const AdminTourList = ({ page }: { page: number }) => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [tourData, setTourData] = useState<AllToursResponse>();
    const [selectedItem, setSelectedItem] = useState(-1);
    const [isCreateTour, setIsCreateTour] = useState<boolean>(false);
    const [isUpdateTour, setIsUpdateTour] = useState<boolean>(false);
    const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState<boolean>(false);
    const router = useRouter();

    const fetchTours = async () => {
        const response = await tourServices.adminGetAll(page || 1, 20, currentUser.accessToken);
        if (response.status) {
            setTourData(response.data as AllToursResponse);
        }
    };

    useEffect(() => {
        fetchTours();
    }, [page]);

    const handlePaginationChange = (_e: ChangeEvent<unknown>, value: number) =>
        router.push(`/admin/trip?page=${value}`);

    const handleDeleteTour = async () => {
        const response = await toast.promise(tourServices.delete(selectedItem, currentUser.accessToken), {
            pending: 'Đang xử lý...',
        });

        if (response.status) {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
        setSelectedItem(-1);
        setOpenDeleteConfirmModal(false);
    };

    return (
        <Container maxWidth="xl">
            <Modal open={openDeleteConfirmModal} onClose={() => setOpenDeleteConfirmModal(false)}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Xác nhận xóa
                    </Typography>
                    <Typography id="modal-modal-description mt-2">Bạn có muốn xóa tour ${selectedItem}?</Typography>
                    <div className="d-flex mt-2 justify-content-end gap-1">
                        <Button variant="contained" onClick={() => setOpenDeleteConfirmModal(false)}>
                            Hủy
                        </Button>
                        <Button variant="contained" color="error" onClick={handleDeleteTour}>
                            Xóa
                        </Button>
                    </div>
                </Box>
            </Modal>
            <CreateTourModal isOpen={isCreateTour} dismiss={setIsCreateTour} accessToken={currentUser.accessToken} />
            <CreateTourModal isOpen={isUpdateTour} dismiss={setIsUpdateTour} accessToken={currentUser.accessToken} tour={tourData?.tours.find((tour) => tour.id === selectedItem)} />
            <Grid container spacing={2}>
                <Grid item xs={8} className="pl-0">
                    <div className="row dashboard-container">
                        <div className="dashboard-content-container">
                            <div className="dashboard-content-header">
                                <h2>Danh sách chuyến đi:</h2>
                                <div className="action-group d-flex gap-1">
                                    <Button variant="contained" onClick={() => setIsCreateTour(true)}>
                                        Thêm tour
                                    </Button>
                                    <Button variant="contained" disabled={selectedItem === -1} onClick={() => setIsUpdateTour(true)}>
                                        Chỉnh sửa
                                    </Button>
                                    <Button
                                        variant="contained"
                                        disabled={selectedItem === -1}
                                        color="error"
                                        onClick={() => setOpenDeleteConfirmModal(true)}>
                                        Xóa
                                    </Button>
                                </div>
                            </div>

                            <div className="tour-table">
                                <table>
                                    <thead>
                                        <th></th>
                                        <th>ID</th>
                                        <th>TÊN</th>
                                        <th>ĐIỂM ĐẾN</th>
                                        <th>DANH MỤC</th>
                                        <th>GIÁ</th>
                                    </thead>

                                    <tbody>
                                        {tourData && tourData.tours.length > 0 ? (
                                            tourData?.tours.map((tour) => {
                                                return (
                                                    <tr key={tour.id} className="data-row">
                                                        <td>
                                                            <Radio
                                                                size="small"
                                                                name="selected"
                                                                value={tour.id}
                                                                checked={selectedItem === tour.id}
                                                                onChange={() => setSelectedItem(tour.id)}
                                                            />
                                                        </td>
                                                        <td>
                                                            <span>#{tour.id}</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src={tour.img}
                                                                    className="dashboard-content-avatar"
                                                                    alt={tour.name}
                                                                />
                                                                <span>{tour.name}</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>{tour.location}</span>
                                                        </td>
                                                        <td>
                                                            <span>{tour.depart}</span>
                                                        </td>
                                                        <td>
                                                            <span>{tour.startFrom.toLocaleString('en')}đ</span>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <>
                                                {Array(20)
                                                    .fill(null)
                                                    .map((_item, index) => {
                                                        return (
                                                            <tr key={index} className="data-row">
                                                                <td>
                                                                    <Skeleton variant="text" width={20} />
                                                                </td>
                                                                <td>
                                                                    <Skeleton variant="text" width={20} />
                                                                </td>
                                                                <td>
                                                                    <div className="product-left">
                                                                        <Skeleton
                                                                            className="mr-3"
                                                                            variant="rectangular"
                                                                            width={80}
                                                                            height={50}
                                                                        />
                                                                        <Skeleton variant="text" width={190} />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Skeleton variant="text" width={50} />
                                                                </td>
                                                                <td>
                                                                    <Skeleton variant="text" width={50} />
                                                                </td>
                                                                <td>
                                                                    <Skeleton variant="text" width={50} />
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex-center">
                                <Pagination count={tourData?.pages} onChange={handlePaginationChange} />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Skeleton variant="rectangular" className="h-100 w-100">
                        <iframe
                            className="h-100 w-100"
                            src={`http://localhost:3000/explore/tour/${
                                tourData?.tours[selectedItem]?.id || tourData?.tours[0]?.id
                            }`}
                            frameBorder="0"></iframe>
                    </Skeleton>
                </Grid>
            </Grid>
        </Container>
    );
};
export default AdminTourList;

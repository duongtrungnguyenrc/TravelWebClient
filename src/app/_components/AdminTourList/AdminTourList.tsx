// Produced by Duong Trung Nguyen

'use client';

import { Pagination, Radio } from '@mui/material';
import './styles.scss';
import { Skeleton } from '..';
import { Tour } from '@/app/_types';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminTourList = ({ tours, pages }: { tours: Tour[]; pages: number }) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const router = useRouter();

    const handlePaginationChange = (_e: ChangeEvent<unknown>, value: number) =>
        router.push(`/admin/trip?page=${value}`);

    return (
        <div className="row dashboard-container px-3">
            <div className="dashboard-content-container">
                <div className="dashboard-content-header">
                    <h2>Danh sách chuyến đi:</h2>
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
                            {tours.length > 0 ? (
                                tours.map((tour, index) => {
                                    return (
                                        <tr key={tour.id} className="data-row">
                                            <td>
                                                <Radio
                                                    name="selected"
                                                    value={tour.id}
                                                    checked={selectedItem === index}
                                                    onChange={() => setSelectedItem(index)}
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
                                                            <Skeleton variant="text" width={150} />
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
                    <Pagination count={pages} onChange={handlePaginationChange} />
                </div>
            </div>
        </div>
    );
};
export default AdminTourList;

// Produced by Duong Trung Nguyen

'use client'

import { AccessHistoryResponse } from '@/app/_types';
import './styles.scss';
import { useEffect, useState } from 'react';
import { userServices } from '@/app/_services';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';

const AccessHistoryList = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [accessData, setAccessData] = useState<AccessHistoryResponse[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await userServices.getAccessHistory(currentUser.accessToken);

            if (response.status) {
                setAccessData(response.data as AccessHistoryResponse[]);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="access-history-container">
            <table>
                <thead>
                    <th>ID</th>
                    <th>THIẾT BỊ</th>
                    <th>PHẦN MỀM</th>
                    <th>ĐỊA CHỈ IP</th>
                    <th>THỜI GIAN</th>
                </thead>
                <tbody>
                    {accessData.map((record) => {
                        return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.userDevice}</td>
                                <td>Website <b>travelVN.com</b></td>
                                <td>{record.ipAddress}</td>
                                <td>{record.loggedDate}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default AccessHistoryList;

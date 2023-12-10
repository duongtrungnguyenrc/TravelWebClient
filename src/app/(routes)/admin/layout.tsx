// Produced by Duong Trung Nguyen

'use client';

import { AdminNavBar, AdminSideBar } from '@/app/_components';
import { RootState } from '@/app/_context/store';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const router = useRouter();
    useEffect(() => {
        if (!currentUser || !currentUser.user?.roles.includes('ROLE_ADMIN')) {
            router.push('/forbidden');
        }
    }, []);
    return (
        <div className="d-flex position-relative" style={{ height: '100vh' }}>
            <AdminSideBar />
            <div className="col-10 px-0 d-flex flex-column bg-light">
                <AdminNavBar />
                <div style={{ height: 'calc(100vh - 69px)', overflow: 'auto', padding: '1rem' }}>{children}</div>
            </div>
        </div>
    );
};
export default AdminLayout;

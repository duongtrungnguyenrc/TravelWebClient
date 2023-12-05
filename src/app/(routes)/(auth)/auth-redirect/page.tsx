// Produced by Duong Trung Nguyen

'use client';

import { useRouter } from 'next/navigation';
import { set } from '@/app/_context/userSlice';
import { LoginResponse, User } from '@/app/_types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AuthRedirectPage = ({ searchParams }: { searchParams: { token: string } }) => {
    const dispath = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const authResult: LoginResponse = JSON.parse(
            Buffer.from(searchParams.token, 'base64').toString('utf-8')
        ) as LoginResponse;

        dispath(
            set({
                accessToken: authResult.tokenType + ' ' + authResult.accessToken,
                user: {
                    id: authResult.id,
                    email: authResult.email,
                    address: authResult.address,
                    fullName: authResult.fullName,
                    phone: authResult.phone,
                    roles: authResult.roles,
                    avatar: authResult.avatar,
                    active: authResult.active,
                } as User,
            })
        );
        authResult.roles.includes('ROLE_ADMIN') ? router.push('/login') : router.push('/');
    }, []);

    return (
        <></>
    );
};
export default AuthRedirectPage;

// Produced by Duong Trung Nguyen

'use client'

import { Loading } from "@/app/_components";
import { set } from "@/app/_context/userSlice";
import { LoginResponse, User } from "@/app/_types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const AuthRedirectPage = ({ searchParams } : { searchParams: { token: string } }) => {

    const dispath = useDispatch();
    const router = useRouter();

    const authResult : LoginResponse = JSON.parse(Buffer.from(searchParams.token, 'base64').toString('utf-8')) as LoginResponse;

    dispath(
        set({
                accessToken: authResult.tokenType + " " + authResult.accessToken,
                user: {
                    id: authResult.id,
                    email: authResult.email,
                    address: authResult.address,
                    fullName: authResult.fullName,
                    phone: authResult.phone,
                    roles: authResult.roles,
                    active: authResult.active,
                } as User
            })
    );
    
    router.push("/login");

    return <Loading/>;
};
export default AuthRedirectPage;
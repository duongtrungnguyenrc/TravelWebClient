// Produced by Duong Trung Nguyen

'use client'

import { SettingSideBar } from '@/app/_components';
import { RootState } from '@/app/_context/store';
import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SettingLayout = ({ children } : { children: ReactNode }) => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const router = useRouter();

    useEffect(() => {        
        if(!currentUser.user) {  
            
            router.push("/login");
        }
    }, [])

    return (
        <Container
            maxWidth="xl"
            sx={{ display: 'flex', height: '100%', padding: '100px 0'}}>
            <Grid container>
                <Grid item xs={4} md={3} lg={3} sx={{position: "sticky", top: 10 }}>
                    <SettingSideBar/>
                </Grid>
                <Grid item xs={8} md={9} lg={9} className="pl-5">
                    { children }
                </Grid>
            </Grid>
        </Container>
    );
};
export default SettingLayout;

// Produced by Duong Trung Nguyen
// Produced by Duong Trung Nguyen

'use client'

import { SettingSideBar } from '@/app/_components';
import { Container, Grid } from '@mui/material';
import { ReactNode } from 'react';

const SettingLayout = ({ children } : { children: ReactNode }) => {
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

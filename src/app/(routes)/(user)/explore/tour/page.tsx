'use client'

import { ServiceDetailGallery } from '@/app/_components';
import { Breadcrumbs, Button, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';


const TourPage = () => {
    const params = useParams()
    console.log(params.tour);

    const breadcrumbs = [
      <Link key="1" color="inherit" href="/">
        MUI
      </Link>,
      <Link 
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>,
      <Typography key="3" color="text.primary">
        Breadcrumb
      </Typography>,
    ];
    
    return (
      <Container maxWidth="xl" sx={{paddingTop: "100px", paddingBottom: "20px"}}>
        <Stack direction="column" spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography variant='h2' component="h1" sx={{fontWeight: 900, fontSize: "2rem"}}>
                Germany, Italy & Switzerland
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} marginTop="10px">
                <Typography variant='body1'>
                  10 days, 4 cities
                </Typography>
                <Rating
                  value={5}
                  size='small'
                />
                <Typography variant='body1'>
                  765 votes
                </Typography>
              </Stack>
            </div>
            <Button variant="outlined" sx={{color: "#000", borderColor: "#000", borderRadius: 0, height: "max-content", padding: "15px", display: {xs: "none", md: "block", lg: "block"}}}>See dates and prices</Button>
          </Stack>
          <ServiceDetailGallery/>
        </Stack>
      </Container>
    );
};
export default TourPage;
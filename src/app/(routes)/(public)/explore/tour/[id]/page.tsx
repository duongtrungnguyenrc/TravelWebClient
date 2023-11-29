// Produced by Duong Trung Nguyen

"use client"

import { ServiceDetailGallery, ServiceOverview, ServiceReview, ServiceStepper, ServiceSummary, Skeleton } from "@/app/_components";
import { Box, Breadcrumbs, Button, Container, Grid, Rating,  Stack, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { useEffect, useState } from "react";
import { Tour} from "@/app/_types";
import { tourServices } from "@/app/_services";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_context/store";

const TourPage = ({ params }: { params: { id: string } }) => {
    const [ tourData, setTourData ] = useState<Tour>();    
    const [ activeTab, setActiveTab ] = useState<number>(0);

    const currentUser = useSelector(state => (state as RootState).user);

    useEffect(() => {
        fetchTour(params.id);
    }, []);
    
    const fetchTour = async (id: string) => {
      const response = await tourServices.getTourById(id, currentUser?.accessToken);
      if(response.status) {
        setTourData(response.data as Tour);
      }
    }
    
    return (
      <Container className="bg-white" maxWidth="xl" sx={{paddingTop: "100px", paddingBottom: "20px"}}>

        {/* Service detail gallery */}

        <Stack direction="column" spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link key="2" color="inherit" href="/explore">
              Khám phá
            </Link>,
            <Typography key="3" color="text.primary">
              { tourData?.name }
            </Typography>,
          </Breadcrumbs>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography variant="h2" component="h1" sx={{fontWeight: 900, fontSize: "2rem"}}>
                {
                  tourData ? <b>{ tourData?.name }</b> : <Skeleton variant="text"/>
                }
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} marginTop="10px">
                <Typography variant="body1">
                  {tourData?.duration} days, 4 cities
                </Typography>
                <Rating
                  value={parseFloat("0" + tourData?.ratedStar)}
                  size="small"
                  readOnly
                />
                <Typography variant="body1">
                  765 lượt đánh giá
                </Typography>
              </Stack>
            </div>
            <Button variant="outlined" sx={{color: "#000", borderColor: "#000", borderRadius: 0, height: "max-content", padding: "15px", display: {xs: "none", md: "block", lg: "block"}}}>Xem tất cả ngày và giá</Button>
          </Stack>

          {/* Service detail gallery */}

          <ServiceDetailGallery mainImg={tourData?.img} sideImgs={tourData?.overview?.paragraphs} startingPrice={tourData?.startFrom}/>

        </Stack>

        {/* Service detail body */}

        <Grid className="mt-2" spacing={2} container>
          <Grid item xs={12} lg={6}>
            <div  className="p-4" style={{background: "#FEE7DE"}}>
              <div className="mb-3">
                <Stack direction="row" justifyContent="space-between">
                  <div className="d-flex align-items-center">
                    <FmdGoodOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      { tourData?.location }
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center">
                    <PeopleAltOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      { tourData?.maxPeople } Người
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center">
                    <CalendarMonthOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      3 Ngày
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center">
                    <DirectionsCarFilledOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      { tourData?.vehicle }
                    </Typography>
                  </div>
                </Stack>
              </div>
              <div className="p-3 bg-light">
                <Typography>
                  <b>Special Departures:</b>  
                </Typography>
                <ul>

                </ul>
              </div>
            </div>

            {/* Tabs display */}

            <Box className="mt-3 position-sticky" sx={{ borderBottom: 1, borderColor: "divider", top: 70, zIndex: 1, background: "#fff" }}>
              <Tabs value={ activeTab }>
                <Tab label={<b>TỔNG QUAN</b>}/>
                <Tab label={<b>ĐỊA ĐIỂM</b>}/>
                <Tab label={<b>LỊCH TRÌNH</b>}/>
                <Tab label={<b>TOUR LIÊN QUAN</b>}/>
                <Tab label={<b>ĐÁNH GIÁ</b>}/>
              </Tabs>
            </Box>

            {/* Over view */}

            <ServiceOverview paragraphs={ tourData?.overview?.paragraphs }/>

            {/* Location */}

            {
              tourData ?
              <section className="w-100 my-5">
                <GoogleMapsEmbed
                  apiKey="AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY"
                  mode="place"
                  q={tourData?.location}
                  allowfullscreen
                  style="width: 100%; height: 400px"
                  language="vi"
                  loading="lazy"
                  maptype="satellite"
                />
              </section>
              :
              <Skeleton variant="rectangular" className="w-100 my-5" height={400}/>
            }

            {/* Service stepper */}

            <ServiceStepper steps={ tourData?.schedules }/>
            
            {/* Customer review */}

            <ServiceReview ratingAcceptance={tourData?.ratingAcceptance} id={params.id}/>
            
          </Grid>
          <Grid item xs={12} lg={6}>
            <ServiceSummary tourId={tourData?.id} travelDates={tourData?.tourDate}/>
          </Grid>
        </Grid>
        
      </Container>
    );
};
export default TourPage;
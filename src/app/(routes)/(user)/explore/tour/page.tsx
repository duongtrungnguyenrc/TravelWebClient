// Produced by Duong Trung Nguyen

"use client"

import { ServiceDetailGallery, ServiceOverview, ServiceReview, ServiceStepper, ServiceSummary } from "@/app/_components";
import { Box, Breadcrumbs, Button, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Rating, Select, SelectChangeEvent, Stack, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";
import { TourDate } from "@/app/_types";

const TourPage = () => {
    const params = useParams();
    const [ travelDate, setTravelDate ] = useState<TourDate[]>([{
        "departDate": "14-01-2023",
        "endDate": "17-01-2023",
        "type": "Plus",
        "duration": 3,
        "adultPrice": 300000.0,
        "childPrice": 150000.0
    },{
      "departDate": "14-01-2023",
      "endDate": "17-01-2023",
      "type": "Plus",
      "duration": 3,
      "adultPrice": 300000.0,
      "childPrice": 150000.0
  },{
    "departDate": "14-01-2023",
    "endDate": "17-01-2023",
    "type": "Plus",
    "duration": 3,
    "adultPrice": 300000.0,
    "childPrice": 150000.0
},{
  "departDate": "14-01-2023",
  "endDate": "17-01-2023",
  "type": "Plus",
  "duration": 3,
  "adultPrice": 300000.0,
  "childPrice": 150000.0
},{
  "departDate": "14-01-2023",
  "endDate": "17-01-2023",
  "type": "Plus",
  "duration": 3,
  "adultPrice": 300000.0,
  "childPrice": 150000.0
}
  ]);


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
      <Container className="bg-white" maxWidth="xl" sx={{paddingTop: "100px", paddingBottom: "20px"}}>

        {/* Service detail gallery */}

        <Stack direction="column" spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
          <Stack direction="row" justifyContent="space-between">
            <div>
              <Typography variant="h2" component="h1" sx={{fontWeight: 900, fontSize: "2rem"}}>
                <b>Germany, Italy & Switzerland</b>
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} marginTop="10px">
                <Typography variant="body1">
                  10 days, 4 cities
                </Typography>
                <Rating
                  value={5}
                  size="small"
                />
                <Typography variant="body1">
                  765 votes
                </Typography>
              </Stack>
            </div>
            <Button variant="outlined" sx={{color: "#000", borderColor: "#000", borderRadius: 0, height: "max-content", padding: "15px", display: {xs: "none", md: "block", lg: "block"}}}>See dates and prices</Button>
          </Stack>

          {/* Service detail gallery */}

          <ServiceDetailGallery/>

        </Stack>

        {/* Service detail body */}

        <Grid className="mt-2" spacing={2} container>
          <Grid item xs={12} lg={6}>
            <div  className="p-4" style={{background: "#FEE7DE"}}>
              <div className="mb-3">
                <Stack direction="row" justifyContent="space-between">
                  <div className="d-flex align-items-center">
                    <KingBedOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      King size room
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center">
                    <PeopleAltOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      King size room
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center">
                    <CalendarMonthOutlinedIcon sx={{fontSize: {xs: "1rem", md: "1.3rem", lg: "1.5rem"}, fontWeight: "300"}} className="mr-2"/>
                    <Typography variant="body1">
                      King size room
                    </Typography>
                  </div>
                </Stack>
              </div>
              <div className="p-3 bg-light">
                <Typography>
                  <b>Special Departures:</b>  
                </Typography>
              </div>
            </div>

            {/* Tabs display */}

            <Box className="mt-3 position-sticky" sx={{ borderBottom: 1, borderColor: "divider", top: 70, zIndex: 1, background: "#fff" }}>
              <Tabs value={1}>
                <Tab label={<b>Overview</b>}/>
                <Tab label={<b>Itinerary</b>}/>
                <Tab label={<b>Traveler photos</b>}/>
                <Tab label={<b>Reviews</b>}/>
              </Tabs>
            </Box>

            {/* Over view */}

            <ServiceOverview/>

            {/* Service stepper */}

            <ServiceStepper/>
            
            {/* Customer review */}

            <ServiceReview/>
            
          </Grid>
          <Grid item xs={12} lg={6}>
            <ServiceSummary travelDates={travelDate}/>
          </Grid>
        </Grid>
      </Container>
    );
};
export default TourPage;
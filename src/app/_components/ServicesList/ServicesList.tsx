// Produced by Duong Trung Nguyen

'use client'

import "./styles.scss";
import ServiceItem from "../ServiceItem/ServiceItem";
import { memo, useCallback, useEffect, useState } from "react";
import { SkeletonServicesList } from "..";
import { Container, Grid, Pagination, Rating, Stack, Typography } from "@mui/material";
import { Tour } from "@/app/_types";
import { useRouter, useSearchParams } from "next/navigation";
import { tourServices } from "@/app/_services";

const ServicesList = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [ pagesNumber, setPagesNumber ] = useState(0);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const params = useSearchParams();
  const page = params.get("page") ? parseInt(params.get("page")!, 10) : 1;

  useEffect(() => {
    const handleFetchTours = async (page: number) => {
      const response = await tourServices.getAllTours(page, 21);
      if (response.status) {
        setLoading(false);
        const toursData = response.data as { pages: number; tours: Tour[] };
        setTours(toursData.tours);
        pagesNumber === 0 ? setPagesNumber(toursData.pages) : undefined;
      }
    };
    handleFetchTours(page);
   
  }, [page]);


  const handleChangePage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setLoading(true);
    router.push(`/explore?page=${value}`, {scroll: false});
  }, []);
  
  return (
    <Container style={{paddingTop: "150px"}} maxWidth="xl" className="services-list-site container-fluid">
      <Grid container direction="row" className="m-0">
        <Grid className="rounded position-relative col-md-4 col-lg-3 p-2" item>
          <form action="" style={{ position: "sticky", top: "90px" }}>
            <div className="p-3 rounded" style={{background: "#fff"}}>
              <Typography variant="h6">
                <b>Khoảng giá</b>
              </Typography>
              <button className="btn btn-yellow mt-3">0 - 40000000</button>
            </div>
            <div className="p-3 rounded" style={{background: "#fff"}}>
              <Typography variant="h6" className="mb-3">
                <b>Đánh giá</b>
              </Typography>
              <div className="d-flex py-2 ju">
                <input type="radio" name="ratingPoint" id="" />
                <Rating readOnly size="small" value={5}/>
                <Typography variant="body2">5 sao</Typography>
              </div>
              <div className="d-flex py-2 ju">
                <input type="radio" name="ratingPoint" id="" />
                <Rating readOnly size="small" value={4}/>
                <Typography variant="body2">4 sao</Typography>
              </div>
              <div className="d-flex py-2 ju">
                <input type="radio" name="ratingPoint" id="" />
                <Rating readOnly size="small" value={3}/>
                <Typography variant="body2">3 sao</Typography>
              </div>
              <div className="d-flex py-2 ju">
                <input type="radio" name="ratingPoint" id="" />
                <Rating readOnly size="small" value={2}/>
                <Typography variant="body2">2 sao</Typography>
              </div>
              <div className="d-flex py-2 ju">
                <input type="radio" name="ratingPoint" id="" />
                <Rating readOnly size="small" value={1}/>
                <Typography variant="body2">1 sao</Typography>
              </div>
            </div>
            <div className="p-3 rounded" style={{background: "#fff"}}>
              <Typography variant="h6" className="mb-3">
                <b>Tiện ích</b>
              </Typography>
            </div>
          </form>
        </Grid>
        <Grid item className="col-md-8 col-lg-9 p-0">
          {
            loading ? <SkeletonServicesList/> : 

            <Grid container className="services-list m-0 p-0">
            {
              tours?.map((tour) => {
                return  <Grid  key={tour.id} item xs={12} md={6} lg={4} className="p-2">
                          <ServiceItem service={tour}/>
                        </Grid>
                
              })
            }
            </Grid>
          }
        </Grid>
      </Grid>
      <Stack className="mt-5" direction="row" justifyContent="center">
        <Pagination 
          shape="rounded" variant="outlined" color="primary" size="large"
          count={pagesNumber} 
          page={page}
          onChange={handleChangePage} 
        />
      </Stack>
    </Container>
  );
};
export default memo(ServicesList);
'use client'

import "./styles.scss";
import ServiceItem from "../ServiceItem/ServiceItem";
import { memo, useCallback, useEffect, useState } from "react";
import { SkeletonServicesList } from "..";
import { Grid, Pagination, Stack } from "@mui/material";
import { Tour } from "@/app/_types";
import { useRouter, useSearchParams } from "next/navigation";
import { tourServices } from "@/app/_services";

const ServicesList = () => {
  const [toursData, setToursData] = useState<{ pages: number; tours: Tour[] }>({ pages: 0, tours: [] });
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const params = useSearchParams();
  const page = params.get("page") ? parseInt(params.get("page")!, 10) : 1;

  useEffect(() => {
    const handleFetchTours = async (page: number) => {
      const response = await tourServices.getAllTours(page, 20);
      if (response.status) {
        setLoading(false);
        setToursData(response.data as { pages: number; tours: Tour[] });
      }
    };
    handleFetchTours(page);
   
  }, [page]);


  const handleChangePage = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setLoading(true);
    router.push(`/explore?page=${value}`, {scroll: false});
  }, []);
  
  return (
    <section className="services-list-site container-fluid">
      <div className="services-filter">
        <form action="">
          <div className="search-group">
            <input className="search-input" type="text" placeholder="Search activities or Destinations" />
            <button className="search-submit" type="submit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id=" Round / Action / search">
                  <path id="&#240;&#159;&#148;&#185;Icon Color" fillRule="evenodd" clipRule="evenodd" d="M15.5001 14H14.7101L14.4301 13.73C15.6301 12.33 16.2501 10.42 15.9101 8.39002C15.4401 5.61002 13.1201 3.39002 10.3201 3.05002C6.09014 2.53002 2.53014 6.09002 3.05014 10.32C3.39014 13.12 5.61014 15.44 8.39014 15.91C10.4201 16.25 12.3301 15.63 13.7301 14.43L14.0001 14.71V15.5L18.2501 19.75C18.6601 20.16 19.3301 20.16 19.7401 19.75C20.1501 19.34 20.1501 18.67 19.7401 18.26L15.5001 14ZM9.50014 14C7.01014 14 5.00014 11.99 5.00014 9.50002C5.00014 7.01002 7.01014 5.00002 9.50014 5.00002C11.9901 5.00002 14.0001 7.01002 14.0001 9.50002C14.0001 11.99 11.9901 14 9.50014 14Z" fill="#9A9AB0"/>
                </g>
              </svg>
            </button>
          </div>
          <div className="select-group">
            <label className="light-label">Type Room</label>
            <select name="" id="">
              <option value="">Premium</option>
            </select>
          </div>
          <div className="select-group">
            <label className="light-label">Guest</label>
            <select name="" id="">
              <option value="">2 Adult</option>
            </select>
          </div>
          <div className="select-group">
            <label className="light-label">Beds</label>
            <select name="" id="">
              <option value="">1 Single Queen</option>
            </select>
          </div>
          <div className="select-group">
            <label className="light-label">Sort by</label>
            <select name="" id="">
              <option value="">All</option>
            </select>
          </div>
        </form>
      </div>
        {
          loading ? <SkeletonServicesList/> : 

          <Grid container className="services-list" spacing="1rem">
          {
            toursData?.tours.map((tour) => {
              return  <Grid  key={tour.id} item xs={12} md={6} lg={4} xl={3}>
                        <ServiceItem service={tour}/>
                      </Grid>
              
            })
          }
          </Grid>
        }
      <Stack  direction="row" justifyContent="center">
        <Pagination 
          shape="rounded" variant="outlined" color="primary" size="large"
          count={toursData?.pages} 
          page={page}
          onChange={handleChangePage} 
        />
      </Stack>
    </section>
  );
};
export default memo(ServicesList);
// Produced by Duong Trung Nguyen

'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { IconButton, Pagination, Rating, Stack, TextField } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { tourServices } from '@/app/_services';
import { Response, TourRating } from '@/app/_types';
import { useEffect, useState } from 'react';
import { Skeleton } from '..';

const ServiceReview = ({ id } : { id : string }) => {
    const [ ratings, setRatings ] = useState<TourRating[]>();
    useEffect(() => {
        const fetchRatings = async () => {
            const response : Response = await tourServices.getTourRating(id);
            if(response.status) {
                setRatings(response.data as TourRating[]);
            }
        }
        fetchRatings();
    }, []);


    return (
        <div className="w-100 my-5">
            <Typography variant='h5'>
                <b>Đánh giá</b>
            </Typography>
            <div className='py-4 d-flex flex-column align-items-end'>
                <Rating
                    name="simple-controlled"
                    value={5}
                    placeholder='Nhập đánh giá...'
                    // onChange={(event, newValue) => {
                    // setValue(newValue);
                    // }}
                />
                <TextField
                    id="standard-search"
                    type="text"
                    variant="standard"
                    className='w-100 mt-2'
                />
                <div className='d-flex justify-content-end w-100 mt-3'>
                    <div className='w-50 d-flex gap-2'>
                        <button className="btn btn-secondary">Hủy</button>
                        <button className="btn btn-yellow">Đánh giá</button>
                    </div>
                </div>
            </div>
            <List>
                {
                    ratings ? ratings?.map((rating) => {
                        return  <ListItem alignItems="flex-start" className='px-0'>
                                    <ListItemText
                                        primary={
                                            <div className='d-flex justify-content-between'>
                                                <b>{ rating.username }</b>
                                                <IconButton>
                                                    <MoreHorizIcon/>
                                                </IconButton>
                                            </div>
                                        }
                                        secondary={
                                            <>
                                                <Stack direction="row" alignItems="center">
                                                    <Rating name="read-only" value={5} readOnly sx={{fontSize: "16px"}} className='mr-2'/>
                                                    <Typography variant='body2'>
                                                        { rating.username }, { rating.ratedDate }
                                                    </Typography>
                                                </Stack>
                                                <Typography className='mt-2' variant='body2'>
                                                    { rating.comment }
                                                </Typography>
                                            </>
                                        }
                                    />
                                </ListItem>


                    }) :
                    new Array(5).fill(null).map(() => {
                        return  <div className='my-4'>
                                    <Skeleton variant='text' className='w-25'/>
                                    <Skeleton variant='text' className='mt-2 w-50'/>
                                    <Skeleton variant='text' className='mt-2 w-75'/>
                                </div>
                    })
                }
            </List>
            <Stack className='mt-3' direction="row" justifyContent="center">
                <Pagination 
                shape="rounded" variant="outlined" color="primary" size="large"
                count={3} 
                />
        </Stack>
        </div>
    );
};
export default ServiceReview;
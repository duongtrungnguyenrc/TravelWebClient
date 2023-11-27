// Produced by Duong Trung Nguyen

'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button, IconButton, Pagination, Rating, Stack, TextField } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { tourServices } from '@/app/_services';
import { RatingRequest, Response, TourRatingsResponse } from '@/app/_types';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Skeleton } from '..';
import { useSelector } from "react-redux";
import { RootState } from "@/app/_context/store";
import { useDebouncedCallback } from 'use-debounce';
import CreateTourRatingResponse from '@/app/_types/response/CreateTourRatingResponse';

const ServiceReview = ({ id } : { id : string }) => {
    const [ ratingData , setRatingData ] = useState<TourRatingsResponse>(new TourRatingsResponse());
    const [ page, setPage ] = useState<number>(1);
    const [ newRating, setNewRating ] = useState<RatingRequest>(new RatingRequest(parseInt(id), "", 5));
    
    const currentUser = useSelector(state => (state as RootState).user);
    const formRef = useRef<HTMLFormElement>(null);

    
    useEffect(() => {
        const fetchRatingData = async () => {
            const response : Response = await tourServices.getTourRating(id, page, 10, (currentUser && { accessToken: currentUser.accessToken, tokenType: currentUser.tokenType }));
            if(response.status) {
                setRatingData(response.data as TourRatingsResponse);
            }
        }
        fetchRatingData();
    }, [ page ]);    

    const handleCommentChange = useDebouncedCallback((e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewRating((prevState) => {
            return {
                ...prevState,
                comment: e.target.value
            };
        });
    }, 300);

    const handleCommentSubmit = async (e : FormEvent) => {
        e.preventDefault();
        
        const response = await tourServices.addRating(currentUser.accessToken, currentUser.tokenType, newRating);

        if(response.status) {
            setRatingData((prevState) => {
                return {
                    ...prevState,
                    rates: [
                        (response.data as CreateTourRatingResponse).rateAdded,
                        ...prevState?.rates
                    ]
                }
            });
            clearNewRatingData();
            formRef.current && formRef?.current.reset();
        }
    };

    const clearNewRatingData = () => {
        setNewRating((prevState) => {
            return {
                ...prevState,
                star: 5,
                comment: ""
            }
        })
    }

    return (
        <div className="w-100 my-5">
            <Typography variant='h5'>
                <b>Đánh giá</b>
            </Typography>
            {
                currentUser.user && 
                <div className='my-4'>
                    <form className='gap-0' ref={formRef} method='post' onSubmit={(e) => handleCommentSubmit(e)}>
                        <div className='d-flex justify-content-between'>
                            <span><b>{ currentUser.user.fullName }</b></span>
                            <Rating
                                name="simple-controlled"
                                value={ newRating.star }
                                onChange={(_event, newValue) => {
                                    setNewRating((prevState) => {
                                        return {
                                            ...prevState,
                                            star: newValue as number
                                        };
                                    });
                                }}
                            />
                        </div>
                        <TextField
                            id="standard-search"
                            type="text"
                            variant="standard"
                            className='w-100 mt-3'
                            placeholder='Nhập đánh giá...'
                            onChange={(e) => {
                                handleCommentChange(e)
                            }}
                        />
                        <div className='d-flex justify-content-end w-100 mt-3'>
                            <div className='d-flex gap-2'>
                                <Button 
                                    type='reset'
                                    disabled={ newRating.comment.trim() === "" }
                                    variant='outlined'>
                                    Hủy
                                </Button>
                                <Button 
                                    type='submit'
                                    disabled={ newRating.comment.trim() === "" }
                                    variant='contained'>
                                    Đánh giá
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            }
            <hr/>
            <List>
                {
                    ratingData ? ratingData?.rates?.map((rating) => {
                        return  <ListItem alignItems="flex-start" className='px-0'>
                                    <ListItemText
                                        primary={
                                            <div className='d-flex justify-content-between'>
                                                <span><b>{ rating.username }</b></span>
                                                {
                                                    rating.active &&  
                                                    <IconButton>
                                                        <MoreHorizIcon/>
                                                    </IconButton>
                                                }
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
                    count={ratingData?.pages} 
                    onChange={(_e, value) => setPage(value)}
                />
            </Stack>
        </div>
    );
};
export default ServiceReview;
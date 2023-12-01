// Produced by Duong Trung Nguyen

'use client'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Avatar, Button, IconButton, ListItemAvatar, Menu, MenuItem, Pagination, Rating, Stack, TextField } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { tourServices } from '@/app/_services';
import { DeleteTourRatingResponse, RatingRequest, Response, TourRating, TourRatingsResponse, UpdateRatingRequest } from '@/app/_types';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Skeleton } from '..';
import { useSelector } from "react-redux";
import { RootState } from "@/app/_context/store";
import { useDebouncedCallback } from 'use-debounce';
import CreateTourRatingResponse from '@/app/_types/response/CreateTourRatingResponse';
import { toast } from 'react-toastify';
import UpdateTourRatingResponse from '@/app/_types/response/UpdateTourRatingResponse';

const ServiceReview = ({ id, ratingAcceptance } : { id : string, ratingAcceptance ?: boolean }) => {
    const [ ratingData , setRatingData ] = useState<TourRatingsResponse>(new TourRatingsResponse());
    const [ page, setPage ] = useState<number>(1);
    const [ newRating, setNewRating ] = useState<RatingRequest>(new RatingRequest(parseInt(id), "", 5));
    const [ mode, setMode ] = useState<number>(0);
    const [ editingRating, setEditingRating ] = useState<UpdateRatingRequest>(new UpdateRatingRequest(0, "", 5));
    
    const currentUser = useSelector(state => (state as RootState).user);
    const formRef = useRef<HTMLFormElement>(null);    
    
    useEffect(() => {
        const fetchRatingData = async () => {
            const response : Response = await tourServices.getTourRating(id, page, 10, currentUser?.accessToken);
            if(response.status) {
                setRatingData(response.data as TourRatingsResponse);
            }
        }
        fetchRatingData();
    }, [ page ]);    

    const handleCommentChange = useDebouncedCallback((e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(mode === 0) {
            setNewRating((prevState) => {
                return {
                    ...prevState,
                    comment: e.target.value
                };
            });
        }
        else {
            setEditingRating((prevState) => {
                return {
                    ...prevState,
                    comment: e.target.value
                };
            });
        }
    }, 300);

    const handleCommentSubmit = async (e : FormEvent) => {
        e.preventDefault();
        
        if (mode === 0) {
            const response = await toast.promise(tourServices.addRating(currentUser.accessToken, newRating), {
                pending: "Đang cập nhật...",
                success: "Thêm đánh giá thành công",
                error: "có lỗi đã xảy ra!"
            });

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
            }
        }
        else {
            const getUpdatedRatings = (updatedData : TourRating) => {
                const updatedList = ratingData.rates.map(item => {
                    if (item.id === editingRating.id) {
                      return { ...item, ...updatedData };
                    }
                    return item; 
                });
                return updatedList;
            }
            
            const response = await toast.promise(tourServices.updateRating(currentUser.accessToken, editingRating), {
                pending: "Đang cập nhật...",
                success: "Cập nhật đánh giá thành công",
                error: "có lỗi đã xảy ra!"
            })

            if(response.status) {
                setRatingData((prevState) => {
                    return {
                        ...prevState,
                        rates: getUpdatedRatings((response.data as UpdateTourRatingResponse).rateUpdated)
                    }
                });
                setMode(0);
            }
        }
        formRef.current && formRef?.current.reset();
    };

    const clearNewRatingData = () => {
        setNewRating((prevState) => {
            return {
                ...prevState,
                star: 5,
                comment: ""
            }
        })
    };

    const handleRemoveComment = async (commentID: number) => {
        const response = await toast.promise(tourServices.removeRating(currentUser.accessToken, commentID), {
            pending: "Đang xử lý...",
            success: "Xóa đánh giá thành công!",
            error: {
                render({data}){
                  return "Có lỗi đã xảy ra!" + (data as { message: string }).message
                }
              }
        });

        if(response.status) {
            setRatingData((prevState) => {
                return {
                    ...prevState,
                    rates: prevState.rates.filter((rate) => rate.id !== (response.data as DeleteTourRatingResponse).deletedId)
                }
            });
        }
    }

    return (
        <div className="w-100 my-5">
            <Typography variant='h5'>
                <b>Đánh giá</b>
            </Typography>
            {
                currentUser.user && ratingAcceptance &&
                <div className='my-4'>
                    <form className='gap-0' ref={formRef} method='post' onSubmit={(e) => handleCommentSubmit(e)}>
                        <div className='d-flex justify-content-between'>
                            <span><b>{ currentUser.user.fullName }</b></span>
                            <Rating
                                name="simple-controlled"
                                value={ mode === 0 ? newRating?.star : editingRating?.star }
                                onChange={(_event, newValue) => {
                                    mode === 0 ?
                                    setNewRating((prevState) => {
                                        return {
                                            ...prevState,
                                            star: newValue as number
                                        };
                                    }) :
                                    setEditingRating((prevState) => {
                                        return {
                                            ...prevState,
                                            star: newValue as number
                                        };
                                    })
                                }}
                            />
                        </div>
                        <TextField
                            defaultValue={mode === 1 ? editingRating?.comment : ""}
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
                                    disabled={ mode === 0 ? (newRating.comment.trim() === "") : (editingRating.comment.trim() === "") }
                                    variant='outlined'
                                    onClick={() => {
                                        mode === 1 && setMode(0)
                                    }}>
                                    Hủy
                                </Button>
                                <Button 
                                    type='submit'
                                    disabled={ mode === 0 ? (newRating.comment.trim() === "") : (editingRating.comment.trim() === "") }
                                    variant='contained'>
                                    {
                                        mode === 0 ? "Đánh giá" : "Cập nhật"
                                    }
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
                        return  <ListItem alignItems="center" className='px-0'>
                                    <ListItemAvatar>
                                        <Avatar/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <div className='d-flex justify-content-between'>
                                                <span><b>{ rating.username }</b></span>
                                                {
                                                    rating.active &&  
                                                    <PopupState variant="popover" popupId="rating-action-menu">
                                                    {(popupState) => (
                                                        <>
                                                            <IconButton {...bindTrigger(popupState)}>
                                                                <MoreHorizIcon/>
                                                            </IconButton>
                                                        <Menu {...bindMenu(popupState)}>
                                                            <MenuItem onClick={() => {
                                                                setMode(1);
                                                                setEditingRating((prevState) => {
                                                                    prevState.id = rating.id;
                                                                    prevState.comment = rating.comment;
                                                                    prevState.star = rating.star;
                                                                    return prevState;
                                                                })
                                                            }}>
                                                                <EditIcon className='mr-2' color='action'/>
                                                                Sửa
                                                            </MenuItem>
                                                            <MenuItem onClick={() => handleRemoveComment(rating.id)}>
                                                                <DeleteIcon className='mr-2' color='action'/>
                                                                Xóa
                                                            </MenuItem>
                                                        </Menu>
                                                        </>
                                                    )}
                                                    </PopupState>
                                                }
                                            </div>
                                        }
                                        secondary={
                                            <>
                                                <Stack direction="row" alignItems="center">
                                                    <Rating name="read-only" value={rating.star} readOnly sx={{fontSize: "16px"}} className='mr-2'/>
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
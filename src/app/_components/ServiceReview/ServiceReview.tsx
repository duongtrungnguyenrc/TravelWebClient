// Produced by Duong Trung Nguyen

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Pagination, Rating, Stack } from '@mui/material';

const ServiceReview = () => {
  return (
    <div className="w-100 my-5">
        <Typography variant='h5'>
            <b>Đánh giá</b>
        </Typography>
        <List>
            <ListItem alignItems="flex-start" className='px-0'>
                <ListItemText
                    primary={
                        <b>Viet Tran Java</b>
                    }
                    secondary={
                        <>
                            <Stack direction="row" alignItems="center">
                                <Rating name="read-only" value={5} readOnly sx={{fontSize: "16px"}} className='mr-2'/>
                                <Typography variant='body2'>
                                    Anonymous, traveled Sep. 2023
                                </Typography>
                            </Stack>
                            <Typography className='mt-2' variant='body2'>
                                This trip is jam packed with so many amazing excursions, views, and history. Every city just kept getting more beautiful. The trip was so well planned with the right amount of free time and excursions. Our tour director Serai was AMAZING. She was so helpful with things to do and places to eat on our free time and helped us navigate each place
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" className='px-0'>
                <ListItemText
                    primary={
                        <b>Khai Nguyen react</b>
                    }
                    secondary={
                        <>
                            <Stack direction="row" alignItems="center">
                                <Rating name="read-only" value={5} readOnly sx={{fontSize: "16px"}} className='mr-2'/>
                                <Typography variant='body2'>
                                    Anonymous, traveled Sep. 2023
                                </Typography>
                            </Stack>
                            <Typography className='mt-2' variant='body2'>
                                This trip is jam packed with so many amazing excursions, views, and history. Every city just kept getting more beautiful. The trip was so well planned with the right amount of free time and excursions. Our tour director Serai was AMAZING. She was so helpful with things to do and places to eat on our free time and helped us navigate each place
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" className='px-0'>
                <ListItemText
                    primary={
                        <b>Hao Hao android</b>
                    }
                    secondary={
                        <>
                            <Stack direction="row" alignItems="center">
                                <Rating name="read-only" value={4} readOnly sx={{fontSize: "16px"}} className='mr-2'/>
                                <Typography variant='body2'>
                                    Anonymous, traveled Sep. 2023
                                </Typography>
                            </Stack>
                            <Typography className='mt-2' variant='body2'>
                                This trip is jam packed with so many amazing excursions, views, and history. Every city just kept getting more beautiful. The trip was so well planned with the right amount of free time and excursions. Our tour director Serai was AMAZING. She was so helpful with things to do and places to eat on our free time and helped us navigate each place
                            </Typography>
                        </>
                    }
                />
            </ListItem>
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
// Produced by Duong Trung Nguyen

'use client'

import { Card, CardContent, CardMedia, Chip, Grid, Pagination, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { AllBlogsResponse } from "@/app/_types";
import { useRouter} from "next/navigation";
import "./styles.scss";
import { Skeleton } from "..";

const BlogList = ({ data } : { data: AllBlogsResponse }) => {

    const router = useRouter();

    const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/blog?page=${value}`, {scroll: false});
    };

    return (
        <Stack direction="column" gap={4}>
            <Typography variant="h2" component="h2" fontSize="28px">
                Bài viết liên quan
            </Typography>
            <Grid container spacing={3}>
            {
                data ? data.posts.slice(4).map((post) => {
                    return  <Grid key={post.id + post.author} item xs={12}>
                                <Card component="a" href={`/blog/post/${post.id}`} className="post" sx={{boxShadow: "none"}}>
                                    <CardMedia
                                    component="img"
                                    loading="lazy"
                                    alt={post.title}
                                    image={post.img}
                                    className="post-image"
                                    />
                                    <CardContent className="px-2">
                                        <Chip label={post.type} style={{borderRadius: "3px", width: "max-content", fontSize: "12px"}} size="small"/>
                                        <Typography noWrap variant="h5" component="h2" className="mt-2">
                                            {post.title}
                                        </Typography>
                                        <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px" className="mt-2">
                                            {post.author} | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  { post.time.split(" ")[0] } | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  { post.time.split(" ")[1] }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            { post.description.substring(0, 150) }...
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                }) :

                <>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="post">
                            <Skeleton variant="rectangular" className="post-image"/>
                            <div className="px-2 py-3 w-100">
                                <Skeleton variant="rectangular" className="rounded" height={24} width={70}/>
                                <Skeleton variant="text" className="w-75 py-3 mt-3"/>
                                <Skeleton variant="text" className="w-50 mt-3"/>
                                <Skeleton variant="text" className="w-100 mt-3"/>
                                <Skeleton variant="text" className="w-25 mt-2"/>
                            </div>
                        </div>
                    </Grid>
                </>
            }

            </Grid>
            <Stack  direction="row" justifyContent="center">
                <Pagination shape="rounded" variant="outlined" color="primary" size="large" count={data.pages} onChange={handleChangePage} />
            </Stack>
        </Stack>
    );
};
export default BlogList;
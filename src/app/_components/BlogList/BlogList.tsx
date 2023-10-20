// Produced by Duong Trung Nguyen

'use client'

import { Card, CardContent, CardMedia, Chip, Grid, Pagination, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Blog, Response } from "@/app/_types";
import { blogServices } from "@/app/_services";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./styles.scss";
import { Skeleton } from "..";

const BlogList = () => {
    const [ allPosts, setAllPosts ] = useState<Blog[] | null>(null);
    const [ pagesNumber, setPagesNumber ] = useState(0);

    const router = useRouter();
    const params = useSearchParams();
    const page = params.get("page") ? parseInt(params.get("page")!, 10) : 1;
    
    useEffect(() => {
        const fetchAllPosts = async (page: number) => {
        const response: Response = await blogServices.getAllPosts(page, 10);
        if (response.status) {
            const blogData = response.data as { pages: number, posts: Blog[] };
            setAllPosts(blogData.posts);
            pagesNumber === 0 ? setPagesNumber(blogData.pages) : undefined;
        }
        }

        fetchAllPosts(page);
    }, [page])

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/blog?page=${value}`, {scroll: false});
    };

    return (
        <Stack direction="column" gap={4}>
            <Typography variant="h2" component="h2" fontSize="28px">
            Featured this month
            </Typography>
            <Grid container spacing={3}>
            {
                allPosts ? allPosts.map((post) => {
                    return  <Grid key={post.id} item xs={12}>
                                <Card component="a" href="/blog/post?id=" className="post">
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
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
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
            <Pagination shape="rounded" variant="outlined" color="primary" size="large" count={pagesNumber} onChange={handleChangePage} />
            </Stack>
        </Stack>
    );
};
export default BlogList;
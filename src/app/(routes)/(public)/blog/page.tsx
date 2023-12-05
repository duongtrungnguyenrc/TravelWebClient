// Produced by Duong Trung Nguyen

import { CardHeader, CardMedia, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { BlogList } from "@/app/_components";
import { blogServices } from "@/app/_services";
import { AllBlogsResponse } from "@/app/_types";
import Link from "next/link";

const BlogsPage = async ({ searchParams } : { searchParams: { page: string } }) => {  
  const response = await blogServices.get(+searchParams?.page || 1, 10);
  const data = response.data as AllBlogsResponse;

  return (
  <>
    <div  style={{background: "#f5f5f3"}}>
      <Container maxWidth="xl">
        <Grid container direction="row" paddingTop="10rem">
          <Grid item className="col-12 col-md-12 col-lg-8" paddingRight="3rem">
            <Stack direction="column" gap={4}>
              <Typography variant="h2" component="h2" fontSize="28px">
                Bài viết mới
              </Typography>
              <Grid container spacing={3}>
                {
                  data.posts.slice(0, 2).map((post) => {
                    return <Grid key={post.id + post.author} item xs={12} lg={6}>
                            <Link href={`/blog/post/${post.id}`}>
                              <Card style={{boxShadow:"none", background: "transparent"}}>
                                <Stack style={{padding: "1rem 0"}} spacing={1}>
                                  <Chip label={post.type} style={{borderRadius: "3px", width: "max-content", fontSize: "12px"}} size="small"/>
                                  <Typography noWrap variant="h2" component="h2" fontSize="28px">
                                    {post.title}
                                  </Typography>
                                </Stack>
                                <CardMedia
                                  component="img"
                                  loading="lazy"
                                  alt="green iguana"
                                  sx={{height: {xs: "150px", md: "200px", lg: "250px"}}}
                                  image={post.img}
                                  style={{borderRadius: "7px"}}
                                />
                                <CardContent style={{padding: "1rem 0"}}>
                                  <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px">
                                    {post.author} | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  { post.time.split(" ")[0] } | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  { post.time.split(" ")[1] }
                                  </Typography>
                                  <Typography variant="body1" color="text.secondary">
                                  {
                                    post.description.substring(0, 100)
                                  }...
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Link>
                          </Grid>
                  })
                }
              </Grid>
            </Stack>
          </Grid>
          <Grid item className="col-12 col-md-12 col-lg-4">
            <Stack direction="column" gap={4}>
              <Typography variant="h2" component="h2" fontSize="28px">
                Bài viết gần đây
              </Typography>
              <Grid container spacing={2} className="mt-3">
                {
                  data?.posts.slice(2, 4).map((post) => {
                    return <Grid key={post.id + post.author} item xs={12}>
                            <Card component="a" href={`/blog/post/${post.id}`} style={{boxShadow:"none"}}>
                              <CardHeader
                                title={ post.title }
                                subheader="Travel"
                                style={{padding: "1rem 0"}}
                              />
                              <CardContent style={{padding: "1rem 0"}}>
                                <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px">
                                  { post.author } | <CalendarTodayIcon sx={{fontSize: "12px"}}/> { post.time.split(" ")[0] } | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  { post.time.split(" ")[1] }
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                {
                                  post.description.substring(0, 100)
                                }
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                  })
                }
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>

    <Container maxWidth="xl" className="my-5">
      <Grid container direction="row" spacing={2}>
        <Grid item className="col-12 col-md-12 col-lg-8">
          <BlogList data={data}/>
        </Grid>
        <Grid item className="col-12 col-md-12 col-lg-4">
          <Stack direction="column" gap={4}>
            <Typography variant="h2" component="h2" fontSize="28px">
              Bài viết khác
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card component="a" href="/blog/post?id=" style={{boxShadow:"none"}}>
                  <CardHeader
                    title="set video playback speed
                    with javascript"
                    subheader="Travel"
                    style={{padding: "1rem 0"}}
                  />
                  <CardContent style={{padding: "1rem 0"}}>
                    <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px">
                      Nguyen | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  02 December 2023 | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  3 Min, to Read
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card component="a" href="/blog/post?id=" style={{boxShadow:"none"}}>
                  <CardHeader
                    title="set video playback speed
                    with javascript"
                    subheader="Travel"
                    style={{padding: "1rem 0"}}
                  />
                  <CardContent style={{padding: "1rem 0"}}>
                    <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px">
                      Nguyen | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  02 December 2023 | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  3 Min, to Read
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </>
  );
};
export default BlogsPage;
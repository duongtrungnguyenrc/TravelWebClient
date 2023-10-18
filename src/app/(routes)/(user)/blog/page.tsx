// Produced by Duong Trung Nguyen

import { blogServices } from "@/app/_services";
import { CardHeader, Chip, Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Blog, Response } from "@/app/_types";
import Link from "next/link";

const BlogsPage = async () => {
  console.log("render");
  
  const blogs: Response = await blogServices.getAllblogs();
  const posts: { pages: number, blogs: Blog[]} = blogs.data as { pages: number, blogs: Blog[]};
  
  return (
  <>
    <div  style={{background: "#f5f5f3"}}>
      <Container maxWidth="xl">
        <Grid container direction="row" paddingTop="10rem">
          <Grid item className="col-12 col-md-12 col-lg-8" paddingRight="3rem">
            <Stack direction="column" gap={4}>
              <Typography variant="h2" component="h2" fontSize="28px">
                Featured this month
              </Typography>
              <Grid container spacing={3}>
                {
                  posts?.blogs.slice(0, 2)?.map((post) => {
                    return <Grid key={post.id} item xs={12} lg={6}>
                            <Link href={`/blog/post?id=${post.id}`}>
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
                                    {post.author} | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  02 December 2023 | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  3 Min, to Read
                                  </Typography>
                                  <Typography variant="body1" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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
          <Grid item className="col-12 col-md-12 col-lg-4" paddingLeft="3rem">
            <Stack direction="column" gap={4}>
              <Typography variant="h2" component="h2" fontSize="28px">
                Popular posted
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
    </div>

    <Container maxWidth="xl" className="my-5">
      <Grid container direction="row" spacing={2}>
        <Grid item className="col-12 col-md-12 col-lg-8">
          <Stack direction="column" gap={4}>
            <Typography variant="h2" component="h2" fontSize="28px">
              Featured this month
            </Typography>
            <Grid container spacing={3}>
            {
                posts?.blogs.slice(2, posts.blogs.length)?.map((post) => {
                  return <Grid key={post.id} item xs={12}>
                          <Card component="a" href="/blog/post?id=" style={{boxShadow:"none", display: "flex", gap: "1rem", background: "transparent"}}>
                            <CardMedia
                              component="img"
                              loading="lazy"
                              alt={post.title}
                              sx={{height: {xs: "160px", md: "200px", lg: "200px"}}}
                              image={post.img}
                              style={{borderRadius: "7px", maxWidth: "35%"}}
                            />
                            <CardContent style={{padding: "1rem 0", display: "flex", flexDirection: "column"}}>
                              <Chip label={post.type} style={{borderRadius: "3px", width: "max-content", fontSize: "12px"}} size="small"/>
                              <Typography noWrap variant="h5" component="h2" className="mt-2">
                                {post.title}
                              </Typography>
                              <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px" className="mt-2">
                                {post.author} | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  02 December 2023 | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  3 Min, to Read
                              </Typography>
                              <Typography variant="body1" sx={{fontSize: {xs: "14px"}}} color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </Card>
                      </Grid>
                })
              }

            </Grid>
            <Stack  direction="row" justifyContent="center">
              <Pagination shape="rounded" variant="outlined" color="primary" size="large" count={3} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item className="col-12 col-md-12 col-lg-4">
          <Stack direction="column" gap={4}>
            <Typography variant="h2" component="h2" fontSize="28px">
              Popular posted
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
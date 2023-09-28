import { DefaultHero, NormalBlogs, PopularBlogs } from "@/app/_components";
import { blogServices } from "@/app/_services";
import { CardHeader, Chip, Grid, Pagination, Stack, Typography } from "@mui/material";
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
    <Grid container padding="5rem" paddingTop="10rem" style={{background: "#f5f5f3"}}>
      <Grid item xs={12} md={5} lg={8} direction="row" spacing={2} paddingRight="3rem">
        <Stack direction="column" gap={4}>
          <Typography variant="h2" component="h2" fontSize="28px">
            Featured this month
          </Typography>
          <Grid container spacing={3}>
            {
              posts?.blogs.slice(0, 2)?.map((post) => {
                return <Grid key={post.id} item xs={6}>
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
                              alt="green iguana"
                              height="250"
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
      <Grid item xs={12} md={5} lg={4} direction="row" spacing={2} paddingLeft="3rem">
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

    <Grid container padding="5rem">
      <Grid item xs={8} direction="row" spacing={2} paddingRight="3rem">
        <Stack direction="column" gap={4}>
          <Typography variant="h2" component="h2" fontSize="28px">
            Featured this month
          </Typography>
          <Grid container spacing={3}>
          {
              posts?.blogs.slice(2, posts.blogs.length)?.map((post) => {
                return <Grid item xs={12}>
                        <Card component="a" href="/blog/post?id=" style={{boxShadow:"none", display: "flex", gap: "1rem"}}>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image={post.img}
                            style={{borderRadius: "7px", maxWidth: "35%"}}
                          />
                          <CardContent style={{padding: "1rem 0", display: "flex", flexDirection: "column", gap: "16px"}}>
                            <Chip label={post.type} style={{borderRadius: "3px", width: "max-content", fontSize: "12px"}} size="small"/>
                            <Typography noWrap variant="h2" component="h2" fontSize="28px">
                              {post.title}
                            </Typography>
                            <Typography display="flex" variant="body2" color="text.secondary" marginBottom="10px" fontSize="12px" alignItems="center" gap="5px">
                              {post.author} | <CalendarTodayIcon sx={{fontSize: "12px"}}/>  02 December 2023 | <AccessAlarmIcon sx={{fontSize: "12px"}}/>  3 Min, to Read
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
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
            <Pagination shape="rounded" variant="outlined" color="primary" size="large" count={10} />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4} direction="row" spacing={2} paddingLeft="3rem">
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
  </>
  );
};
export default BlogsPage;
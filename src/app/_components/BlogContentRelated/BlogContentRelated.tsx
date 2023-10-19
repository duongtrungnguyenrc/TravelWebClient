"use client";
import "./styles.scss";
import { blogServices } from "@/app/_services";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { Blog, Response } from "@/app/_types";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogContentRelated = async () => {
  console.log("render");

  const blogs: Response = await blogServices.getAllblogs();
  const posts: { pages: number; blogs: Blog[] } = blogs.data as {
    pages: number;
    blogs: Blog[];
  };
  return (
    <section className="blog-content-related">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6} lg={8}>
                <Item className="box-shadow p-1rem">
                  <div className="related-post text-start">
                    <div className="related-heading">
                      <Typography variant="h5">
                        <b>Related Post</b>
                      </Typography>
                    </div>
                    <div className="post-item">
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          {posts?.blogs.slice(0, 2)?.map((post) => {
                            return (
                              <Grid key={post.id} xs={12} lg={6}>
                                <Link href={`/blog/post?id=${post.id}`}>
                                  <Card
                                    style={{
                                      boxShadow: "none",
                                      background: "transparent",
                                    }}
                                  >
                                    <Stack
                                      style={{ padding: "1rem 0" }}
                                      spacing={1}
                                    >
                                      <Chip
                                        label={post.type}
                                        style={{
                                          borderRadius: "3px",
                                          width: "max-content",
                                          fontSize: "12px",
                                        }}
                                        size="small"
                                      />
                                      <Typography
                                        noWrap
                                        variant="h2"
                                        component="h2"
                                        fontSize="28px"
                                      >
                                        {post.title}
                                      </Typography>
                                    </Stack>
                                    <CardMedia
                                      component="img"
                                      loading="lazy"
                                      alt="green iguana"
                                      sx={{
                                        height: {
                                          xs: "150px",
                                          md: "200px",
                                          lg: "250px",
                                        },
                                      }}
                                      image={post.img}
                                      style={{ borderRadius: "7px" }}
                                    />
                                    <CardContent style={{ padding: "1rem 0" }}>
                                      <Typography
                                        display="flex"
                                        variant="body2"
                                        color="text.secondary"
                                        marginBottom="10px"
                                        fontSize="12px"
                                        alignItems="center"
                                        gap="5px"
                                      >
                                        {post.author} |{" "}
                                        <CalendarTodayIcon
                                          sx={{ fontSize: "12px" }}
                                        />{" "}
                                        02 December 2023 |{" "}
                                        <AccessAlarmIcon
                                          sx={{ fontSize: "12px" }}
                                        />{" "}
                                        3 Min, to Read
                                      </Typography>
                                      <Typography
                                        variant="body1"
                                        color="text.secondary"
                                      >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                      </Typography>
                                    </CardContent>
                                  </Card>
                                </Link>
                              </Grid>
                            );
                          })}
                          {posts?.blogs.slice(0, 2)?.map((post) => {
                            return (
                              <Grid key={post.id} xs={12} lg={6}>
                                <Link href={`/blog/post?id=${post.id}`}>
                                  <Card
                                    style={{
                                      boxShadow: "none",
                                      background: "transparent",
                                    }}
                                  >
                                    <Stack
                                      style={{ padding: "1rem 0" }}
                                      spacing={1}
                                    >
                                      <Chip
                                        label={post.type}
                                        style={{
                                          borderRadius: "3px",
                                          width: "max-content",
                                          fontSize: "12px",
                                        }}
                                        size="small"
                                      />
                                      <Typography
                                        noWrap
                                        variant="h2"
                                        component="h2"
                                        fontSize="28px"
                                      >
                                        {post.title}
                                      </Typography>
                                    </Stack>
                                    <CardMedia
                                      component="img"
                                      loading="lazy"
                                      alt="green iguana"
                                      sx={{
                                        height: {
                                          xs: "150px",
                                          md: "200px",
                                          lg: "250px",
                                        },
                                      }}
                                      image={post.img}
                                      style={{ borderRadius: "7px" }}
                                    />
                                    <CardContent style={{ padding: "1rem 0" }}>
                                      <Typography
                                        display="flex"
                                        variant="body2"
                                        color="text.secondary"
                                        marginBottom="10px"
                                        fontSize="12px"
                                        alignItems="center"
                                        gap="5px"
                                      >
                                        {post.author} |{" "}
                                        <CalendarTodayIcon
                                          sx={{ fontSize: "12px" }}
                                        />{" "}
                                        02 December 2023 |{" "}
                                        <AccessAlarmIcon
                                          sx={{ fontSize: "12px" }}
                                        />{" "}
                                        3 Min, to Read
                                      </Typography>
                                      <Typography
                                        variant="body1"
                                        color="text.secondary"
                                      >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                      </Typography>
                                    </CardContent>
                                  </Card>
                                </Link>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </section>
  );
};
export default BlogContentRelated;

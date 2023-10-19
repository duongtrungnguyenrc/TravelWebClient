"use client";
import "./styles.scss";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const BlogContentRight = async () => {
  return (
    <section className="blog-content-right">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6} lg={8}></Grid>
              <Grid xs={12} sm={6} md={6} lg={4}>
                <Item className="box-shadow p-1rem">
                  <div className="blog-container-right">
                    <div className="top-author-contain">
                      <div className="Author-heading">
                        <Typography variant="h5" className="text-start">
                          Top Author
                        </Typography>
                      </div>
                      <Grid container spacing={2}>
                        <Grid xs={12} md={12} lg={12}>
                          <Item className="d-flex-10">
                            <div className="avatar"></div>
                            <div className="infor-author">
                              <Typography
                                variant="h5"
                                className="name-infor text-start"
                              >
                                Jenny Kia
                              </Typography>
                              <Typography
                                variant="body1"
                                className="detail-infor m-0"
                              >
                                Fashion designer, Blogger, activist
                              </Typography>
                              <div className="list-contact-author">
                                <ul className="d-flex-10">
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 488 512"
                                      >
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={12}>
                          <Item className="d-flex-10">
                            <div className="avatar"></div>
                            <div className="infor-author">
                              <Typography
                                variant="h5"
                                className="name-infor text-start"
                              >
                                Jenny Kia
                              </Typography>
                              <Typography
                                variant="body1"
                                className="detail-infor m-0"
                              >
                                Fashion designer, Blogger, activist
                              </Typography>
                              <div className="list-contact-author">
                                <ul className="d-flex-10">
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 488 512"
                                      >
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={12}>
                          <Item className="d-flex-10">
                            <div className="avatar"></div>
                            <div className="infor-author">
                              <Typography
                                variant="h5"
                                className="name-infor text-start"
                              >
                                Jenny Kia
                              </Typography>
                              <Typography
                                variant="body1"
                                className="detail-infor m-0"
                              >
                                Fashion designer, Blogger, activist
                              </Typography>
                              <div className="list-contact-author">
                                <ul className="d-flex-10">
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1em"
                                        viewBox="0 0 488 512"
                                      >
                                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Item>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="adds-card m-40">
                      <Card
                        sx={{
                          minWidth: 275,
                          padding: "30px",
                          backgroundColor: "#f9d7a2",
                          marginTop: "30px",
                        }}
                      >
                        <CardContent>
                          <Typography
                            variant="h3"
                            component="div"
                            className="text-start"
                          >
                            want to travel sikkim by car?
                          </Typography>
                          <Typography variant="body2">
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <button className="btn btn-yellow">Visit Us</button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="categories m-40">
                      <div className="head-categories">
                        <Typography variant="h5" className="text-start">
                          Categories
                        </Typography>
                      </div>
                      <ul className="catergories-contain">
                        <li className="list-flex-item w-100">
                          <Typography variant="body1">Lifestyle</Typography>
                          <Typography variant="body1">09</Typography>
                        </li>
                        <div className="line"></div>
                        <li className="list-flex-item w-100">
                          <Typography variant="body1">Lifestyle</Typography>
                          <Typography variant="body1">09</Typography>
                        </li>
                        <div className="line"></div>
                        <li className="list-flex-item w-100">
                          <Typography variant="body1">Lifestyle</Typography>
                          <Typography variant="body1">09</Typography>
                        </li>
                      </ul>
                    </div>
                    <div className="today-update m-40">
                      <div className="head-today m-40">
                        <Typography variant="h5" className="text-start">
                          Today's Update
                        </Typography>
                      </div>
                      <Grid container spacing={2}>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <Typography className="text-center number-of-post">
                              14
                            </Typography>
                            <Typography className="text-center detail-post">
                              New Post
                            </Typography>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <Typography className="text-center number-of-post">
                              14
                            </Typography>
                            <Typography className="text-center detail-post">
                              New Post
                            </Typography>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <Typography className="text-center number-of-post">
                              14
                            </Typography>
                            <Typography className="text-center detail-post">
                              New Post
                            </Typography>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <Typography className="text-center number-of-post">
                              14
                            </Typography>
                            <Typography className="text-center detail-post">
                              New Post
                            </Typography>
                          </Item>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="instagram-post-contain m-40">
                      <div className="head-instagram-post">
                        <Typography variant="h5" className="text-start m-20">
                          Instagram Post
                        </Typography>
                      </div>
                      <ImageList
                        sx={{ width: "100%", height: 450 }}
                        cols={3}
                        rowHeight={164}
                      >
                        {itemData.map((item) => (
                          <ImageListItem key={item.img}>
                            <img
                              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                              alt={item.title}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </div>
                    <div className="search-with-tag">
                      <div className="search-instagram-post">
                        <Typography variant="h5" className="text-start m-20">
                          Search With Tag
                        </Typography>
                      </div>
                      <Grid container spacing={2}>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip
                              label="travel"
                              style={{
                                borderRadius: "3px",
                                width: "max-content",
                                fontSize: "12px",
                              }}
                              size="small"
                            />
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip
                              label="travel"
                              style={{
                                borderRadius: "3px",
                                width: "max-content",
                                fontSize: "12px",
                              }}
                              size="small"
                            />
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip
                              label="travel"
                              style={{
                                borderRadius: "3px",
                                width: "max-content",
                                fontSize: "12px",
                              }}
                              size="small"
                            />
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip
                              label="travel"
                              style={{
                                borderRadius: "3px",
                                width: "max-content",
                                fontSize: "12px",
                              }}
                              size="small"
                            />
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip
                              label="travel"
                              style={{
                                borderRadius: "3px",
                                width: "max-content",
                                fontSize: "12px",
                              }}
                              size="small"
                            />
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip
                              label="travel"
                              style={{
                                borderRadius: "3px",
                                width: "max-content",
                                fontSize: "12px",
                              }}
                              size="small"
                            />
                          </Item>
                        </Grid>
                      </Grid>
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
export default BlogContentRight;

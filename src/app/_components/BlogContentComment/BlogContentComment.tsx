'use client';
import "./styles.scss";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TextField from "@mui/material/TextField";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const options = ["Create a merge commit", "Sort by best", "Rebase and merge"];
const BlogContentTable = async () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return (
    <section className="blog-content-comment">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6} lg={8}>
                <Item className="box-shadow p-1rem">
                  <div className="comment-section">
                    <Grid container spacing={2}>
                      <Grid xs={6} md={8} lg={10}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <Typography className="total-comment">
                            0 comment
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid xs={6} md={4} lg={2}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <button className="btn btn-yellow">login</button>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={12} lg={9}>
                        <Item className="share box-shadow d-flex-center-h-100">
                          <div className="icon-rating">
                            <Stack spacing={1}>
                              <Rating
                                name="size-small"
                                defaultValue={0}
                                size="small"
                              />
                            </Stack>
                            Rating
                            <Stack direction="row" spacing={1}>
                              <Chip
                                avatar={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                  </svg>
                                }
                                label="Share"
                              />
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Chip
                                avatar={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 512 512"
                                  >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                  </svg>
                                }
                                label="Share"
                              />
                            </Stack>
                          </div>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={12} lg={3}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <ButtonGroup
                            variant="contained"
                            ref={anchorRef}
                            aria-label="split button"
                          >
                            <Button className="btn btn-yellow btn-content">
                              {options[selectedIndex]}
                            </Button>
                            <Button
                              size="small"
                              aria-controls={
                                open ? "split-button-menu" : undefined
                              }
                              aria-expanded={open ? "true" : undefined}
                              aria-label="select merge strategy"
                              aria-haspopup="menu"
                              className="btn btn-yellow btn-arrow"
                            >
                              <ArrowDropDownIcon />
                            </Button>
                          </ButtonGroup>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={2} lg={1}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <div className="comment-place">
                            <div className="comment-input"></div>
                          </div>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={10} lg={11}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <Box
                            sx={{
                              width: "100%",
                              maxWidth: "100%",
                            }}
                          >
                            <TextField
                              fullWidth
                              placeholder="Enter your comment"
                              className="enter-comment"
                              id="fullWidth"
                            />
                          </Box>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={4} lg={2}>
                        <Item className="text-start box-shadow">
                          <Typography variant="body1" className="m-20">
                            Login in with
                          </Typography>
                          <div className="list-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="2em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="2em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="2em"
                              viewBox="0 0 488 512"
                            >
                              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                          </div>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={8} lg={10}>
                        <Item className="text-start box-shadow">
                          <Typography variant="body1" className="m-20">
                            OR SIGN UP WITH DISQUS
                          </Typography>
                          <Box
                            sx={{
                              width: "100%",
                              maxWidth: "100%",
                            }}
                          >
                            <TextField
                              fullWidth
                              placeholder="Name"
                              className="enter-comment"
                              id="fullWidth"
                            />
                          </Box>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={6} lg={12}>
                        <div className="contain-comment">
                          <Typography variant="body1" className="m-20">
                            No comment
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <div className="line m-40"></div>
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
export default BlogContentTable;

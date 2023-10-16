"use client";
import "./styles.scss";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BlogContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <section className="Blog-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <Grid container spacing={2} >
              <Grid xs={12} md={6} lg={8} >
                <Item className="box-shadow">
                  <div className="blog-contain-left">
                    <div className="Blog-heading">
                      <div className="ellipse">
                        <label htmlFor="inputField" className="ellipse">
                          Travel
                        </label>
                      </div>
                    </div>
                    <div className="heading-content">
                      <p className="title-heading">
                        I Created a Developer Rap Video - Here's What I Learned
                      </p>
                    </div>
                    <div className="post-people">
                      <div className="avartar flex-item-user">
                        <Stack direction="row" spacing={2}>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                          />
                        </Stack>
                        <p className="name-of-avatar">Jesica koli</p>
                      </div>
                      <div className="time-post flex-item-user">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                        </svg>
                        <p className="calender-time">02 december 2022</p>
                      </div>
                    </div>
                    <div className="image-title-post">
                      <img
                        src="https://cdnmedia.baotintuc.vn/Upload/XjfgEPYM30O8z6jY3MHxSw/files/2019/10/310/Anh%201_Cau%20Vang%20-%20Sun%20World%20Ba%20Na%20Hills.jpg"
                        alt=""
                        className="img-post"
                      />
                    </div>
                  </div>
                  <div className="content-blog">
                    <div className="sub-detail-img">
                      <p>
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard. We know you’re
                        dealing in stolen ore. But I wanna talk about the
                        assassination attempt on Lieutenant Worf. Could someone
                        survive inside a transporter buffer for 75 years? Fate.
                        It protects fools, little children, and ships.
                      </p>
                    </div>
                  </div>
                  <div className="contain-main">
                    <p className="title-para m-20">
                      I Created a Developer Rap Video - Here's What I Learned
                    </p>
                    <p className="m-20">
                      Did you come here for something in particular or just
                      general Riker-bashing? And blowing into maximum warp
                      speed, you appeared for an instant to be in two places at
                      once. We have a saboteur aboard. We know you’re dealing in
                      stolen ore. But I wanna talk about the assassination
                      attempt
                    </p>
                    <div className="table-first m-40">
                      <TableContainer component={Paper} className="m-40">
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>
                                Dessert (100g serving)
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Calories
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Fat&nbsp;(g)
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Carbs&nbsp;(g)
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Protein&nbsp;(g)
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.calories}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.fat}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.carbs}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.protein}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <p>
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard.
                      </p>
                      <div className="observe">
                        <Card
                          sx={{
                            minWidth: 275,
                            backgroundColor: "#f9d7a2",
                            textAlign: "center",
                            boxShadow: "none",
                            marginBottom: "40px",
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              “Did you come here for something in particular or
                              just general Riker-bashing? And blowing into
                              maximum warp speed, you appeared for an instant to
                              be in two places at once. We have a saboteur
                              aboard. We know you’re dealing in stolen ore. But
                              I wanna talk about the assassination attempt on
                              Lieutenant Worf.”
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                      <p>
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard.
                      </p>
                      <p className="title-para m-20">
                        I Created a Developer Rap Video - Here's What I Learned
                      </p>
                      <p>
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard.
                      </p>
                      <ol className="tight-list">
                        <li>
                          Did you come here for something in particular or just
                          general
                        </li>
                        <li>
                          Did you come here for something in particular or just
                          general Riker-bashing
                        </li>
                        <li>Did you come here for something in particula</li>
                      </ol>
                      <p>
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum
                      </p>
                      <p>I Created a Developer Rap Video</p>
                      <div className="tab-content m-40">
                        <Box sx={{ width: "100%" }}>
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              aria-label="basic tabs example"
                            >
                              <Tab label="Step 1" {...a11yProps(0)} />
                              <Tab label="Step 2" {...a11yProps(1)} />
                              <Tab label="Step 3" {...a11yProps(2)} />
                            </Tabs>
                          </Box>
                          <CustomTabPanel value={value} index={0}>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into maximum
                            warp speed, you appeared for an instant to be in two
                            places at once. We have a saboteur aboard. We know
                            you’re dealing in stolen ore. But I wanna talk about
                            the assassination attempt on Lieutenant Worf.
                          </CustomTabPanel>
                          <CustomTabPanel value={value} index={1}>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into maximum
                            warp speed, you appeared for an instant to be in two
                            places at once. We have a saboteur aboard. We know
                            you’re dealing in stolen ore. But I wanna talk about
                            the assassination attempt on Lieutenant Worf.
                          </CustomTabPanel>
                          <CustomTabPanel value={value} index={2}>
                            Did you come here for something in particular or
                            just general Riker-bashing? And blowing into maximum
                            warp speed, you appeared for an instant to be in two
                            places at once. We have a saboteur aboard. We know
                            you’re dealing in stolen ore. But I wanna talk about
                            the assassination attempt on Lieutenant Worf.
                          </CustomTabPanel>
                        </Box>
                      </div>
                      <div className="line-container m-40">
                        <div className="line"></div>
                        <ul className="icon-list">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 448 512"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </li>
                        </ul>
                        <div className="line"></div>
                      </div>
                      <div className="share-contain">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z"
                            stroke="#1C274C"
                            stroke-width="1.5"
                          />
                          <path
                            d="M14 6.5L9 10"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14 17.5L9 14"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
                            stroke="#1C274C"
                            stroke-width="1.5"
                          />
                          <path
                            d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z"
                            stroke="#1C274C"
                            stroke-width="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="related-post text-start">
                    <div className="related-heading">
                      <h1>Related Post</h1>
                    </div>
                    <div className="post-item">
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid xs={12} md={12} lg={6}>
                            <Item className="box-shadow">
                              <Card sx={{ maxWidth: 345 }} className="m-w-100">
                                <CardMedia
                                  sx={{ height: 140 }}
                                  image="https://th.bing.com/th/id/OIP.PlvQBR4jZdeJEGvf5ZV0KgHaEx?pid=ImgDet&rs=1"
                                  title="green iguana"
                                />
                                <CardContent>
                                  <Typography gutterBottom component="div">
                                    <div className="ellipse">
                                      <label
                                        htmlFor="inputField"
                                        className="ellipse"
                                      >
                                        Travel
                                      </label>
                                    </div>
                                  </Typography>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="text-start"
                                  >
                                    Lizard
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    <div className="post-people">
                                      <div className="avartar flex-item-user">
                                        <Stack direction="row" spacing={2}>
                                          <Avatar
                                            alt="Remy Sharp"
                                            src="https://mui.com/static/images/avatar/1.jpg"
                                          />
                                        </Stack>
                                        <p className="name-of-avatar">
                                          Jesica koli
                                        </p>
                                      </div>
                                      <div className="time-post flex-item-user">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="1em"
                                          viewBox="0 0 448 512"
                                        >
                                          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                        </svg>
                                        <p className="calender-time">
                                          02 december 2022
                                        </p>
                                      </div>
                                    </div>
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Did you come here for something in
                                    particular or just general Riker-bashing
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Item>
                          </Grid>
                          <Grid xs={12} md={12} lg={6}>
                            <Item className="box-shadow">
                              <Card sx={{ maxWidth: 345 }} className="m-w-100">
                                <CardMedia
                                  sx={{ height: 140 }}
                                  image="https://th.bing.com/th/id/OIP.PlvQBR4jZdeJEGvf5ZV0KgHaEx?pid=ImgDet&rs=1"
                                  title="green iguana"
                                />
                                <CardContent>
                                  <Typography gutterBottom component="div">
                                    <div className="ellipse">
                                      <label
                                        htmlFor="inputField"
                                        className="ellipse"
                                      >
                                        Travel
                                      </label>
                                    </div>
                                  </Typography>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="text-start"
                                  >
                                    Lizard
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    <div className="post-people">
                                      <div className="avartar flex-item-user">
                                        <Stack direction="row" spacing={2}>
                                          <Avatar
                                            alt="Remy Sharp"
                                            src="https://mui.com/static/images/avatar/1.jpg"
                                          />
                                        </Stack>
                                        <p className="name-of-avatar">
                                          Jesica koli
                                        </p>
                                      </div>
                                      <div className="time-post flex-item-user">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="1em"
                                          viewBox="0 0 448 512"
                                        >
                                          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                        </svg>
                                        <p className="calender-time">
                                          02 december 2022
                                        </p>
                                      </div>
                                    </div>
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Did you come here for something in
                                    particular or just general Riker-bashing
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>
                    </div>
                  </div>
                  <div className="comment-section">
                    <Grid container spacing={2}>
                      <Grid xs={6} md={8} lg={10}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <p className="total-comment">0 comment</p>
                        </Item>
                      </Grid>
                      <Grid xs={6} md={4} lg={2}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <button className="btn btn-yellow">login</button>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={12} lg={10}>
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
                                onClick={handleClick}
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
                                onClick={handleClick}
                              />
                            </Stack>
                          </div>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={12} lg={2}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <p>
                            sort by best
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 320 512"
                            >
                              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg>
                          </p>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={2} lg={1}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <div className="comment-place">
                            <div className="comment-input">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                              />
                            </div>
                          </div>
                        </Item>
                      </Grid>
                      <Grid xs={12} md={10} lg={11}>
                        <Item className="box-shadow d-flex-center-h-100">
                          <input
                            type="text"
                            className="enter-comment"
                            placeholder="Enter your comment"
                          />
                        </Item>
                      </Grid>
                      <Grid xs={12} md={4} lg={2}>
                        <Item className="text-start box-shadow">
                          <p>Login in with</p>
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
                          <p>OR SIGN UP WITH DISQUS</p>
                          <input type="text" className="" placeholder="name" />
                        </Item>
                      </Grid>
                      <Grid xs={12} md={6} lg={12}>
                        <div className="contain-comment">
                          <p>No comment</p>
                        </div>
                      </Grid>
                    </Grid>
                    <div className="line m-40"></div>
                  </div>
                </Item>
              </Grid>
              <Grid xs={12} md={6} lg={4}>
                <Item className="box-shadow">
                  <div className="blog-container-right">
                    <div className="top-author-contain">
                      <div className="Author-heading">
                        <h1 className="text-start">Top Author</h1>
                      </div>
                      <Grid container spacing={2}>
                        <Grid xs={12} md={12} lg={12}>
                          <Item className="d-flex-10">
                            <div className="avatar">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                              />
                            </div>
                            <div className="infor-author">
                              <h2 className="name-infor text-start">
                                Jenny Kia
                              </h2>
                              <p className="detail-infor m-0">
                                Fashion designer, Blogger, activist
                              </p>
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
                            <div className="avatar">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                              />
                            </div>
                            <div className="infor-author">
                              <h2 className="name-infor text-start">
                                Jenny Kia
                              </h2>
                              <p className="detail-infor m-0">
                                Fashion designer, Blogger, activist
                              </p>
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
                            <div className="avatar">
                              <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                              />
                            </div>
                            <div className="infor-author">
                              <h2 className="name-infor text-start">
                                Jenny Kia
                              </h2>
                              <p className="detail-infor m-0">
                                Fashion designer, Blogger, activist
                              </p>
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
                        <h2 className="text-start">Categories</h2>
                      </div>
                      <ul className="catergories-contain">
                        <li className="list-flex-item w-100">
                          <p>Lifestyle</p>
                          <p>09</p>
                        </li>
                        <div className="line"></div>
                        <li className="list-flex-item w-100">
                          <p>Lifestyle</p>
                          <p>09</p>
                        </li>
                        <div className="line"></div>
                        <li className="list-flex-item w-100">
                          <p>Lifestyle</p>
                          <p>09</p>
                        </li>
                      </ul>
                    </div>
                    <div className="today-update m-40">
                      <div className="head-today m-40">
                        <h2 className="text-start">Today's Update</h2>
                      </div>
                      <Grid container spacing={2}>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <p className="text-center m-20 number-of-post">14</p>
                            <p className="text-center detail-post">New Post</p>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <p className="text-center m-20 number-of-post">14</p>
                            <p className="text-center detail-post">New Post</p>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <p className="text-center m-20 number-of-post">14</p>
                            <p className="text-center detail-post">New Post</p>
                          </Item>
                        </Grid>
                        <Grid xs={12} md={12} lg={6}>
                          <Item className="item-update">
                            <p className="text-center m-20 number-of-post">14</p>
                            <p className="text-center detail-post">New Post</p>
                          </Item>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="instagram-post-contain m-40">
                      <div className="head-instagram-post">
                        <h2 className="text-start m-20">Instagram Post</h2>
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
                        <h2 className="text-start m-20">Search With Tag</h2>
                      </div>
                      <Grid container spacing={2}>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip label="Travel" className ="tag-item"/>
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip label="lifestyle" className ="tag-item"/>
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip label="fashion" className ="tag-item"/>
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip label="technology" className ="tag-item"/>
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip label="business" className ="tag-item"/>
                          </Item>
                        </Grid>
                        <Grid xs={6} md={6} lg={4}>
                          <Item className="box-shadow">
                            <Chip label="design" className ="tag-item"/>
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
export default BlogContent;

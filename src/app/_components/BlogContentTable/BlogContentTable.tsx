"use client";
import "./styles.scss";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
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
const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
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
          <Typography variant="body1" className="m-20">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const BlogContentTable = async () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className="table-conatainer-right">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6} lg={8}>
                <Item className="box-shadow p-1rem">
                  <div className="contain-main">
                    <Typography
                      variant="h2"
                      component="h2"
                      fontSize="28px"
                      className="text-start"
                    >
                      <b>
                        I Created a Developer Rap Video - Here's What I Learned
                      </b>
                    </Typography>
                    <Typography className="m-20">
                      Did you come here for something in particular or just
                      general Riker-bashing? And blowing into maximum warp
                      speed, you appeared for an instant to be in two places at
                      once. We have a saboteur aboard. We know you’re dealing in
                      stolen ore. But I wanna talk about the assassination
                      attempt
                    </Typography>
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
                      <Typography variant="body1" className="m-20">
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard.
                      </Typography>
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
                      <Typography variant="body1" className="m-20">
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard.
                      </Typography>
                      <Typography
                        variant="h2"
                        component="h2"
                        fontSize="28px"
                        className="text-start"
                      >
                        <b>
                          I Created a Developer Rap Video - Here's What I
                          Learned
                        </b>
                      </Typography>
                      <Typography variant="body1" className="m-20">
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard.
                      </Typography>
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
                      <Typography variant="body1" className="m-20">
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum
                      </Typography>
                      <Typography variant="body1" className="m-20">
                        I Created a Developer Rap Video
                      </Typography>
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
                            strokeWidth="1.5"
                          />
                          <path
                            d="M14 6.5L9 10"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M14 17.5L9 14"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z"
                            stroke="#1C274C"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
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
export default BlogContentTable;

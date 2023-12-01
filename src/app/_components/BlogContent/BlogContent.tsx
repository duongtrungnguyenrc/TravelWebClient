"use client";
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
import Chip from "@mui/material/Chip";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const BlogContent = () => {
  return (
    <section className="Blog-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={6} lg={8}>
                <Item className="box-shadow p-1rem" style={{boxShadow:"none"}}>
                  <div className="blog-contain-left">
                    <div
                      className="Blog-heading"
                      style={{ textAlign: "start" }}
                    >
                      <Chip
                        label="travel"
                        style={{
                          borderRadius: "3px",
                          width: "max-content",
                          fontSize: "12px",
                        }}
                        size="small"
                      />
                    </div>
                    <div className="heading-content">
                    </div>
                    <Typography variant="h2" component="h2" fontSize="28px" className="text-start">
                      <b>
                        I Created a Developer Rap Video - Here's What I Learned
                      </b>
                    </Typography>
                    <div className="post-people">
                      <div className="avartar flex-item-user">
                        <Stack direction="row" spacing={2}></Stack>
                        <Typography className="name-of-avatar">
                          Jesica koli
                        </Typography>
                      </div>
                      <div className="time-post flex-item-user">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                        </svg>
                        <Typography className="calender-time">
                          02 december 2022
                        </Typography>
                      </div>
                    </div>
                    <div className="image-title-post m-20">
                      <img
                        src="https://cdnmedia.baotintuc.vn/Upload/XjfgEPYM30O8z6jY3MHxSw/files/2019/10/310/Anh%201_Cau%20Vang%20-%20Sun%20World%20Ba%20Na%20Hills.jpg"
                        alt=""
                        className="img-post"
                      />
                    </div>
                  </div>
                  <div className="content-blog">
                    <div className="sub-detail-img">
                      <Typography variant="body1" className="m-20">
                        Did you come here for something in particular or just
                        general Riker-bashing? And blowing into maximum warp
                        speed, you appeared for an instant to be in two places
                        at once. We have a saboteur aboard. We know you’re
                        dealing in stolen ore. But I wanna talk about the
                        assassination attempt on Lieutenant Worf. Could someone
                        survive inside a transporter buffer for 75 years? Fate.
                        It protects fools, little children, and ships.
                      </Typography>
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

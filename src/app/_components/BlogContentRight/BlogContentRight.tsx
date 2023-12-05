"use client";

import { Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import "./styles.scss";
import { Blog } from "@/app/_types";

const BlogContentRight =  ({ posts } : { posts: Blog[] }) => {
  return (
    <Grid container spacing={2}>
      {
        posts?.map((post) => {
          return (
            <Grid key={post.id + post.author} item xs={12}>
                <Card component="a" href={`/blog/post/${post.id}`} className="post" sx={{boxShadow: "none"}}>
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
                            { post.description.substring(0, 150) }...
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
          )
        })
      }
    </Grid>
  );
};
export default BlogContentRight;

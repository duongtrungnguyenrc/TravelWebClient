// Produced by Duong Trung Nguyen

'use client'
import "./styles.scss";
import { Tour } from "@/app/_types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, Rating } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Link from "next/link";

const ServiceItem = ({ service } : { service : Tour }) => {

  return (
    <Link href={`explore/tour?id=${service.id}`}>
      <Card className="service-item">
        <Stack maxHeight="150" overflow="hidden" >
          <CardMedia
            className="card-media"
            component="img"
            image={service.img}
            height="150"
            alt={service.name}
          />
        </Stack>
        <CardContent style={{padding: "1rem"}}>
          <Stack direction="column" spacing={1}>
            <Rating name="read-only" value={5} readOnly size="small" />
            <Typography gutterBottom variant="h4" component="h4" fontSize="18px" noWrap textOverflow="ellipsis">
              {service.name}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={1} alignItems="center">
                <PersonIcon fontSize="small"/>
                <Typography variant="body2" color="text.secondary">
                  {service.maxPeople} guest
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <BedIcon fontSize="small"/>
                <Typography variant="body2" color="text.secondary">
                  {service.duration} days
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EditCalendarIcon fontSize="small"/>
                <Typography variant="body2" color="text.secondary">
                  2 people
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                {service.location}
              </Typography>
              <Typography variant="body2" color="red">
                {service.price} VNĐ
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ServiceItem;
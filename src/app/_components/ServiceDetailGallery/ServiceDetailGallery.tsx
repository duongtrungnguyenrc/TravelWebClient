// Produced by Duong Trung Nguyen

'use client'

import { Typography } from "@mui/material";
import "./styles.scss";
import Paragraph from "@/app/_types/TourParagraph";
import { Skeleton } from "@/app/_components";

const ServiceDetailGallery = ({ mainImg, sideImgs, startingPrice } : { mainImg : string | undefined, sideImgs: Paragraph[] | undefined, startingPrice: number | undefined }) => {
  return (
    <section className="service-gallery-site">
        <div className="gallery-left">
            <div className="temp-price">
                {
                    mainImg ? <Typography>Giá chỉ từ <b>{ startingPrice } VNĐ</b> chưa bao gồm vé máy bay</Typography> :
                    <Skeleton variant="text"/>
                }
            </div>
            <div className="gallery-item">
                {
                    mainImg ? <img src={ mainImg } alt={ mainImg } /> :
                    <Skeleton variant="rectangular" className="w-100 h-100" />
                }
            </div>
        </div>
        <div className="gallery-right">
            {
                sideImgs ? sideImgs.map((paragraph) => {
                    return  <div key={ paragraph.image.name } className="gallery-item">
                                <img src={paragraph.image.src} alt={ paragraph.image.name } />
                            </div>
                }) :
                <>
                    <div className="gallery-item">
                        <Skeleton variant="rectangular" className="w-100 h-100" />
                    </div>
                    <div className="gallery-item">
                        <Skeleton variant="rectangular" className="w-100 h-100" />
                    </div>
                    <div className="gallery-item">
                        <Skeleton variant="rectangular" className="w-100 h-100" />
                    </div>
                </>
            }
        </div>   
    </section>
  );
};
export default ServiceDetailGallery;
// Produced by Duong Trung Nguyen

'use client'

import { Typography } from "@mui/material";
import "./styles.scss";
import Paragraph from "@/app/_types/TourParagraph";
import { Skeleton } from "@/app/_components";
import ImageIcon from '@mui/icons-material/Image';

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
                    <div className="w-100 h-100 image-holder">
                        <ImageIcon sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, fontSize: "100px", color: "#e6e6e7"}}/>
                        <img src={ mainImg } alt={ mainImg } />
                    </div>
                }
            </div>
        </div>
        <div className="gallery-right">
            {
                sideImgs ? sideImgs.map((paragraph) => {
                    return  <div key={ paragraph.image?.name } className="gallery-item">
                                <div className="w-100 h-100 image-holder">
                                    <ImageIcon sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, fontSize: "100px", color: "#e6e6e7"}}/>
                                    <img src={paragraph.image?.src} alt={ paragraph.image?.name } />
                                </div>
                            </div>
                }) :
                <>
                    <div className="gallery-item">
                         <div className="w-100 h-100 image-holder">
                            <ImageIcon sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, fontSize: "100px", color: "#e6e6e7"}}/>
                        </div>
                    </div>
                    <div className="gallery-item">
                         <div className="w-100 h-100 image-holder">
                            <ImageIcon sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, fontSize: "100px", color: "#e6e6e7"}}/>
                        </div>
                    </div>
                    <div className="gallery-item">
                         <div className="w-100 h-100 image-holder">
                            <ImageIcon sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, fontSize: "100px", color: "#e6e6e7"}}/>
                        </div>
                    </div>
                </>
            }
        </div>   
    </section>
  );
};
export default ServiceDetailGallery;
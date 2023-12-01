// Produced by Duong Trung Nguyen

'use client'

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.scss"
import Paragraph from "@/app/_types/TourParagraph";
import { Skeleton } from "..";
import { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ServiceOverview = ( { paragraphs } : { paragraphs : Paragraph[] | undefined } ) => {

    return (
        <section>
            <Typography variant="h5" className="py-4">
                <b>Chuyến đi sẽ có gì?</b>
            </Typography>

            <div className="paragraphs">
            {
                paragraphs ? paragraphs.map((paragraph) => {
                    return  <Typography key={ paragraph.id } variant="body1" className="mt-4 paragraph">
                                {
                                    paragraph.image && <Image className="paragraph-image" width={450} height={250} src={ paragraph.image.src } alt={ paragraph.image.name }/>
                                }
                                { paragraph.content } 
                            </Typography>
                }) :
                <>
                    <div className="mt-4 paragraph">
                        <Skeleton variant="rectangular" className="paragraph-image" width={450} height={250}/>
                        <div className="d-flex flex-column gap-1">
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                        </div>
                        <Skeleton variant="text" className="mt-2"/>
                        <Skeleton variant="text" className="mt-2"/>
                        <Skeleton variant="text" className="mt-2"/>
                    </div>
                    <div className="mt-4 paragraph">
                        <Skeleton variant="rectangular" className="paragraph-image" width={450} height={250}/>
                        <div className="d-flex flex-column gap-1">
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                        </div>
                        <Skeleton variant="text" className="mt-2"/>
                        <Skeleton variant="text" className="mt-2"/>
                        <Skeleton variant="text" className="mt-2"/>
                    </div>
                    <div className="mt-4 paragraph">
                        <Skeleton variant="rectangular" className="paragraph-image" width={450} height={250}/>
                        <div className="d-flex flex-column gap-1">
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                            <Skeleton variant="text"/>
                        </div>
                        <Skeleton variant="text" className="mt-2"/>
                        <Skeleton variant="text" className="mt-2"/>
                        <Skeleton variant="text" className="mt-2"/>
                    </div>
                </>
            }
            </div>

        </section>
    );
};
export default memo(ServiceOverview);
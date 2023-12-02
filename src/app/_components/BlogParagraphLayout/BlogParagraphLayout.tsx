// Produced by Duong Trung Nguyen

import ImageIcon from '@mui/icons-material/Image';
import "./styles.scss";
import { Paragraph } from '@/app/_types/request/CreateBlogPostRequest';
import { ComponentType, ReactElement, ReactNode, cloneElement } from 'react';
import parse from "html-react-parser";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { TourParagraph } from "@/app/_types";

const actions = [
    { icon: <DeleteOutlineIcon />, name: 'Delete' },
    { icon: <EditIcon />, name: 'Edit' },
];

const ParagraphLayoutWrapper = ({ acceptModify, children } : 
    { acceptModify?: boolean, children: ReactElement }) => {

    return (
        <section className='paragraph-layout-wrapper'>
            {   
            acceptModify &&
                <div className='paragraph-modify-actions'>
                    <Box sx={{ transform: 'translateZ(0px)'}}>
                        <SpeedDial
                            ariaLabel=""
                            sx={{ position: 'absolute', bottom: 0, left: 10 }}
                            icon={<SpeedDialIcon/>}>

                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </div>
            }
            { children }
        </section>
    )
}

export const BlogParagraphLayoutFloatLeft = ({ paragraph, image, onClick, acceptModify } : { paragraph?: Paragraph | TourParagraph, image?: string, onClick?: Function, acceptModify?: boolean }) => {            
    return (
        <ParagraphLayoutWrapper acceptModify={acceptModify}>
            {paragraph ? 
            (
                    <div className="mt-4 paragraph-preview paragraph-float-left">
                    {
                        (image && image != "") && <img loading='lazy' className="paragraph-float-image" src={image} alt={(paragraph as Paragraph)?.imageName || (paragraph as TourParagraph)?.image?.name}/>
                    }
                    {
                        (!image || !paragraph.content) && (
                            <div className="d-flex">
                                {
                                    !image && (
                                        <div className="paragraph-preview-img col-6">
                                            <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                                        </div>
                                    )
                                }
                                {
                                    (!paragraph.content || paragraph.content.trim() == "") && (
                                        <div className={image ? "col-12 p-0" : "col-6 pr-0"}>
                                            <div className="paragraph-text"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                            <div className="paragraph-text mt-2"/>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                    { 
                        (paragraph.content && paragraph.content.trim() != "") ? parse(paragraph.content) : (
                            <>
                                <div className="paragraph-text mt-2"/>
                                <div className="paragraph-text mt-2"/>
                                <div className="paragraph-text mt-2"/>
                            </>
                        ) 
                    } 
                </div>
            ) :
            <div className='preview-paragraph-float' onClick={() => (onClick ? onClick() : null)}>
                <div className="d-flex">
                    <div className="paragraph-preview-img col-6">
                        <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                    </div>
                    <div className="col-6 pr-0">
                        <div className="paragraph-text"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                        <div className="paragraph-text mt-2"/>
                    </div>
                </div>
                <div className="paragraph-text mt-2"/>
                <div className="paragraph-text mt-2"/>
                <div className="paragraph-text mt-2"/>
            </div>}
        </ParagraphLayoutWrapper>
    );
};

export const BlogParagraphLayoutFloatRight = ({ paragraph, image, onClick, acceptModify } : { paragraph?: Paragraph | TourParagraph, image?: string, onClick?: Function, acceptModify?: boolean }) => {
    return (
        <ParagraphLayoutWrapper acceptModify={acceptModify}>
            {
                paragraph ? 
                (
                    <div className="mt-4 paragraph-preview paragraph-float-right">
                    {
                        (image && image != "") && <img loading='lazy' className="paragraph-float-image" src={image} alt={(paragraph as Paragraph)?.imageName || (paragraph as TourParagraph)?.image?.name}/>
                    }
                    {
                        (!image || !paragraph.content) && (
                            <div className="d-flex">
                            {
                                (!paragraph.content || paragraph.content.trim() == "") && (
                                    <div className={image ? "col-12 p-0" : "col-6 pl-0"}>
                                        <div className="paragraph-text"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                        <div className="paragraph-text mt-2"/>
                                    </div>
                                )
                            }
                            {
                                !image && (
                                    <div className="paragraph-preview-img col-6">
                                        <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                                    </div>
                                )
                            }
                        </div>
                        )
                    }
                    { 
                        (paragraph.content && paragraph.content != "") ? parse(paragraph.content) : (
                            <>
                                <div className="paragraph-text mt-2"/>
                                <div className="paragraph-text mt-2"/>
                                <div className="paragraph-text mt-2"/>
                            </>
                        ) 
                    } 
                </div>
                ) :
                <div className='preview-paragraph-float' onClick={() => (onClick ? onClick() : null)}>
                    <div className="d-flex">
                        <div className="col-6 pl-0">
                            <div className="paragraph-text"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                            <div className="paragraph-text mt-2"/>
                        </div>
                        <div className="paragraph-preview-img col-6">
                            <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                        </div>
                    </div>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                </div>
            }
        </ParagraphLayoutWrapper>
    );
};

export const BlogParagraphLayoutCenter = ({ paragraph, image, onClick, acceptModify } : { paragraph?: Paragraph | TourParagraph, image?: string, onClick?: Function, acceptModify?: boolean }) => {
    return (
        <ParagraphLayoutWrapper acceptModify={acceptModify}>
            {
                paragraph ? 
                (
                    <div className="mt-4 paragraph-preview paragraph-float-center">
                    {
                        (image && image != "") ? <img loading='lazy' className="paragraph-center-image" src={image} alt={(paragraph as Paragraph)?.imageName || (paragraph as TourParagraph)?.image?.name}/> :
                        <div className="d-flex">
                            <div className="paragraph-preview-img col-12">
                                <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                            </div>
                        </div>
                    }
                    { 
                        (paragraph.content && paragraph.content != "") ? parse(paragraph.content.replace("<p>", "").replace("</p>", "")) : (
                            <>
                                <div className="paragraph-text mt-2"/>
                                <div className="paragraph-text mt-2"/>
                                <div className="paragraph-text mt-2"/>
                            </>
                        ) 
                    } 
                </div>
                ) :
                <div className='preview-paragraph-center' onClick={() => (onClick ? onClick() : null)}>
                    <div className="d-flex">
                        <div className="paragraph-preview-img col-12">
                            <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                        </div>
                    </div>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                </div>
            }
        </ParagraphLayoutWrapper>
    );
};

export const BlogParagraphLayoutTextOnly = ({ paragraph, onClick, acceptModify } : { paragraph?: Paragraph | TourParagraph, onClick?: Function, acceptModify?: boolean }) => {
    return (
        <ParagraphLayoutWrapper acceptModify={acceptModify}>
            {
                (paragraph && paragraph.content != "") ? <div>{ parse(paragraph.content.replace("<p>", "").replace("</p>", "")) }</div> :
                <div className='preview-paragraph-center' onClick={() => (onClick ? onClick() : null)}>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                    <div className="paragraph-text mt-2"/>
                </div>
            }
        </ParagraphLayoutWrapper>
    );
};

const paragraphLayouts: Array<ComponentType<{ paragraph?: Paragraph | TourParagraph; image?: string, onClick?: Function, acceptModify?: boolean }>> = [
    BlogParagraphLayoutFloatLeft,
    BlogParagraphLayoutFloatRight,
    BlogParagraphLayoutCenter,
    BlogParagraphLayoutTextOnly
];

export default paragraphLayouts;

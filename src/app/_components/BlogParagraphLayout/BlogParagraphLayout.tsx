// Produced by Duong Trung Nguyen

import ImageIcon from '@mui/icons-material/Image';
import "./styles.scss";
import { Paragraph } from '@/app/_types/request/CreateBlogPostRequest';
import { ComponentType } from 'react';
import parse from "html-react-parser";

export const BlogParagraphLayoutFloatLeft = ({ paragraph, image, onClick } : { paragraph?: Paragraph, image?: string, onClick?: Function }) => {    
    return (
        paragraph ? 
        (
            <div className="mt-4 paragraph-preview paragraph-float-left">
                {
                    (image && image != "") ? <img loading='lazy' className="paragraph-float-image" src={image} alt={paragraph.imageName}/> :
                    <div className={"d-flex w-100"}>
                        <div className="paragraph-preview-img col-6">
                            <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                        </div>
                        {
                            (!paragraph.content|| paragraph.content.trim() == "") && (
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
                            )
                        }
                    </div>
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
        </div>
    );
};

export const BlogParagraphLayoutFloatRight = ({ paragraph, image, onClick } : { paragraph?: Paragraph, image?: string, onClick?: Function }) => {
    return (
        paragraph ? 
        (
            <div className="mt-4 paragraph-preview paragraph-float-right">
            {
                (image && image != "") ? <img loading='lazy' className="paragraph-float-image" src={image} alt={paragraph.imageName}/> :
                <div className="d-flex">
                    {
                        (!paragraph.content || paragraph.content.trim() == "") && (
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
                            </div>
                        )
                    }
                    <div className="paragraph-preview-img col-6">
                        <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                    </div>
                </div>
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
                </div>
                <div className="paragraph-preview-img col-6">
                    <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                </div>
            </div>
            <div className="paragraph-text mt-2"/>
            <div className="paragraph-text mt-2"/>
            <div className="paragraph-text mt-2"/>
        </div>
    );
};

export const BlogParagraphLayoutCenter = ({ paragraph, image, onClick } : { paragraph?: Paragraph, image?: string, onClick?: Function }) => {
    return (
        paragraph ? 
        (
            <div className="mt-4 paragraph-preview paragraph-float-center">
            {
                (image && image != "") ? <img loading='lazy' className="paragraph-center-image" src={image} alt={paragraph.imageName}/> :
                <div className="d-flex">
                    <div className="paragraph-preview-img col-12">
                        <ImageIcon sx={{fontSize: "100px", color: "#e6e6e7"}}/>
                    </div>
                </div>
            }
            { 
                (
                    paragraph.content && paragraph.content != "") ? parse(paragraph.content.replace("<p>", "").replace("</p>", "")) : (
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
    );
};

export const BlogParagraphLayoutTextOnly = ({ paragraph, onClick } : { paragraph?: Paragraph, onClick?: Function }) => {
    return (
        (paragraph && paragraph.content != "") ? parse(paragraph.content.replace("<p>", "").replace("</p>", "")) :
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
    );
};

const paragraphLayouts: Array<ComponentType<{ paragraph?: Paragraph; image?: string, onClick?: Function }>> = [
    BlogParagraphLayoutFloatLeft,
    BlogParagraphLayoutFloatRight,
    BlogParagraphLayoutCenter,
    BlogParagraphLayoutTextOnly
];

export default paragraphLayouts;

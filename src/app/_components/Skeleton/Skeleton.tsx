// Produced by Duong Trung Nguyen

'use client'

import { ReactNode } from "react";
import "./styles.scss";
import ImageIcon from '@mui/icons-material/Image';

const Skeleton = ({ variant, className, width, height, borderRadius, children } : { variant : string, className ?: string, width ?: number | string, height ?: number | string, borderRadius?: number | string, children?: ReactNode }) => {

    width && (width += "px");
    height && (height += "px");
    borderRadius && (borderRadius += "px");

    let skeletonClassName = "skeleton-item " + variant;

    if (className) {
      skeletonClassName += " " + className;
    }

    return  <div className={skeletonClassName} style={{ width, height, borderRadius }}>
              {
                variant === "image" && <ImageIcon sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: -1, fontSize: "100px", color: "#ededdd"}}/>
              }
              { children }
            </div>;
};

export default Skeleton;
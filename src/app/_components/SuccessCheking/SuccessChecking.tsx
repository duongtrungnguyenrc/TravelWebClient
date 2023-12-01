// Produced by Duong Trung Nguyen

import { Typography } from "@mui/material";
import "./styles.scss"

const SuccessChecking = ({ title, size } : { title: string, size?: number }) => {
  return (
      <div className="success-checkmark d-flex flex-column">
          <div className="check-icon" style={{transform: size ? `scale(${size})` : "none"}}>
              <span className="icon-line line-tip"></span>
              <span className="icon-line line-long"></span>
              <div className="icon-circle"></div>
              <div className="icon-fix"></div>
          </div>
        <Typography color="#4CAF50" className="" textAlign="center" variant="h4" sx={{fontSize: {xs: "24px", md: "28px", lg: "36px"}, marginTop: size ? (size * 35) + "px" : "70px"}}>
          {title}
        </Typography>
      </div>
  );
};
export default SuccessChecking;
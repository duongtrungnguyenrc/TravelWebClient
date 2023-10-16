// Produced by Duong Trung Nguyen

import { Stack, Typography } from "@mui/material";
import "./styles.scss"

const SuccessChecking = () => {
  return (
      <div className="success-checkmark d-flex flex-column">
          <div className="check-icon">
              <span className="icon-line line-tip"></span>
              <span className="icon-line line-long"></span>
              <div className="icon-circle"></div>
              <div className="icon-fix"></div>
          </div>
        <Typography zIndex={999} color="#4CAF50" className="" textAlign="center" variant="h4" sx={{fontSize: {xs: "24px", md: "28px", lg: "36px"}}}>
            Vui lòng kiểm tra email
        </Typography>
      </div>
  );
};
export default SuccessChecking;
// Produced by Duong Trung Nguyen

import { Stack, Typography } from "@mui/material";
import "./styles.scss"

const SuccessChecking = () => {
  return (
    <div className="d-flex flex-column">
        <div className="success-checkmark">
            <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
            </div>
        </div>
        <Typography zIndex={999} color="#4CAF50" className="" textAlign="center" variant="h4">
            Vui lòng kiểm tra email
        </Typography>
    </div>
  );
};
export default SuccessChecking;
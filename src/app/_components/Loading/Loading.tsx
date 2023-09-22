// Produced by Duong Trung Nguyen
import Backdrop from '@mui/material/Backdrop';
import "./styles.scss"

const Loading = () => {    
    return (
      <Backdrop sx={{ color: '#fff', zIndex: 999 }} open={true}>
        <div className="loading-container">
          <div className="item item-1"></div>
          <div className="item item-2"></div>
          <div className="item item-3"></div>
          <div className="item item-4"></div>
        </div>
      </Backdrop>
      
    );
  };
  export default Loading;
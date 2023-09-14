// Produced by Duong Trung Nguyen

import "./styles.scss";
import Clock from "../Clock/Clock";
import Weather from "../Weather/Weather";
import Calendar from "../Calendar/Calendar";

const DailyStatus = () => {

  return (
    <section className="container-weather flex-center">
    <div className="container-item d-flex">
        <div className="status-item flex-center">
            <Calendar/>
        </div>
        <div className="status-item flex-center">
            <Clock/>
        </div>
        <div className="status-item flex-center">
            <Weather/>
        </div>
    </div>
</section>
  );
};
export default DailyStatus;
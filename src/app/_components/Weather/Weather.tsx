import './styles.scss';
const Weather = () => {
  return (
    <section className="container-weather flex-center">
        <div className="container-item d-flex">
            <div className="date flex-center">
                <div className="image-icon"></div>
                <div className="current-date">
                    <p>Today date</p>
                </div>
                <div className="detail-date">
                    <p>March 15 2021</p>
                </div>

            </div>
            <div className="time flex-center">
                <div className="time-icon"></div>
                <div className="current-time">
                    <p>current time</p>
                </div>
                <div className="detail-time">
                    <p>08:12 PM</p>
                </div>

            </div>
            <div className="temperature flex-center">
                <div className="temperature-icon"></div>
                <div className="current-temperature">
                    <p>Temperature weather</p>
                </div>
                <div className="detail-temperature">
                    <p>14 ° C </p>
                </div>

            </div>
        </div>
    </section>
  );
};
export default Weather;

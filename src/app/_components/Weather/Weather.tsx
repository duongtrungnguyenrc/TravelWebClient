import './styles.scss';
const Weather = () => {
  return (
    <section className="container-weather flex-center">
        <div className="container-item d-flex">
            <div className="wheather-item flex-center">
                <div className="image-icon"></div>
                <div className="item-title">
                    <p>Today date</p>
                </div>
                <div className="detail-value">
                    <p>March 15 2021</p>
                </div>

            </div>
            <div className="wheather-item flex-center">
                <div className="image-icon"></div>
                <div className="item-title">
                    <p>current time</p>
                </div>
                <div className="detail-value">
                    <p>08:12 PM</p>
                </div>

            </div>
            <div className="wheather-item flex-center">
                <div className="image-icon"></div>
                <div className="item-title">
                    <p>Temperature weather</p>
                </div>
                <div className="detail-value">
                    <p>14 ° C </p>
                </div>

            </div>
        </div>
    </section>
  );
};
export default Weather;

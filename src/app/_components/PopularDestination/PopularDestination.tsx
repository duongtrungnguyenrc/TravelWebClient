import "./styles.scss";

const PopularDestination = () => {
  return (
    <section className="container-fluid">
        <div className="container p-0 pb-3 d-flex flex-column">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Địa điểm</h6>
                <h1 style={{fontFamily: 'Lora', fontWeight: "900"}}>Khám phá các địa điểm hot</h1>
            </div>
            <div className="row gap-0">
                <div className="col-12 col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden">
                        <img className="img-fluid" src="/images/destination-1.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Thành phố Hồ Chí Minh</h5>
                            <span>100 lượt thăm quan</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden">
                        <img className="img-fluid" src="/images/destination-2.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Đà Nẵng</h5>
                            <span>99 lượt thăm quan</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden">
                        <img className="img-fluid" src="/images/destination-3.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Đà Lạt</h5>
                            <span>80 lượt thăm quan</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden">
                        <img className="img-fluid" src="/images/destination-4.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Huế</h5>
                            <span>70 lượt thăm quan</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden">
                        <img className="img-fluid" src="/images/destination-5.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Hải Phòng</h5>
                            <span>60 lượt thăm quan</span>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden">
                        <img className="img-fluid" src="/images/destination-6.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Vũng Tàu</h5>
                            <span>50 lượt thăm quan</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
export default PopularDestination;
// Produced by Duong Trung Nguyen

import "./styles.scss";

const DefaultHero = () => {
  return (
    <section className="default-hero-site">
        <div className="hero-content">
            <h1 className="hero-title">Our Premium Room and Suites</h1>
            <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet, </p>
        </div>
        <div className="slider">
            <div className="slider-item">
                <img src="/images/home-slider-1.jpg" alt="" />
            </div>
            <div className="slider-item">
                <img src="/images/home-slider-2.jpg" alt="" />
            </div>
            <div className="slider-item">
                <img src="/images/home-slider-3.jpg" alt="" />
            </div>
            <div className="slider-item">
                <img src="/images/home-slider-4.jpg" alt="" />
            </div>
        </div>
    </section>
  );
};
export default DefaultHero;
// Produced by Duong Trung Nguyen

import "./styles.scss";

const ServiceDetailGallery = () => {
  return (
    <section className="service-gallery-site">
        <div className="gallery-left">
            <div className="temp-price">
                From <b>$2349</b> without flights
            </div>
            <div className="gallery-item">
                <img src="https://a.storyblok.com/f/51678/1749x1000/6839306a67/itinerary-hero-desktop-1-gssb.jpg/m/1180x690/smart/" alt="" />
            </div>
        </div>
        <div className="gallery-right">
            <div className="gallery-item">
                <img src="https://a.storyblok.com/f/51678/1000x1183/b06244000a/itinerary-hero-desktop-2-gssb.jpg/m/710x820/smart/" alt="" />
            </div>
            <div className="gallery-item">
                <img src="https://a.storyblok.com/f/51678/1066x1000/c58f5126e4/itinerary-hero-desktop-3-gssb.jpg/m/430x390/smart/" alt="" />
            </div>
            <div className="gallery-item">
                <img src="https://a.storyblok.com/f/51678/1066x1000/7b638ffe2a/itinerary-hero-desktop-4-gssb.jpg/m/430x390/smart/" alt="" />
            </div>
            <div className="action-frame">
                <div className="btn-all-wrapper">
                    <button className="btn btn-sm btn-light btn-see-all">See all (24)</button>
                </div>
            </div>
        </div>   
    </section>
  );
};
export default ServiceDetailGallery;
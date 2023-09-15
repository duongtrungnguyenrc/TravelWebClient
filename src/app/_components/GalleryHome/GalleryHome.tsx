// produced by Khai Nguyen

import "./styles.scss";

const GalleryHome = () => {
  return (
    <section className="container-gallery">
      <div className="gallery-site">
        <div className="content-gallery d-flex">
          <div className="content">
            <h1 className="heading-name text-light">Our Gallery</h1>
            <p className="detail-content text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
          <button className="btn btn-yellow w-30 btn-lg">Open Instagram</button>
        </div>
        <div className="gallery-list-container">
          <div className="gallery-list">
            <div className="column-collapse">
              <div className="column column-one">
                <div className="gallery-item">
                  <img src="/images/login-gallery-1.png" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/images/login-gallery-2.png" alt="" />
                </div>
              </div>
              <div className="column column-two">
                <div
                  className="gallery-item"
                
                >
                  <img src="/images/login-gallery-3.png" alt="" />
                </div>
              </div>
              <div className="column column-three">
                <div className="gallery-item">
                  <img src="/images/login-gallery-4.png" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/images/login-gallery-5.png" alt="" />
                </div>
              </div>
            </div>
            <div className="column-four">
              <div className="column-four-top">
                <div className="gallery-item">
                  <img src="/images/login-gallery-6.png" alt="" />
                </div>
              </div>
              <div className="column-four-bottom">
                <div className="gallery-item">
                  <img src="/images/login-gallery-7.png" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/images/login-gallery-8.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GalleryHome;

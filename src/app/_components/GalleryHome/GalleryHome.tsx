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
          <button className="btn btn-yellow w-30 btn-open">Open Instagram</button>
        </div>
        <div className="gallery-list-container">
          <div className="gallery-list">
            <div className="column-one collumn-100">
              <div
                className="gallery-item"
                style={{ backgroundColor: "#909090" }}
              ></div>
              <div
                className="gallery-item"
                style={{ backgroundColor: "#909090" }}
              ></div>
            </div>
            <div className="column-two collumn-100">
              <div
                className="gallery-item"
                style={{ backgroundColor: "#909090" }}
              ></div>
            </div>
            <div className="column-three collumn-100">
              <div
                className="gallery-item"
                style={{ backgroundColor: "#909090" }}
              ></div>
              <div
                className="gallery-item"
                style={{ backgroundColor: "#909090" }}
              ></div>
            </div>
            <div className="column-four collumn-100">
              <div
                className="gallery-item"
                style={{ backgroundColor: "#909090" }}
              ></div>
              <div className="gallery-item">
                <div
                  className="gallery-item"
                  style={{ backgroundColor: "#909090" }}
                ></div>
                <div
                  className="gallery-item"
                  style={{ backgroundColor: "#909090" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GalleryHome;

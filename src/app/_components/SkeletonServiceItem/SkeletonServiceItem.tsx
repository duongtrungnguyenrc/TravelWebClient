// Produced by Duong Trung Nguyen

import "./styles.scss";

const SkeletonServiceItem = () => {
  return (
    <div className="skeleton-service">
      <div className="service-top">
      </div>
      <div className="service-bottom">
        <div className="skeleton-text"></div>
        <ul className="service-info">
          <li className="skeleton-text">
            
          </li>
          <li className="skeleton-text">
            
          </li>
          <li className="skeleton-text">
            
          </li>
        </ul>
        <div className="service-detail">
          <div className="sleleton-btn"></div>
          <div className="price-detail">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonServiceItem;
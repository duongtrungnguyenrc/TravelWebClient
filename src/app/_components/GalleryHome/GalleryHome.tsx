// produced by Khai Nguyen

import { IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./styles.scss";

const GalleryHome = () => {
  return (
    <section className="container-gallery">
      <div className="gallery-site">
        <div className="content-gallery flex-between">
          <div className="content">
            <h1 className="heading-name">Our Gallery</h1>
            <p className="detail-content text-light">
            Chuyến hành trình qua những hình ảnh tuyệt đẹp của thế giới du lịch
            </p>
          </div>
          <div>
            <IconButton size='large'><FacebookIcon sx={{color: "#fff"}} fontSize='large'/></IconButton>
            <IconButton size='large'><LinkedInIcon sx={{color: "#fff"}} fontSize='large'/></IconButton>
            <IconButton size='large'><TwitterIcon sx={{color: "#fff"}} fontSize='large'/></IconButton>
            <IconButton size='large'><YouTubeIcon sx={{color: "#fff"}} fontSize='large'/></IconButton>
          </div>
        </div>
        <div className="gallery-list-container">
          <div className="gallery-list">
            <div className="column-collapse">
              <div className="column column-one">
                <div className="gallery-item">
                  <img loading='lazy' src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Hoi-An-soi-dong.jpg" alt="" />
                </div>
                <div className="gallery-item">
                  <img loading='lazy' src="https://cdn.pixabay.com/photo/2018/04/23/15/06/travel-3344520_640.jpg" alt="" />
                </div>
              </div>
              <div className="column column-two">
                <div
                  className="gallery-item"
                
                >
                  <img loading='lazy' src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/thap-ba-o-nha-trang-480x600.jpg" alt="" />
                </div>
              </div>
              <div className="column column-three">
                <div className="gallery-item">
                  <img loading='lazy' src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001357730516/Ba-Na-Hills-%2528Vietnam-Golden-Bridge%2529---Day-Tour-df788182-693c-4e75-b43c-cc4528c4d2fb.png?_src=imagekit&tr=c-at_max,h-720,q-60,w-1280" alt="" />
                </div>
                <div className="gallery-item">
                  <img loading='lazy' src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001485577571/Four-Islands-Excursion-in-South-Phu-Quoc---Day-Tour-afe24bd1-05d1-442f-9e4e-375c94a26a6b.png?_src=imagekit&tr=c-at_max,h-720,q-60,w-1280" alt="" />
                </div>
              </div>
            </div>
            <div className="column-four">
              <div className="column-four-top">
                <div className="gallery-item">
                  <img loading='lazy' src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/5596295958911/Ha-Long-Bay---1-Day-Cruise-Tour-91ecba85-5724-48c8-a65d-397ac56e31ea.png?_src=imagekit&tr=c-at_max,h-400,q-60,w-1280" alt="" />
                </div>
              </div>
              <div className="column-four-bottom">
                <div className="gallery-item">
                  <img loading='lazy' src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-nha-trang-tuyet-dep-820x586.jpg" alt="" />
                </div>
                <div className="gallery-item">
                  <img loading='lazy' src="https://cdn.pixabay.com/photo/2019/09/17/17/49/mountains-4484190_640.jpg" alt="" />
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

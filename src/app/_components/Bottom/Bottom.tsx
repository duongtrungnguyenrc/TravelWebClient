// Produced by Duong Trung Nguyen

import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './styles.scss'
import { memo } from 'react';

const Bottom = () => {
  return (
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row m-0 w-100">
                        <div className="col-lg-3 col-md-6 col-12 pt-3">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Travel VN - Mang chuyến đi tới cạnh giường bạn</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 pt-3">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 pt-3">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 pt-3">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <IconButton size='large'><FacebookIcon fontSize='large'/></IconButton>
                                    <IconButton size='large'><LinkedInIcon fontSize='large'/></IconButton>
                                    <IconButton size='large'><TwitterIcon fontSize='large'/></IconButton>
                                    <IconButton size='large'><YouTubeIcon fontSize='large'/></IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom py-5 d-flex align-items-center">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© Travel VN. 2023 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 d-flex justify-content-end">
                            <p>Product of <a href="" target="_blank">Javalorant team</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
};
export default memo(Bottom);

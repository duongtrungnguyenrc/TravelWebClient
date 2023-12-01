"use client";
import "./styles.scss";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
const TermAndCondition = () => {
  return (
    <section className="Term-Condition-conatainer">
        <div className="header-for-term">
            <Typography variant="h1" component="h1" fontSize="40px" className="text-start">
                  <b className="title">
                    Điều Khoảng chung
                  </b>
            </Typography>
        </div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="container container-fix-for-term">
          <Box sx={{ flexGrow: 1 }} className="box-container">
            <div className="container-content-for-term">
                <div className="content">
                  <div className="introduction">
                      <div className="m-20-for-term">
                        <Typography variant="body1">
                              Điều khoản này là sự thoả thuận đồng ý của quý khách khi sử dụng dịch vụ thanh toán trên trang web:
                              <a href="http://localhost:3000/term"><span> http://localhost:3000/term </span></a> 
                              của Công ty TNHH Travel VN  và những trang web của bên thứ ba. Việc quý khách đánh dấu vào ô “Đồng ý” và nhấp chuột vào thanh “Chấp nhận” nghĩa là quý khách đồng ý tất cả các điều khoản thỏa thuận trong các trang web này.
                        </Typography>
                      </div>
                      <ol className="m-20-for-term">
                            <li>
                               <Typography variant="body1">
                                    <b>
                                    <span>Điều khoản: </span> 
                                    </b>
                                     là những điều quy định giữa Travel VN và quý khách
                                </Typography>
                            </li>
                            <li>
                              <Typography variant="body1">
                                <b>
                                  <span>Bên thứ ba: </span> 
                                </b>
                                là những đơn vị liên kết với Công ty TNHH Travel VN (OnePay, Vietcombank) nhằm hỗ trợ việc thanh toán qua mạng cho quý khách
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="body1">
                                <b>
                                  <span>Vé điện tử: </span> 
                                </b>
                                là những thông tin và hành trình của quý khách cho chuyến đi được thể hiện trên một trang giấy mà quý khách có thể in ra được
                              </Typography>
                            </li>
                            <li>
                              <Typography variant="body1" className="m-20-for-term">
                                <b>
                                  <span>Về sở hữu bản quyền: </span> 
                                </b>
                              </Typography>
                            </li>
                      </ol>
                  </div>
                  <div className="license m-20-for-term">
                      <Typography variant="body1" className="m-20-for-term">
                                <b>
                                  Về thông tin khách hàng
                                </b>
                      </Typography>
                      <ol className="m-20-for-term">
                        <li>
                          <p>Đối với thông tin cá nhân: Những thông tin này chỉ để phục vụ cho nhu cầu xác nhận sự mua tour của quý khách và sẽ hiển thị những nội dung cần thiết trên vé điện tử. Công ty TNHH Travel VN cũng sẽ sử dụng những thông tin liên lạc này để gửi đến quý khách những sự kiện, những tin tức khuyến mãi và những ưu đãi đặc biệt nếu quý khách đồng ý. Những thông tin này của quý khách sẽ được Travel VN giữ mật và không tiết lộ cho bên thứ ba biết ngoại trừ sự đồng ý của quý khách hoặc là phải tiết lộ theo sự tuân thủ luật pháp quy định.</p>
                        </li>
                        <li>
                          <p>Đối với thông tin tài khoản: Những thông tin này sẽ được Công ty TNHH Travel VN và bên thứ ba áp dụng những biện pháp bảo mật cao nhất do các hệ thống thanh toán nổi tiếng trên thế giới như Visa và MasterCard cung cấp nhằm đảm bảo sự an toàn tuyệt đối của thông tin tài khoản quý khách.</p>
                        </li>
                      </ol>
                  </div>
                  <div className="linked-website m-20-for-term">
                      <Typography variant="body1">
                          <b>Về trang web liên kết</b>
                      </Typography>
                      <Typography variant="body1">
                        Các trang web của Công ty TNHH Travel VN có chứa những liên hệ kết nối với trang web của bên thứ ba. Việc liên kết trang web của bên thứ ba này nhằm chỉ cung cấp những sự tiện lợi cho quý khách chứ không phải là sự tán thành, chấp nhận những nội dung, thông tin sản phẩm của những trang web bên thứ ba. Công ty TNHH Travel VN sẽ không chiu trách nhiệm về bất cứ trách nhiệm pháp lý nào liên quan đến những thông tin gì trong các trang web bên thứ ba.
                      </Typography>
                  </div>
                  <div className="cancel-tour m-20-for-term">
                    <div className="m-20-for-term">
                      <Typography variant="body1" className="m-20-for-term">
                            <b>Về hủy tour</b>
                        </Typography>
                        <Typography variant="body1">
                          Trong trường hợp hủy tour, quý khách vui lòng gửi email thông báo hủy tour đến Công ty TNHH Travel VN. Công ty TNHH Travel VN sẽ trao đổi và xác nhận lại tất cả các thông tin của quý khách. Khi hoàn tất việc xác nhận thông tin, Travel VN sẽ hoàn tiền vào đúng tài khoản quý khách đã thanh toán sau khi trừ các khoản lệ phí hủy tour. Lệ phí hủy tour sẽ tùy thuộc vào từng tour tuyến quý khách đăng ký.
                        </Typography>
                    </div>
                      <ol>
                        <li className="section">
                          <Typography variant="body1" className="">
                            <b>Trách nhiệm của Công ty TNHH Travel VN</b>
                          </Typography>
                        </li>
                        <ol className="list-level-2 m-20-for-term">
                          <li>
                          <Typography variant="body1" className="m-20-for-term">
                            Công ty TNHH Travel VN  có nhiệm vụ bảo mật và lưu trữ an toàn các thông tin của quý khách với sự nghiêm túc cao nhất.
                          </Typography>
                          </li>
                          <li>
                          <Typography variant="body1" className="m-20-for-term">
                            Giải quyết những thắc mắc, sai sót, vi phạm mà quý khách có được trong quá trình thanh toán nếu do lỗi củaCông ty TNHH Travel VN.
                          </Typography>
                          </li>
                          <li>
                            <Typography variant="body1" className="m-20-for-term">
                                Đảm bảo thực hiện đầy đủ mọi dịch vụ theo đúng như chương trình mà quý khách đăng ký. Tuy nhiên, chúng tôi có toàn quyền thay đổi lộ trình hoặc hủy bỏ chuyến đi du lịch bất cứ lúc nào mà chúng tôi thấy cần thiết vì sự an toàn cho quý khách.
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="body1" className="m-20-for-term">
                              Mọi thay đổi nếu có sẽ được thông báo nhanh chóng cho quý khách ngay trước ngày khởi hành hoặc ngay sau khi phát hiện những phát sinh.

                            </Typography>
                          </li>
                        </ol>
                        <li className="section">
                          <Typography variant="body1" className="m-20-for-term">
                            <b>Trường hợp miễm trách nhiệm đối với Công ty TNHH Travel VN</b>
                          </Typography>
                        </li>
                        <ol className="list-level-2 m-20-for-term">
                          <li>
                          <Typography variant="body1">
                          Công ty TNHH Travel VN sẽ không chịu trách nhiệm về tất cả những thông tin mà quý khách cung cấp do bởi chúng tôi không dễ dàng xác nhận chính xác quý khách nào đăng ký thông tin.
                          </Typography>
                          </li>
                          <li>
                          <Typography variant="body1">
                          Công ty TNHH Travel VN không chịu trách nhiệm về việc thông tin của quý khách bị lấy cắp nếu như việc lấy cắp được thực hiện từ máy của quý khách do bị nhiễm virus máy tính hay do nguyên nhân nào khác.
                          </Typography>
                          </li>
                          <li>
                            <Typography variant="body1">
                            Công ty TNHH Travel VN sẽ không chịu trách nhiệm đối với quý khách nếu xảy ra việc hệ thống máy tính của quý khách bị hư hại trong khi đang thanh toán hoặc bị can thiệp liên quan tới việc sử dụng một trang bên ngoài.
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="body1">
                            Công ty TNHH Travel VN cũng không chịu trách nhiệm về việc mất dữ liệu thông tin của quý khách do sự cố khách quan như: thiên tai, hạn hán, hỏa hoạn, chiến tranh, …

                            </Typography>
                          </li>
                        </ol>
                        <li className="section">
                          <Typography variant="body1">
                            <b>Trách nhiệm của khách hàng.</b>
                          </Typography>
                        </li>
                        <ol className="list-level-2 m-20-for-term">
                          <li>
                          <Typography variant="body1">
                          Quý khách cam kết hoàn toàn chịu trách nhiệm về các thông tin cá nhân, thông tin thẻ tín dụng đã được khai báo là trung thực, chính xác. Nếu có sai sót, giả mạo hay tranh chấp phát sinh thì Công ty TNHH Travel VN có quyền hủy tour đã mua của quý khách.
                          </Typography>
                          </li>
                          <li>
                          <Typography variant="body1">
                          Quý khách có nhiệm vụ kiểm tra thông tin tài khoản để kịp thời để báo cho Công ty TNHH Travel VN nếu có những sự cố. Thời hạn trong vòng 30 ngày tính từ ngày thanh toán, Công ty TNHH Travel VN sẽ không nhận giải quyết bất cứ kiếu nại nào từ việc thanh toán.
                          </Typography>
                          </li>
                          <li>
                            <Typography variant="body1">
                            Công ty TNHH Travel VN sẽ không chịu trách nhiệm đối với quý khách nếu xảy ra việc hệ thống máy tính của quý khách bị hư hại trong khi đang thanh toán hoặc bị can thiệp liên quan tới việc sử dụng một trang bên ngoài.
                            </Typography>
                          </li>
                          <li>
                            <Typography variant="body1">
                            Quý khách phải tự áp dụng cài đặt các biện pháp phòng ngừa để bảo đảm rằng bất cứ lựa chọn nào của quý khách khi sử dụng các trang web của Công ty TNHH Travel VN không bị virus hoặc bất cứ mối đe dọa nào khác từ ngoài có thể can thiệp hoặc gây hư hại cho hệ thống máy tính của quý khách.
                            </Typography>
                          </li>
                        </ol>
                      </ol>
                  </div>
                </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </section>
  );
};
export default TermAndCondition;

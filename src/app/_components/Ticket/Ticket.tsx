import { Typography } from "@mui/material";
import "./styles.scss";
import { NewOrderRequest, Tour, TourDate, TourHotel } from "@/app/_types";
import { SuccessChecking } from "..";

const Ticket = ({ className, imageHeight } : { className?: string, imageHeight?: number }) => {
    const tour : Tour = Tour.getEmptyInstance();
    const currentTourDate : TourDate = TourDate.getEmptyInstance();
    const newOrder : NewOrderRequest = NewOrderRequest.getEmptyInstance(); 
    const chosenHotel : TourHotel = TourHotel.getEmptyInstance();

    return  <div className="checkout-site">
                <SuccessChecking title="Giao dịch thành công" size={1.5}/>
                    <div className={"ticket rounded " + (className || "")}>
                        <table className="w-100">
                            <tr>
                                <td colSpan={2} className="w-100">
                                    <div className="tour-img w-100">
                                        <img className="w-100" src="https://res.cloudinary.com/dwv7gmfcr/image/upload/v1695312938/danh-thang-hoa-binh_lp97jq.jpg" alt="image"/>
                                    </div>
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td colSpan={2}>
                                    <h2>{ tour?.name }</h2>
                                </td>
                            </tr>
                            <tr className="mt-2">
                                <td>
                                    <Typography className="title">Ngày khởi hành:</Typography>
                                </td>
                                <td>
                                    { currentTourDate?.departDate }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Ngày kết thúc:</Typography>
                                </td>
                                <td>
                                    { currentTourDate?.endDate }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Điểm xuất phát:</Typography>
                                </td>
                                <td>
                                    { tour?.depart }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Điểm đến:</Typography>
                                </td>
                                <td>
                                    { tour?.location }
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td>
                                    <h4 className="text-primary-yellow">Mã vé: ---</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Ngày đặt:</Typography>
                                </td>
                                <td>
                                    <span>{( new Date()).toLocaleString("vn") }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Người lớn:</Typography>
                                </td>
                                <td>
                                    <span>{ newOrder?.adults } x <span className="text-primary-yellow"><b>{ currentTourDate?.adultPrice.toLocaleString("vn") } VNĐ</b></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Trẻ em:</Typography>
                                </td>
                                <td>
                                    <span>{ newOrder?.children } x <span style={{color: "#c7923e" }}><b>{ currentTourDate?.childPrice.toLocaleString("vn") } VNĐ</b></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Phương thức thanh toán:</Typography>
                                </td>
                                <td>
                                    <span className="text-primary-yellow">{ newOrder?.paymentMethod.toLocaleUpperCase() }</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Trạng thái:</Typography>
                                </td>
                                <td>
                                    <span style={{color: "rgb(255, 0, 0)"}}><b>CHƯA THANH TOÁN</b></span>
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td colSpan={2}>
                                    <h4>Thông tin cá nhân</h4> 
                                </td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Họ và tên:</Typography></td>
                                <td className="text-end">{ newOrder?.contactInfo?.customerFullName || "---" }</td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Điện thoại:</Typography></td>
                                <td className="text-end">{ newOrder?.contactInfo.customerPhone || "---" }</td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Email:</Typography></td>
                                <td className="text-end">{ newOrder?.contactInfo.customerEmail || "---" }</td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Địa chỉ:</Typography></td>
                                <td className="text-end">{ newOrder?.contactInfo.customerAddress || "---" }</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td colSpan={2}>
                                    <h4>Dịch vụ thêm</h4> 
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <table className="w-100">
                                        <tr>
                                            <td style={{width: "100px"}}>
                                                <img className="hotel-img" src={ chosenHotel?.illustration } alt="hotel"/>
                                            </td>
                                            <td className="text-end">
                                                <p><b>{ chosenHotel?.name }</b></p>
                                                <p className="mt-2">
                                                    <span className="text-primary-yellow">
                                                        <b>0 VNĐ</b>
                                                    </span>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td colSpan={2}>
                                    <h4>Yêu cầu đặc biệt</h4> 
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>{ newOrder?.specialRequest }</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td colSpan={2} className="text-end">
                                    <h4 className="text-primary-yellow">Tổng cộng: 
                                        <span className="ml-2" style={{color: "#000000" }}>
                                            0 VNĐ
                                        </span>
                                    </h4>
                                </td>
                            </tr>
                        </table>
                    </div>
            </div>
};
export default Ticket;
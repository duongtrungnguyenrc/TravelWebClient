// Produced by Duong Trung Nguyen
'use client'

import "./styles.scss";
import { useState, useEffect, ChangeEvent, FormEventHandler, FormEvent, useRef } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Address, NewOrderRequest, Tour } from "@/app/_types";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { Box, Container, FormControl, FormLabel, Grid, IconButton, IconButtonProps, MenuItem, Modal, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from "react-toastify";
import { orderServices } from "@/app/_services";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_context/store";
import { SuccessChecking } from "..";
import { set } from "@/app/_context/CreateOrderSessionSlice";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    borderRadius: 3,
    bgcolor: 'background.paper',
    p: 5,
    pt: 7
};

const BookingForm = ({ tourDateId, tour, sessionResultInfo } : { tourDateId: number, tour: Tour, sessionResultInfo?: { sessionToken: string, status: string, orderId: string } }) => {

    const [ addressData , setAddressData ] = useState<{ 
        cities: { ProvinceID: number, ProvinceName: string }[], 
        districts: { DistrictID: number, DistrictName: string }[], 
        wards: { WardID: number, WardName: string }[] }>({cities: [], districts: [], wards: []});
    const [ address, setAddress ] = useState<Address>(Address.getEmptyInstance());
    const [ newOrder, setNewOrder ] = useState<NewOrderRequest>(NewOrderRequest.getEmptyInstance());
    const [ isIncludeHotel, setIsIncludeHotel ] = useState<boolean>(false);    
    const [ ticketExpanded,  setTicketExpanded ] = useState<boolean>(false);
    const [ createOrderStatus, setCreateOrderStatus ] = useState<boolean | null>(null);    

    const existingSessionToken = useSelector((state) => (state as RootState).createOrderSession);
    const dispath = useDispatch();

    const formRef = useRef<HTMLFormElement | null>(null);
    const router = useRouter();
    
    const currentTourDate = tour?.tourDate?.find((date) => date.id == tourDateId);
    const chosenHotel = tour.hotels.find((hotel) => hotel.id == newOrder.hotelId);
    const currentUser = useSelector((state) => (state as RootState).user);

    // Generate address field with GHN API

    const fetchCities = async () => {
        const response = await axios.get("https://online-gateway.ghn.vn/shiip/public-api/master-data/province", {
            headers: {
                Token: "c3ccf572-dd29-11ed-921c-de4829400020"
            }
        });
        if(response.status === 200) {
            setAddressData((prevState) => {
                return {
                    ...prevState,
                    cities: response.data.data
                }

            })
        }
    };

    const fetchDistricts = async () => {                        
        const response = await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${address.city.id}`, {
            headers: {
                Token: "c3ccf572-dd29-11ed-921c-de4829400020"
            }
        });
        if(response.status === 200) {
            setAddressData((prevState) => {
                return {
                    ...prevState,
                    districts: response.data.data
                }
            })
        }
    };

    const fetchWards = async () => {                        
        const response = await axios.get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${address.district.id}`, {
            headers: {
                Token: "c3ccf572-dd29-11ed-921c-de4829400020"
            }
        });
        if(response.status === 200) {
            setAddressData((prevState) => {
                return {
                    ...prevState,
                    wards: response.data.data
                }
            })
        }
    };

    useEffect(() => {   
        
        if(existingSessionToken && existingSessionToken != "" && existingSessionToken === sessionResultInfo?.sessionToken) {
            if(sessionResultInfo?.status) {
                dispath(set(""));
                setCreateOrderStatus(JSON.parse(sessionResultInfo.status));
            }
        }

        fetchCities();        
    }, []);

    useEffect(() => {
        setAddressData((prevState) => {
            return {
                ...prevState,
                districts: [],
                wards: []
            }
        });
        setAddress((prevState) => {
            return {
                ...prevState,
                district: { id: -1, name: "" },
                ward: { id: -1, name: "" }
            }
        });

        if(address.city.name != "") {
            fetchDistricts();
        }
    }, [ address.city.name ]);

    useEffect(() => {
        setAddressData((prevState) => {
            return {
                ...prevState,
                wards: []
            }
        });
        setAddress((prevState) => {
            return {
                ...prevState,
                ward: { id: -1, name: "" }
            }
        })
        if(address.district.name != "") {
            fetchWards();
        }
    }, [ address.district.name ]);


    const shareOnFacebook = () => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        window && window.open(shareUrl, '_blank');
    };

    const handleAddressChange = useDebouncedCallback((e) => {
        const name = e.target.name;
        const value : string = e.target.value;

        if(name.trim() === "addressDetail") {
            setAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: value
                }
            });
            setNewOrder((prevState) => {
                return {
                    ...prevState,
                    contactInfo: {
                        ...prevState.contactInfo,
                        customerAddress: `${value} - ${address.ward.name} - ${address.district.name} - ${address.city.name}`
                    }
                    
                }
            });
        }
        else {
            setAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: {
                        id: value.split("-")[0],
                        name: value.split("-")[1]
                    }
                }
            });
        }
    }, 300);

    const handleDataChange = useDebouncedCallback((e) => {
        const name : string = e.target.name;
        const value : string | number = e.target.value;

        setNewOrder((prevState) => {
            return {
                ...prevState,
                [name]: (typeof value === "number" ? +value : value)
            };
        });
    }, 300);

    const handleNewOrderCustomerInforChange = useDebouncedCallback((e) => {
        const name : string = e.target.name;
        const value : string = e.target.value;

        if(name == "firstName") {
            setNewOrder((prevState) => {
                return {
                    ...prevState,
                    contactInfo: {
                        ...prevState.contactInfo,
                        customerFullName: value,
                    }
                };
            });
        }

        setNewOrder((prevState) => {
            return {
                ...prevState,
                contactInfo: {
                    ...prevState.contactInfo,
                    [name]: value,
                }
            };
        });
    }, 300)

    const handleCreateOrder : FormEventHandler = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newOrderI = newOrder;
        currentTourDate && (newOrderI.tourDateId = currentTourDate?.id);
        newOrderI.amount = calculateTotalPrice();
        newOrderI.sessionToken = generateSessionToken();
        
        const response = await toast.promise(orderServices.createOrder(newOrderI, currentUser?.accessToken), {
            pending: "Đang xử lý",
            error: "Có lỗi đã xảy ra!",
            success: "Tạo đơn hàng thành công!"
        });

        if(response.status) {
            if(response.data) {
                dispath(set(newOrderI.sessionToken))
                router.replace(response.data as string);
            }
            else {

            }
            setNewOrder(NewOrderRequest.getEmptyInstance);
            formRef.current?.reset();
        } 
    }

    function calculateTotalPrice(): number {
        let totalPrice: number = 0;
    
        if (currentTourDate && newOrder && tour) {
            totalPrice += (+newOrder?.adults * currentTourDate.adultPrice) + ((newOrder?.children ? +newOrder?.children : 0) * currentTourDate.childPrice);
    
            if (newOrder?.hotelId !== -1 && tour?.hotels) {
                const selectedHotel = tour?.hotels.find((hotel: any) => +hotel.id === newOrder?.hotelId);
                if (selectedHotel && selectedHotel.rooms) {
                    const selectedRoom = selectedHotel.rooms.find((room: any) => room.type === newOrder?.roomType);
                    
                    if (selectedRoom) {
                        totalPrice += selectedRoom.price;
                    }
                }
            }
        }
    
        return totalPrice;
    }
    
    const generateSessionToken = () => {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    }    

    return (
       <Container maxWidth="xl" className="booking-group-site">
            <Modal
                open={createOrderStatus !== null}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <SuccessChecking title={ createOrderStatus === true ? "Giao dịch thành công! vui lòng kiểm tra email" : "Giao dịch thất bại" } size={1.5}/>
                </Box>
            </Modal>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={8}>
                    <form ref={formRef} action="" method="post" onSubmit={handleCreateOrder}>
                        <div className="bill-detail border rounded p-4">
                            <h1 className="form-title mb-3">Thông tin dịch vụ</h1>
                                <div className="multi-group">
                                    <div className="input-group">
                                        <label>Tên <span>*</span></label>
                                        <TextField type="first-name" name="firstName" placeholder="Vui lòng nhập tên" required onChange={handleNewOrderCustomerInforChange}/>
                                    </div>
                                    <div className="input-group">
                                        <label>Họ <span>*</span></label>
                                        <TextField type="Last-name" name="LastName" placeholder="Vui lòng nhập họ" required onChange={handleNewOrderCustomerInforChange}/>
                                    </div>
                                </div>
                                <div className="input-group mt-3">
                                    <label>Email <span>*</span></label>
                                    <TextField type="email" name="customerEmail" placeholder="Vui lòng nhập địa chỉ email" required onChange={handleNewOrderCustomerInforChange}/>
                                </div>
                                <div className="input-group mt-3">
                                    <label>Số điện thoại <span>*</span></label>
                                    <TextField type="phone" name="customerPhone" placeholder="Vui lòng nhập số điện thoại" required onChange={handleNewOrderCustomerInforChange}/>
                                </div>
                                <div className="w-100 d-flex mt-3">
                                    <div className="input-group col-6 p-0 pr-2">
                                        <label htmlFor="">Tỉnh/Thành phố <span>*</span></label>
                                        <FormControl>
                                            <Select
                                                displayEmpty
                                                name="city" 
                                                onChange={handleAddressChange}>
                                                <MenuItem disabled>
                                                    Chọn Tỉnh / Thành phố
                                                </MenuItem>
                                                {
                                                    addressData?.cities && addressData?.cities.map((city) => {
                                                        return <MenuItem key={city.ProvinceID} value={ city.ProvinceID + "-" + city.ProvinceName }>{ city.ProvinceName }</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="input-group col-6 p-0 pl-2">
                                        <label htmlFor="">Quận/Huyện <span>*</span></label>
                                        <FormControl>
                                            <Select
                                                displayEmpty
                                                name="district"
                                                onChange={handleAddressChange}
                                                required>
                                                <MenuItem defaultChecked disabled>
                                                    Chọn Quận / Huyện
                                                </MenuItem>
                                                {
                                                        addressData?.districts && addressData?.districts.map((district) => {
                                                        return <MenuItem key={district.DistrictID} value={ district.DistrictID + "-" + district.DistrictName }>{ district.DistrictName }</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="input-group mt-3">
                                    <label htmlFor="">Phường/Xã <span>*</span></label>
                                    <FormControl>
                                            <Select
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                name="ward"
                                                onChange={handleAddressChange}
                                                required>
                                                <MenuItem disabled>
                                                    Chọn Phường / Xã
                                                </MenuItem>
                                                {
                                                    addressData?.wards && addressData?.wards.map((ward) => {
                                                        return <MenuItem key={ward.WardID} value={ ward.WardID + "-" + ward.WardName }>{ ward.WardName }</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                </div>
                                <div className="input-group mt-3">
                                    <label htmlFor="">Địa chỉ <span>*</span></label>
                                    <TextField 
                                        placeholder="Địa chỉ chi tiết" 
                                        maxRows={10} 
                                        name="addressDetail" 
                                        onChange={handleAddressChange} 
                                        disabled={address.ward.name === ""} 
                                        required/>
                                </div>
                        </div>

                        <div className="bill-detail border rounded p-4">
                            <h1 className="form-title mb-4">Thông tin thanh toán</h1>
                            
                            <div className="d-flex flex-column gap-2">
                                <div className="multi-group">
                                    <div className="input-group">
                                        <label htmlFor="">Số lượng người lớn <span>*</span></label>
                                        <TextField 
                                            name="adults"
                                            defaultValue={0}
                                            type="number"
                                            onChange={handleDataChange}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="">Số lượng trẻ em <span>*</span></label>
                                        <TextField
                                            name="children"
                                            defaultValue={0}
                                            type="number"
                                            onChange={handleDataChange}
                                        />
                                    </div>
                                </div>
                                <FormControlLabel 
                                    control={<Checkbox onChange={(e) => setIsIncludeHotel((e as ChangeEvent<HTMLInputElement>).target.checked)}/>} 
                                    label="Đặt kèm khách sạn" 
                                />
                                {
                                    isIncludeHotel && 
                                    <div className="multi-group">
                                        <FormControl className="input-group">
                                            <Select
                                                name="hotelId"
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                onChange={handleDataChange}
                                                >
                                                <MenuItem defaultChecked>
                                                    Chọn khách sạn
                                                </MenuItem>
                                                {
                                                    tour?.hotels?.map((hotel) => {
                                                        return <MenuItem value={hotel.id}>{ hotel.name + " - " + hotel.address }</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                        <FormControl className="input-group">
                                            <Select
                                                name="roomType"
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                onChange={handleDataChange}
                                                >
                                                <MenuItem defaultChecked disabled>
                                                    Chọn loại phòng
                                                </MenuItem>
                                                {
                                                    newOrder.hotelId &&
                                                    tour.hotels.find((hotel) => hotel.id == newOrder.hotelId)?.rooms.map((room) => {
                                                        return <MenuItem value={room.type}>{ room.type + " - " + room.price }</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                }
                                
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Phương thức thanh toán <span>*</span></FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="paymentMethod"
                                        onChange={handleDataChange}
                                        aria-required
                                    >
                                        <FormControlLabel value="cash" control={<Radio required/>} label="Tiền mặt (Vé sẽ được kích hoạt khi thanh toán)" />
                                        <FormControlLabel value="vnpay" control={<Radio required/>} label="Chuyển khoản (Mọi giao dịch đều được bảo mật và mã hóa. Thông tin tài khoản sẽ không bao giờ được lưu lại.)" />
                                    </RadioGroup>
                                </FormControl>
                                <div className="input-group">
                                    <label>Yêu cầu đặt biệt</label>
                                    <textarea className="p-3" name="specialRequest" id="" cols={30} rows={10} onChange={handleDataChange}>

                                    </textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-yellow btn-big" 
                                    disabled={!NewOrderRequest.checkRequireInformation(newOrder)}>
                                    HOÀN TẤT HÓA ĐƠN
                                </button>
                            </div>
                        </div>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <div className="ticket rounded">
                        <table className="w-100">
                            <tr>
                                <td colSpan={2} className="w-100 p-0">
                                    <div className="tour-img w-100">
                                        <img className="w-100" src={ tour?.img } alt="image"/>
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
                            {
                                ticketExpanded && 
                                <>
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
                                    {
                                        newOrder?.hotelId &&
                                        <>
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
                                                                        <b>{ chosenHotel?.rooms.find((room) => room.type == newOrder.roomType)?.price } VNĐ</b>
                                                                    </span>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </>
                                    }
                                    {
                                        newOrder?.specialRequest &&
                                        <>
                                            <hr/>
                                            <tr>
                                                <td colSpan={2}>
                                                    <h4>Yêu cầu đặc biệt</h4> 
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>{ newOrder?.specialRequest }</td>
                                            </tr>
                                        </>
                                    }
                                </>
                            }
                            <hr/>
                            <tr>
                                <td colSpan={2} className="text-end">
                                    <h4 className="text-primary-yellow">Tổng cộng: 
                                        <span className="ml-2" style={{color: "#000000" }}>
                                            { calculateTotalPrice().toLocaleString("vn") } VNĐ
                                        </span>
                                    </h4>
                                </td>
                                <td>
                                    <IconButton onClick={() => setTicketExpanded((prevState) => !prevState)}>
                                        <ExpandMoreIcon sx={{transition: "0.3s", transform: (ticketExpanded ? "rotate(180deg)" : "none")}}/>
                                    </IconButton>
                                </td>
                            </tr>
                        </table>
                    </div>
                </Grid>
            </Grid>
       </Container>
    );
};
export default BookingForm;
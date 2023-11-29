// Produced by Duong Trung Nguyen
'use client'

import "./styles.scss";
import { useState, useEffect, ReactEventHandler, ChangeEvent, SyntheticEvent, FormEventHandler, FormEvent, useRef } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { NewOrderRequest, Tour, TourDate } from "@/app/_types";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, FormControl, FormLabel, Grid, IconButton, IconButtonProps, MenuItem, Radio, RadioGroup, Select, Stack, TextField, TextareaAutosize, Typography, styled } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { toast } from "react-toastify";
import { orderServices } from "@/app/_services";
import { useRouter } from "next/navigation";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
  

const BookingForm = ({ tourDateId, tour } : { tourDateId: number, tour: Tour }) => {

    const [ addressData , setAddressData ] = useState<{ 
        cities: { ProvinceID: number, ProvinceName: string }[], 
        districts: { DistrictID: number, DistrictName: string }[], 
        wards: { WardID: number, WardName: string }[] }>({cities: [], districts: [], wards: []});
    const [ address, setAddress ] = useState<{ 
        city: { id: number, name: string },
        district: { id: number, name: string }, 
        ward: { id: number, name: string },
        addressDetail: string 
    }>({ city: { id: -1, name: "" }, district: { id: -1, name: "" }, ward: { id: -1, name: "" }, addressDetail: "" });
    const [expanded, setExpanded] = useState(false);
    const [ isIncludeHotel, setIsIncludeHotel ] = useState<boolean>(false);    
    const [ newOrder, setNewOrder ] = useState<NewOrderRequest>(NewOrderRequest.getEmptyInstance());

    const formRef = useRef<HTMLFormElement | null>(null);
    const router = useRouter();

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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

    // Handle change address fields

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

    // Handle form data change

    const handleDataChange : ReactEventHandler  = useDebouncedCallback((e) => {
        const name : string = e.target.name;
        const value : string = e.target.value;

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
        
        const response = await toast.promise(orderServices.createOrder(newOrderI), {
            pending: "Đang xử lý",
            error: "Có lỗi đã xảy ra!"
        });

        if(response.status) {
            if(response.data) {
                router.replace(response.data as string);
            }
            setNewOrder(NewOrderRequest.getEmptyInstance);
            formRef.current?.reset();
        } 
    }

    
    const currentTourDate = tour?.tourDate?.find((date) => date.id == tourDateId);

    function calculateTotalPrice(): number {
        let totalPrice: number = 0;
    
        if (currentTourDate && newOrder && tour) {
            totalPrice += (+newOrder.adults * currentTourDate.adultPrice) + ((newOrder.children ? +newOrder?.children : 1) * currentTourDate.childPrice);
    
            if (newOrder.hotelId !== -1 && tour.hotels) {
                const selectedHotel = tour.hotels.find((hotel: any) => +hotel.id === newOrder.hotelId);
                if (selectedHotel && selectedHotel.rooms) {
                    const selectedRoom = selectedHotel.rooms.find((room: any) => room.type === newOrder.roomType);
                    
                    if (selectedRoom) {
                        totalPrice += selectedRoom.price;
                    }
                }
            }
        }
    
        return totalPrice;
    }
    

    return (
       <Container maxWidth="xl" className="booking-group-site">
            <Grid container spacing={3}>
                <Grid item xs={8}>
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
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                name="city" 
                                                onChange={handleAddressChange}>
                                                <MenuItem disabled>
                                                    <em>Chọn Tỉnh / Thành phố</em>
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
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                name="district"
                                                onChange={handleAddressChange}
                                                required>
                                                <MenuItem disabled>
                                                    <em>Chọn Quận / Huyện</em>
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
                                                    <em>Chọn Phường / Xã</em>
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

                        <div className="bill-detail border rounded p-4 mt-4">
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
                                    <FormControl>
                                        <Select
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                            <MenuItem disabled>
                                                <em>Chọn khách sạn</em>
                                            </MenuItem>
                                            {
                                                tour?.hotels?.map((hotel) => {
                                                    return <MenuItem value={hotel.id}>{ hotel.name + " - " + hotel.address }</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
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
                <Grid item xs={4}>
                    <Card className="border">
                        <CardHeader
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title={ tour?.name }
                            subheader={ currentTourDate?.departDate + " - " + currentTourDate?.endDate }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={ tour.img }
                            alt={ tour.name }
                            className="rounded"
                        />
                        <CardContent>
                            <Stack direction="row"  justifyContent="space-between">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <PersonIcon color="action"/>
                                    <Typography variant="body1" color="text.secondary">
                                    { tour.maxPeople } guest
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <BedIcon color="action"/>
                                    <Typography variant="body1" color="text.secondary">
                                    { currentTourDate?.duration } days
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <EditCalendarIcon color="action"/>
                                    <Typography variant="body1" color="text.secondary">
                                    2 people
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" className="mt-3" justifyContent="space-between">
                                <Typography variant="body1" color="text.secondary">
                                    { tour.location }
                                </Typography>
                                <Typography variant="body1" color="red">
                                    { currentTourDate?.adultPrice.toLocaleString("en") } VNĐ
                                </Typography>
                            </Stack>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share" onClick={shareOnFacebook}>
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Mô tả:</Typography>

                                {
                                    tour?.overview?.paragraphs.map((paragraph, index) => {
                                        return  <Typography paragraph maxHeight={250} variant="body2">
                                                    <img src={paragraph.image.src} alt="" className={"w-50" + (index % 2 === 0 ? " mr-3" : " ml-3")} style={{float: (index % 2 === 0 ? "left" : "right" )}}/>
                                                    { paragraph.content.substring(0, 320) + "..." }
                                                </Typography>
                                    })
                                }
                            </CardContent>
                        </Collapse>
                    </Card>
                    <div className={"order mt-4" + (expanded ? " hide" : "")}>
                        <table className="w-100">
                            <tr>
                                <td colSpan={2} className="w-100">
                                    <div className="tour-img w-100">
                                        <img className="w-100" src={ tour.img } alt="image"/>
                                    </div>
                                </td>
                            </tr>
                            <hr/>
                            <tr>
                                <td colSpan={2}>
                                    <h2>{ tour.name }</h2>
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
                                    { tour.depart }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Điểm đến:</Typography>
                                </td>
                                <td>
                                    { tour.location }
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
                                    <span>{ newOrder.adults } x <span className="text-primary-yellow"><b>{ currentTourDate?.adultPrice.toLocaleString("vn") } VNĐ</b></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Trẻ em:</Typography>
                                </td>
                                <td>
                                    <span>{ newOrder.children } x <span style={{color: "#c7923e" }}><b>{ currentTourDate?.childPrice.toLocaleString("vn") } VNĐ</b></span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Typography className="title">Phương thức thanh toán:</Typography>
                                </td>
                                <td>
                                    <span className="text-primary-yellow">{ newOrder.paymentMethod }</span>
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
                                <td className="text-end">{ newOrder.contactInfo.customerFullName }</td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Điện thoại:</Typography></td>
                                <td className="text-end">{ newOrder.contactInfo.customerPhone }</td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Email:</Typography></td>
                                <td className="text-end">{ newOrder.contactInfo.customerEmail }</td>
                            </tr>
                            <tr>
                                <td><Typography className="title">Địa chỉ:</Typography></td>
                                <td className="text-end">{ newOrder.contactInfo.customerAddress }</td>
                            </tr>
                            {
                                newOrder.hotelId &&
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
                                                        <img className="hotel-img" src="hotelImg}" alt="hotel"/>
                                                    </td>
                                                    <td className="text-end">
                                                        <p><b>hotelName</b></p>
                                                        <p className="mt-2"><span className="text-primary-yellow"><b>hotelPrice VNĐ</b></span></p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </>
                            }
                            {
                                newOrder.specialRequest &&
                                <>
                                    <hr/>
                                    <tr>
                                        <td colSpan={2}>
                                            <h4>Yêu cầu đặc biệt</h4> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>{ newOrder.specialRequest }</td>
                                    </tr>
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
                                    <IconButton>
                                        <ExpandMoreIcon />
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
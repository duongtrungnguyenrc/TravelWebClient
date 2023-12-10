// Produced by Duong Trung Nguyen

'use client';

import { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    LinearProgress,
    MenuItem,
    Modal,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';
import { toast } from 'react-toastify';
import { Address, CreateTourRequest, Tour, TourDate, TourSchedule } from '@/app/_types';
import axios from 'axios';
import { TourTypeConstant, TourVehicalConstant } from '@/app/_constants';
import { DatePicker, ServiceStepper } from '..';
import './styles.scss';
import { tourServices } from '@/app/_services';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1500,
    borderRadius: 3,
    bgcolor: 'background.paper',
    overflow: 'hidden',
};

const nestedStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 3,
    width: 300,
    bgcolor: 'background.paper',
    overflow: 'hidden',
    p: 0,
};

const addParagraphModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 3,
    width: 900,
    height: 800,
    bgcolor: 'background.paper',
    overflow: 'hidden',
    p: 2,
};

const CreateTourModal = ({
    isOpen,
    dismiss,
    accessToken,
    tour
}: {
    isOpen: boolean;
    dismiss: Function;
    accessToken: string;
    tour?: Tour
}) => {
    const [departAddressData, setDepartAddressData] = useState<{
        cities: { ProvinceID: number; ProvinceName: string }[];
        districts: { DistrictID: number; DistrictName: string }[];
        wards: { WardID: number; WardName: string }[];
    }>({ cities: [], districts: [], wards: [] });
    const [destinationAddressData, setDestinationAddressData] = useState<{
        cities: { ProvinceID: number; ProvinceName: string }[];
        districts: { DistrictID: number; DistrictName: string }[];
        wards: { WardID: number; WardName: string }[];
    }>({ cities: [], districts: [], wards: [] });
    const [departAddress, setDepartAddress] = useState<Address>(Address.getEmptyInstance());
    const [destinationAddress, setDestinationAddress] = useState<Address>(Address.getEmptyInstance());
    const [newTour, setNewTour] = useState<CreateTourRequest>(CreateTourRequest.getEmptyInstance());
    const [schedule, setSchedule] = useState<TourSchedule>(TourSchedule.getEmptyInstance());
    const [tourDate, setTourDate] = useState<TourDate>(TourDate.getEmptyInstance());
    const [isOpenDatePicker, setIsOpenDatePicker] = useState<number>(-1);

    const fetchCities = async () => {
        const response = await axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
            headers: {
                Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
            },
        });
        if (response.status === 200) {
            setDepartAddressData((prevState) => {
                return {
                    ...prevState,
                    cities: response.data.data,
                };
            });
            setDestinationAddressData((prevState) => {
                return {
                    ...prevState,
                    cities: response.data.data,
                };
            });
        }
    };

    const fetchDepartDistricts = async () => {
        const response = await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${departAddress.city.id}`,
            {
                headers: {
                    Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
                },
            }
        );
        if (response.status === 200) {
            setDepartAddressData((prevState) => {
                return {
                    ...prevState,
                    districts: response.data.data,
                };
            });
        }
    };

    const fetchDepartWards = async () => {
        const response = await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${departAddress.district.id}`,
            {
                headers: {
                    Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
                },
            }
        );
        if (response.status === 200) {
            setDepartAddressData((prevState) => {
                return {
                    ...prevState,
                    wards: response.data.data,
                };
            });
        }
    };

    const fetchDestinationDistricts = async () => {
        const response = await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${destinationAddress.city.id}`,
            {
                headers: {
                    Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
                },
            }
        );
        if (response.status === 200) {
            setDestinationAddressData((prevState) => {
                return {
                    ...prevState,
                    districts: response.data.data,
                };
            });
        }
    };

    const fetchDestinationWards = async () => {
        const response = await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${destinationAddress.district.id}`,
            {
                headers: {
                    Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
                },
            }
        );
        if (response.status === 200) {
            setDestinationAddressData((prevState) => {
                return {
                    ...prevState,
                    wards: response.data.data,
                };
            });
        }
    };

    useEffect(() => {
        fetchCities();
        if(tour) {
            const currentTour : CreateTourRequest = {
                tour: {
                    id: tour.id,
                    name: tour.name,
                    vehicle: tour.vehicle,
                    tourType: "",
                    depart: tour.depart,
                    destination: tour.location,
                    tourDate: [],
                    schedules: [],
                    hotelIds: [],
                    paragraphs: [],
                },
                images: []
            }
        }
    }, []);

    useEffect(() => {
        setDepartAddressData((prevState) => {
            return {
                ...prevState,
                districts: [],
                wards: [],
            };
        });
        setDepartAddress((prevState) => {
            return {
                ...prevState,
                district: { id: -1, name: '' },
                ward: { id: -1, name: '' },
            };
        });

        if (departAddress.city.name != '') {
            fetchDepartDistricts();
        }
    }, [departAddress.city.name]);

    useEffect(() => {
        setDepartAddressData((prevState) => {
            return {
                ...prevState,
                wards: [],
            };
        });
        setDepartAddress((prevState) => {
            return {
                ...prevState,
                ward: { id: -1, name: '' },
            };
        });
        if (departAddress.district.name != '') {
            fetchDepartWards();
        }
    }, [departAddress.district.name]);

    useEffect(() => {
        setDestinationAddressData((prevState) => {
            return {
                ...prevState,
                districts: [],
                wards: [],
            };
        });
        setDestinationAddress((prevState) => {
            return {
                ...prevState,
                district: { id: -1, name: '' },
                ward: { id: -1, name: '' },
            };
        });

        if (destinationAddress.city.name != '') {
            fetchDestinationDistricts();
        }
    }, [destinationAddress.city.name]);

    useEffect(() => {
        setDestinationAddressData((prevState) => {
            return {
                ...prevState,
                wards: [],
            };
        });
        setDestinationAddress((prevState) => {
            return {
                ...prevState,
                ward: { id: -1, name: '' },
            };
        });
        if (destinationAddress.district.name != '') {
            fetchDestinationWards();
        }
    }, [destinationAddress.district.name]);

    const handleAddressChange = useDebouncedCallback((e) => {
        const name = e.target.name;
        const value: string = e.target.value;

        if (name.trim() === 'addressDetail') {
            setDepartAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        } else {
            setDepartAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: {
                        id: value.split('/')[0],
                        name: value.split('/')[1],
                    },
                };
            });
        }
    }, 300);

    const handleDestinationAddressChange = useDebouncedCallback((e) => {
        const name = e.target.name;
        const value: string = e.target.value;

        if (name.trim() === 'addressDetail') {
            setDestinationAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        } else {
            setDestinationAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: {
                        id: value.split('/')[0],
                        name: value.split('/')[1],
                    },
                };
            });
        }
    }, 300);

    const handleScheduleChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setSchedule((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }, 300);

    const handleScheduleTimeChange = (year: number, month: number, day: number, key: '') => {
        setSchedule((prevState) => {
            return {
                ...prevState,
                [key]: day + '/' + month + '/' + year,
            };
        });
        setIsOpenDatePicker(-1);
    };

    const handleAddSchedule = () => {
        if (schedule.time && schedule.content) {
            setNewTour((prevState) => {
                return {
                    ...prevState,
                    tour: {
                        ...prevState.tour,
                        schedules: [...prevState.tour.schedules, schedule],
                    },
                };
            });
            setSchedule(TourSchedule.getEmptyInstance());
        } else {
            toast.error('Vui lòng nhập thời gian và thông tin lịch trình!');
        }
    };

    const handleTourDateChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTourDate((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    });

    const handleTourDateSelect = useDebouncedCallback((e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;

        setTourDate((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }, 300);

    const handleTourDateTimeChange = (year: number, month: number, day: number, key: string) => {
        setTourDate((prevState) => {
            return {
                ...prevState,
                [key]: day + '/' + month + '/' + year,
            };
        });
    };

    const handleAddTourDate = () => {
        setNewTour((prevState) => {
            return {
                ...prevState,
                tour: {
                    ...prevState.tour,
                    tourDate: [...prevState.tour.tourDate, tourDate],
                },
            };
        });
    };

    const handleNewTourSelect = useDebouncedCallback((e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;

        setNewTour((prevState) => {
            return {
                ...prevState,
                tour: {
                    ...prevState.tour,
                    [name]: value,
                },
            };
        });
    }, 300);

    const handleNewTourChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewTour((prevState) => {
            return {
                ...prevState,
                tour: {
                    ...prevState.tour,
                    [name]: value,
                },
            };
        });
    }, 300);

    const handleCreateTour = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = { ...newTour };
        payload.tour.depart = `${departAddress.addressDetail} - ${departAddress.ward.name} - ${departAddress.district.name} - ${departAddress.city.name}`;
        payload.tour.destination = `${destinationAddress.addressDetail} - ${destinationAddress.ward.name} - ${destinationAddress.district.name} - ${destinationAddress.city.name}`;

        const response = await toast.promise(tourServices.create(payload, accessToken), {
            pending: 'Đang xử lý...',
        });

        if (response.status) {
            toast.success('Tạo tour mới thành công');
        } else {
            toast.error(response.message);
        }
    };

    return (
        <Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Modal open={isOpenDatePicker === 0} onClose={() => setIsOpenDatePicker(-1)}>
                    <Box sx={nestedStyle}>
                        <DatePicker
                            onChange={handleScheduleTimeChange}
                            displayDate={schedule.time}
                            title="Thời gian"
                            valueKey="time"
                        />
                    </Box>
                </Modal>
                <Modal open={isOpenDatePicker === 1} onClose={() => setIsOpenDatePicker(-1)}>
                    <Box sx={nestedStyle}>
                        <DatePicker
                            onChange={handleTourDateTimeChange}
                            displayDate={tourDate.departDate}
                            title="Thời gian"
                            valueKey="departDate"
                        />
                    </Box>
                </Modal>
                <Modal open={isOpenDatePicker === 2} onClose={() => setIsOpenDatePicker(-1)}>
                    <Box sx={nestedStyle}>
                        <DatePicker
                            onChange={handleTourDateTimeChange}
                            displayDate={tourDate.endDate}
                            title="Thời gian"
                            valueKey="endDate"
                        />
                    </Box>
                </Modal>
                <Modal open={false}>
                    <Box className="d-flex flex-column" sx={addParagraphModalStyle}>
                        <div className="h-100"></div>
                        <form action="">
                            <div className="input-group w-100">
                                <label htmlFor="">Mô tả</label>
                                <div className="d-flex w-100 gap-1">
                                    <TextField
                                        className="w-100"
                                        placeholder="Nhập tên tour"
                                        multiline
                                        rows={5}
                                        maxRows={5}
                                    />
                                </div>
                            </div>
                            <div className="flex-center">
                                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                    Tải ảnh lên
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-end gap-1">
                            <Button variant="contained" type="reset" color="error" onClick={() => dismiss(false)}>
                                Hủy
                            </Button>
                            <Button variant="contained" type="submit">
                                Lưu
                            </Button>
                        </div>
                    </Box>
                </Modal>
                <form method="post" className="p-4 gap-1" onSubmit={handleCreateTour}>
                    <div className="row">
                        <div className="col-4">
                            <div className="w-100">
                                <Typography variant="h6" color="primary">
                                    <strong>Thông tin tổng quan:</strong>
                                </Typography>
                                <div className="input-group mt-3">
                                    <label htmlFor="">Tên tour:</label>
                                    <TextField defaultValue={tour?.name} placeholder="Nhập tên tour" name="name" onChange={handleNewTourChange} required/>
                                </div>
                                <div className="input-group mt-3">
                                    <label htmlFor="">Phương tiện</label>
                                    <Select displayEmpty name="vehicle" onChange={handleNewTourSelect} required>
                                        <MenuItem disabled defaultChecked>
                                            {
                                                tour ? tour.vehicle : "Phương tiện di chuyển"
                                            }
                                        </MenuItem>
                                        {TourVehicalConstant?.map((vehical) => {
                                            return (
                                                <MenuItem key={vehical} value={vehical}>
                                                    {vehical}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </div>
                                <div className="d-flex mt-2 gap-1">
                                    <Button variant="contained">Thêm hình ảnh</Button>
                                    <Button variant="contained">Thêm mô tả</Button>
                                    <Button variant="contained">Xem trước</Button>
                                </div>
                            </div>

                            {/* // location */}

                            <div className="w-100 mt-3">
                                <Typography variant="h6" color="primary">
                                    <strong>Thông tin điểm xuất phát:</strong>
                                </Typography>
                                <div className="w-100 d-flex mt-3">
                                    <div className="input-group col-6 p-0 pr-2">
                                        <label htmlFor="">
                                            Tỉnh/Thành phố <span>*</span>
                                        </label>
                                        <FormControl>
                                            <Select displayEmpty name="city" onChange={handleAddressChange}>
                                                <MenuItem disabled>Chọn Tỉnh / Thành phố</MenuItem>
                                                {departAddressData?.cities &&
                                                    departAddressData?.cities.map((city) => {
                                                        return (
                                                            <MenuItem
                                                                key={city.ProvinceID}
                                                                value={city.ProvinceID + '/' + city.ProvinceName}>
                                                                {city.ProvinceName}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="input-group col-6 p-0 pl-2">
                                        <label htmlFor="">
                                            Quận/Huyện <span>*</span>
                                        </label>
                                        <FormControl>
                                            <Select
                                                displayEmpty
                                                name="district"
                                                onChange={handleAddressChange}
                                                required>
                                                <MenuItem defaultChecked disabled>
                                                    Chọn Quận / Huyện
                                                </MenuItem>
                                                {departAddressData?.districts &&
                                                    departAddressData?.districts.map((district) => {
                                                        return (
                                                            <MenuItem
                                                                key={district.DistrictID}
                                                                value={
                                                                    district.DistrictID + '/' + district.DistrictName
                                                                }>
                                                                {district.DistrictName}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="w-100 d-flex mt-2">
                                    <div className="input-group mt-3 pr-2">
                                        <label htmlFor="">
                                            Phường/Xã <span>*</span>
                                        </label>
                                        <FormControl>
                                            <Select
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                name="ward"
                                                onChange={handleAddressChange}
                                                required>
                                                <MenuItem disabled>Chọn Phường / Xã</MenuItem>
                                                {departAddressData?.wards &&
                                                    departAddressData?.wards.map((ward) => {
                                                        return (
                                                            <MenuItem
                                                                key={ward.WardID}
                                                                value={ward.WardID + '/' + ward.WardName}>
                                                                {ward.WardName}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="input-group mt-3 pl-2">
                                        <label htmlFor="">
                                            Địa chỉ <span>*</span>
                                        </label>
                                        <TextField
                                            placeholder="Địa chỉ chi tiết"
                                            maxRows={10}
                                            name="addressDetail"
                                            onChange={handleAddressChange}
                                            disabled={departAddress.ward.name === ''}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 mt-3">
                                <Typography variant="h6" color="primary">
                                    <strong>Thông tin điểm đến:</strong>
                                </Typography>
                                <div className="w-100 d-flex mt-3">
                                    <div className="input-group col-6 p-0 pr-2">
                                        <label htmlFor="">
                                            Tỉnh/Thành phố <span>*</span>
                                        </label>
                                        <FormControl>
                                            <Select displayEmpty name="city" onChange={handleDestinationAddressChange}>
                                                <MenuItem disabled>Chọn Tỉnh / Thành phố</MenuItem>
                                                {destinationAddressData?.cities &&
                                                    destinationAddressData?.cities.map((city) => {
                                                        return (
                                                            <MenuItem
                                                                key={city.ProvinceID}
                                                                value={city.ProvinceID + '/' + city.ProvinceName}>
                                                                {city.ProvinceName}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="input-group col-6 p-0 pl-2">
                                        <label htmlFor="">
                                            Quận/Huyện <span>*</span>
                                        </label>
                                        <FormControl>
                                            <Select
                                                displayEmpty
                                                name="district"
                                                onChange={handleDestinationAddressChange}
                                                required>
                                                <MenuItem defaultChecked disabled>
                                                    Chọn Quận / Huyện
                                                </MenuItem>
                                                {destinationAddressData?.districts &&
                                                    destinationAddressData?.districts.map((district) => {
                                                        return (
                                                            <MenuItem
                                                                key={district.DistrictID}
                                                                value={
                                                                    district.DistrictID + '/' + district.DistrictName
                                                                }>
                                                                {district.DistrictName}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="w-100 d-flex mt-2">
                                    <div className="input-group mt-3 pr-2">
                                        <label htmlFor="">
                                            Phường/Xã <span>*</span>
                                        </label>
                                        <FormControl>
                                            <Select
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                name="ward"
                                                onChange={handleDestinationAddressChange}
                                                required>
                                                <MenuItem disabled>Chọn Phường / Xã</MenuItem>
                                                {destinationAddressData?.wards &&
                                                    destinationAddressData?.wards.map((ward) => {
                                                        return (
                                                            <MenuItem
                                                                key={ward.WardID}
                                                                value={ward.WardID + '/' + ward.WardName}>
                                                                {ward.WardName}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="input-group mt-3 pl-2">
                                        <label htmlFor="">
                                            Địa chỉ <span>*</span>
                                        </label>
                                        <TextField
                                            placeholder="Địa chỉ chi tiết"
                                            maxRows={10}
                                            name="addressDetail"
                                            onChange={handleDestinationAddressChange}
                                            disabled={destinationAddress.ward.name === ''}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="w-100">
                                <Typography variant="h6" color="primary">
                                    <strong>Thông tin lịch trình:</strong>
                                </Typography>
                                <div className="input-group mt-3">
                                    <label htmlFor="">Thời gian</label>
                                    <TextField
                                        placeholder="Nhập thời gian"
                                        name="time"
                                        value={schedule.time}
                                        aria-readonly
                                        onClick={() => setIsOpenDatePicker(0)}
                                    />
                                </div>
                                <div className="input-group mt-2">
                                    <label htmlFor="">Nội dung:</label>
                                    <TextField
                                        placeholder="Nhập nội dung lịch trình"
                                        multiline
                                        name="content"
                                        rows={5}
                                        onChange={handleScheduleChange}
                                    />
                                </div>
                                <Button
                                    type="button"
                                    className="w-100 mt-2"
                                    variant="contained"
                                    onClick={handleAddSchedule}>
                                    Thêm lịch trình
                                </Button>
                                <Box sx={{ overflow: 'auto', height: '400px' }} className="mt-3">
                                    <ServiceStepper steps={newTour.tour.schedules} />
                                </Box>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="w-100">
                                <Typography variant="h6" color="primary">
                                    <strong>Thông tin đợt mở tour:</strong>
                                </Typography>
                                <div className="w-100 d-flex mt-3">
                                    <div className="input-group pr-2">
                                        <label htmlFor="">Ngày bắt đầu:</label>
                                        <TextField
                                            name="departDate"
                                            value={tourDate.departDate}
                                            onClick={() => setIsOpenDatePicker(1)}
                                        />
                                    </div>
                                    <div className="input-group pl-2">
                                        <label htmlFor="">Ngày kết thúc:</label>
                                        <TextField
                                            name="endDate"
                                            value={tourDate.endDate}
                                            onClick={() => setIsOpenDatePicker(2)}
                                        />
                                    </div>
                                </div>
                                <div className="w-100 d-flex mt-2">
                                    <div className="input-group pr-2">
                                        <label htmlFor="">Giá vé người lớn:</label>
                                        <TextField
                                            name="adultPrice"
                                            type="number"
                                            defaultValue={0}
                                            onChange={handleTourDateChange}
                                        />
                                    </div>
                                    <div className="input-group pl-2">
                                        <label htmlFor="">Giá vé trẻ em:</label>
                                        <TextField
                                            name="childPrice"
                                            type="number"
                                            defaultValue={0}
                                            onChange={handleTourDateChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-100 d-flex mt-2 mb-1">
                                    <div className="input-group pr-2">
                                        <label htmlFor="">Số người tối đa:</label>
                                        <TextField
                                            name="maxPeople"
                                            type="number"
                                            defaultValue={0}
                                            onChange={handleTourDateChange}
                                        />
                                    </div>
                                    <div className="input-group pl-2">
                                        <label htmlFor="">Loại tour:</label>
                                        <Select displayEmpty name="dateType" onChange={handleTourDateSelect}>
                                            <MenuItem disabled defaultChecked>
                                                Loại tour
                                            </MenuItem>
                                            {TourTypeConstant.map((type) => {
                                                return (
                                                    <MenuItem key={type.value} value={type.value}>
                                                        {type.name}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </div>
                                </div>
                                <Button
                                    variant="contained"
                                    className="mt-2 w-100"
                                    type="button"
                                    onClick={handleAddTourDate}>
                                    Thêm đợt
                                </Button>
                                <table className="date-list w-100 mt-5">
                                    <thead>
                                        <th>Số người</th>
                                        <th>Thời gian</th>
                                        <th>Giá</th>
                                    </thead>
                                    {newTour.tour.tourDate.map((date) => {
                                        return (
                                            <tr>
                                                <td>{date.maxPeople}</td>
                                                <td>
                                                    {date.departDate} - {date.endDate}
                                                </td>
                                                <td>{date.adultPrice.toLocaleString('vn')}</td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-1">
                        <Button variant="contained" type="reset" color="error" onClick={() => dismiss(false)}>
                            Hủy
                        </Button>
                        <Button variant="contained" type="submit">
                            Lưu
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default memo(CreateTourModal);

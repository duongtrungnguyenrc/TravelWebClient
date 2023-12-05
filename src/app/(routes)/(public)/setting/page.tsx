// Produced by Duong Trung Nguyen

'use client';

import { RootState } from '@/app/_context/store';
import { set } from '@/app/_context/userSlice';
import { authServices } from '@/app/_services';
import { Address, LoginResponse, UpdatePasswordRequest, UpdateUserProfileRequest, User } from '@/app/_types';
import {
    Avatar,
    Box,
    Button,
    Chip,
    FormControl,
    Grid,
    MenuItem,
    Modal,
    Select,
    TextField,
    Tooltip,
    Typography,
    styled,
} from '@mui/material';
import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    borderRadius: 3,
    bgcolor: 'background.paper',
    p: 4,
};

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

const PersonalInfoPage = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [addressData, setAddressData] = useState<{
        cities: { ProvinceID: number; ProvinceName: string }[];
        districts: { DistrictID: number; DistrictName: string }[];
        wards: { WardID: number; WardName: string }[];
    }>({ cities: [], districts: [], wards: [] });
    const [address, setAddress] = useState<Address>(Address.getEmptyInstance());
    const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
    const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);
    const [changingPassword, setChangingPassword] = useState<UpdatePasswordRequest>(
        UpdatePasswordRequest.getEmptyInstance()
    );
    const [changingProfile, setChangingProfile] = useState<UpdateUserProfileRequest>(
        UpdateUserProfileRequest.getEmptyInstance(
            currentUser.user?.fullName,
            currentUser.user?.address,
            currentUser.user?.phone
        )
    );
    const [changingAvatar, setChangingAvatar] = useState<{ src: string; resource: File } | null>(null);

    const dispath = useDispatch();

    // Generate address field with GHN API

    const fetchCities = async () => {
        const response = await axios.get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
            headers: {
                Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
            },
        });
        if (response.status === 200) {
            setAddressData((prevState) => {
                return {
                    ...prevState,
                    cities: response.data.data,
                };
            });
        }
    };

    const fetchDistricts = async () => {
        const response = await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${address.city.id}`,
            {
                headers: {
                    Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
                },
            }
        );
        if (response.status === 200) {
            setAddressData((prevState) => {
                return {
                    ...prevState,
                    districts: response.data.data,
                };
            });
        }
    };

    const fetchWards = async () => {
        const response = await axios.get(
            `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${address.district.id}`,
            {
                headers: {
                    Token: 'c3ccf572-dd29-11ed-921c-de4829400020',
                },
            }
        );
        if (response.status === 200) {
            setAddressData((prevState) => {
                return {
                    ...prevState,
                    wards: response.data.data,
                };
            });
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
                wards: [],
            };
        });
        setAddress((prevState) => {
            return {
                ...prevState,
                district: { id: -1, name: '' },
                ward: { id: -1, name: '' },
            };
        });

        if (address.city.name != '') {
            fetchDistricts();
        }
    }, [address.city.name]);

    useEffect(() => {
        setAddressData((prevState) => {
            return {
                ...prevState,
                wards: [],
            };
        });
        setAddress((prevState) => {
            return {
                ...prevState,
                ward: { id: -1, name: '' },
            };
        });
        if (address.district.name != '') {
            fetchWards();
        }
    }, [address.district.name]);

    const handleAddressChange = useDebouncedCallback((e) => {
        const name = e.target.name;
        const value: string = e.target.value;

        if (name.trim() === 'addressDetail') {
            setAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        } else {
            setAddress((prevState) => {
                return {
                    ...prevState,
                    [name]: {
                        id: value.split('-')[0],
                        name: value.split('-')[1],
                    },
                };
            });
        }
    }, 300);

    const handlePasswordChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setChangingPassword((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }, 300);

    const handleProfileChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setChangingProfile((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }, 300);

    const handleSubmitPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await toast.promise(authServices.updatePassword(changingPassword, currentUser.accessToken), {
            pending: 'Đang xử lý...',
            success: 'Đổi mật khẩu thành công',
        });

        if (response.status) {
            setIsEditingPassword(false);
        } else {
            toast.error(response.message);
        }
    };

    const handleSubmitProfile = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let payload: UpdateUserProfileRequest = {...changingProfile};

        if(address.addressDetail && address.city && address.district && address.ward) {
            payload = {
                ...changingProfile,
                address: address.addressDetail +
                ' - ' +
                address.ward.name +
                ' - ' +
                address.district.name +
                ' - ' +
                address.city.name,
            };
        }

        const response = await toast.promise(authServices.updateProfile(payload, currentUser.accessToken), {
            pending: 'Đang xử lý...',
            success: 'Đổi thông tin người dùng thành công',
        });

        if (response.status) {
            dispath(
                set({
                    accessToken: currentUser.accessToken,
                    user: {
                        id: (response.data as LoginResponse)?.id,
                        email: (response.data as LoginResponse)?.email,
                        address: (response.data as LoginResponse)?.address,
                        fullName: (response.data as LoginResponse)?.fullName,
                        phone: (response.data as LoginResponse)?.phone,
                        roles: (response.data as LoginResponse)?.roles,
                        avatar: (response.data as LoginResponse)?.avatar,
                        active: (response.data as LoginResponse)?.active,
                    } as User,
                })
            );
            UpdateUserProfileRequest.getEmptyInstance(
                currentUser.user?.fullName,
                currentUser.user?.address,
                currentUser.user?.phone
            );
            setIsEditingProfile(false);
        } else {
            toast.error(response.message);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const file = files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event: ProgressEvent<FileReader>) => {
                setChangingAvatar({
                    src: event.target?.result + '',
                    resource: file,
                });

                handleSubmitAvatar(file);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmitAvatar = async (newAvatar: File) => {
        const response = await toast.promise(authServices.updateAvatar(newAvatar, currentUser.accessToken), {
            pending: 'Đang xử lý...',
        });

        if (response.status) {
            toast.success('Đổi ảnh đại diện thành công');
            dispath(
                set({
                    accessToken: currentUser.accessToken,
                    user: {
                        id: (response.data as LoginResponse)?.id,
                        email: (response.data as LoginResponse)?.email,
                        address: (response.data as LoginResponse)?.address,
                        fullName: (response.data as LoginResponse)?.fullName,
                        phone: (response.data as LoginResponse)?.phone,
                        roles: (response.data as LoginResponse)?.roles,
                        avatar: (response.data as LoginResponse)?.avatar,
                        active: (response.data as LoginResponse)?.active,
                    } as User,
                })
            );
        } else {
            toast.error(response.message);
        }
    };

    return (
        <Grid container spacing={5} className="py-5">
            <Modal
                open={isEditingPassword}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form method="post" onSubmit={handleSubmitPassword}>
                        <div className="input-group">
                            <label htmlFor="">Mật khẩu cũ</label>
                            <TextField
                                type="password"
                                name="oldPassword"
                                placeholder="Mật khẩu cũ"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Mật khẩu mới</label>
                            <TextField
                                type="password"
                                name="newPassword"
                                placeholder="Mật khẩu mới"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Xác nhận mật khẩu mới</label>
                            <TextField
                                type="password"
                                name="confirmPassword"
                                placeholder="Xác nhận khẩu mới"
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="d-flex justify-content-end gap-1">
                            <Button variant="outlined" type="reset" onClick={() => setIsEditingPassword(false)}>
                                Hủy
                            </Button>
                            <Button variant="outlined" type="submit">
                                Lưu
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
            <div className="d-flex align-items-center gap-2 mb-4 w-100 px-4">
                <div className="position-relative">
                    <Tooltip title="Thay đổi ảnh đại diện">
                        <label className="cursor-pointer">
                            <Avatar
                                sx={{ width: 100, height: 100 }}
                                src={changingAvatar ? changingAvatar.src : currentUser?.user?.avatar}
                            />
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleFileChange}
                                accept=".png,.jpg,.jpeg,.JPEG"
                            />
                        </label>
                    </Tooltip>
                </div>
                <ul className="list-unstyled ml-3">
                    <li className="d-flex align-items-center gap-2">
                        <Typography variant="h4">
                            <strong>{currentUser?.user?.fullName}</strong>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">{currentUser?.user?.email}</Typography>
                    </li>
                </ul>
            </div>
            <Grid item xs={12} md={7} lg={9} className="pr-5">
                <div>
                    <Typography variant="h5">
                        <strong>Thông tin cá nhân</strong>
                    </Typography>
                    <form method="post" className="mt-5" onSubmit={handleSubmitProfile}>
                        <div className="multi-group">
                            <div className="input-group">
                                <label htmlFor="name">Họ và tên</label>
                                <TextField
                                    type="text"
                                    name="fullName"
                                    defaultValue={currentUser?.user?.fullName}
                                    disabled={!isEditingProfile}
                                    onChange={handleProfileChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <TextField
                                    type="text"
                                    name="phone"
                                    defaultValue={currentUser?.user?.phone}
                                    placeholder={currentUser?.user?.phone || 'Thiếu thông tin số điện thoại'}
                                    disabled={!isEditingProfile}
                                    onChange={handleProfileChange}
                                />
                            </div>
                        </div>
                        <div className="w-100 d-flex mt-3">
                            <div className="input-group col-6 p-0 pr-2">
                                <label htmlFor="">
                                    Tỉnh/Thành phố <span>*</span>
                                </label>
                                <FormControl>
                                    <Select
                                        disabled={!isEditingProfile}
                                        displayEmpty
                                        name="city"
                                        onChange={handleAddressChange}>
                                        <MenuItem disabled defaultChecked>
                                            {currentUser?.user?.address
                                                ? currentUser.user?.address.split(' - ')[3]
                                                : 'Thiếu thông tin Tỉnh / Thành phố'}
                                        </MenuItem>
                                        {addressData?.cities &&
                                            addressData?.cities.map((city) => {
                                                return (
                                                    <MenuItem
                                                        key={city.ProvinceID}
                                                        value={city.ProvinceID + '-' + city.ProvinceName}>
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
                                        disabled={!isEditingProfile}
                                        displayEmpty
                                        name="district"
                                        onChange={handleAddressChange}>
                                        <MenuItem defaultChecked>
                                            {currentUser?.user?.address
                                                ? currentUser.user?.address.split(' - ')[2]
                                                : 'Thiếu thông tin Quận / Huyện'}
                                        </MenuItem>
                                        {addressData?.districts &&
                                            addressData?.districts.map((district) => {
                                                return (
                                                    <MenuItem
                                                        key={district.DistrictID}
                                                        value={district.DistrictID + '-' + district.DistrictName}>
                                                        {district.DistrictName}
                                                    </MenuItem>
                                                );
                                            })}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <label htmlFor="">
                                Phường/Xã <span>*</span>
                            </label>
                            <FormControl>
                                <Select
                                    disabled={!isEditingProfile}
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                    name="ward"
                                    onChange={handleAddressChange}>
                                    <MenuItem>
                                        {currentUser?.user?.address
                                            ? currentUser.user?.address.split(' - ')[1]
                                            : 'Thiếu thông tin Phường / Xã'}
                                    </MenuItem>
                                    {addressData?.wards &&
                                        addressData?.wards.map((ward) => {
                                            return (
                                                <MenuItem key={ward.WardID} value={ward.WardID + '-' + ward.WardName}>
                                                    {ward.WardName}
                                                </MenuItem>
                                            );
                                        })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="input-group mt-3">
                            <label htmlFor="">
                                Địa chỉ <span>*</span>
                            </label>
                            <TextField
                                placeholder={
                                    currentUser?.user?.address
                                        ? currentUser.user?.address.split(' - ')[0]
                                        : 'Thiếu thông tin địa chỉ'
                                }
                                maxRows={10}
                                name="addressDetail"
                                onChange={handleAddressChange}
                                disabled={!isEditingProfile}
                            />
                        </div>
                        <div className="button-group d-flex flex-end">
                            <Button variant="outlined" onClick={() => setIsEditingProfile((prevState) => !prevState)} type="button">
                                {
                                    isEditingProfile ? "Hủy" : "Cập nhật"
                                }
                            </Button>
                            {isEditingProfile && (
                                <Button variant="outlined" type="submit">
                                    Lưu
                                </Button>
                            )}
                            <Button variant="outlined" onClick={() => setIsEditingPassword(true)} type="button">
                                Đổi mật khẩu
                            </Button>
                        </div>
                    </form>
                </div>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Typography variant="h5" className="mb-4">
                    <strong>Trạng thái tài khoản</strong>
                </Typography>
                <form action="" className="mt-5">
                    <div className="input-group">
                        <label>Trạng thái kích hoạt</label>
                        <Chip label="Đã kích hoạt" variant="outlined" className="mt-2 bg-success text-light" />
                    </div>
                    <div className="input-group">
                        <label>Quyền hạn</label>
                        <Chip
                            label={currentUser?.user?.roles}
                            variant="outlined"
                            className="mt-2 bg-primary text-light"
                        />
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};
export default PersonalInfoPage;

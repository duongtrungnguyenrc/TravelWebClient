// Produced by Duong Trung Nguyen

'use client'

import { RootState } from "@/app/_context/store";
import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";

const PersonalInfoPage = () => {

    const currentUser = useSelector((state) => (state as RootState).user);

    return (
        <Container maxWidth="xl" sx={{display: "flex", height: "100%", padding: "100px 0"}}>
            <Stack direction="column" gap={5} sx={{width: "100%", padding: "20px 0"}}>
                <Stack direction="column">
                    <Typography variant="h4" component="h1">
                        Tài khoản
                    </Typography>
                    <Typography variant="body1" color="GrayText" component="p">
                    Cập nhật thông tin tài khoản của bạn
                    </Typography>
                </Stack>
                <Grid container className="mt-4">
                    <Grid item xs={4} md={3} lg={3}>
                        <ul>
                            <li className="py-2"><Typography variant="h6"><b>General</b></Typography></li>
                            <li className="py-2">
                                <Link href="">
                                    <Typography variant="body1" color="GrayText">Thông tin cá nhân</Typography>
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="">
                                    <Typography variant="body1" color="GrayText">Mật khẩu & bảo mật</Typography>
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="">
                                    <Typography variant="body1" color="GrayText">Thanh toán</Typography>
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href="">
                                    <Typography variant="body1" color="GrayText">Profile</Typography>
                                </Link>
                            </li>
                            <hr />
                            <li className="py-2">
                                <Link href="">
                                    <Typography variant="body1" className="text-danger">Xóa tài khoản</Typography>
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={8} md={9} lg={9} className="pl-5">
                        <form action="">
                            <div className="input-group">
                                <label htmlFor="name">Họ và tên</label>
                                <TextField type="text" name="name" defaultValue={currentUser?.user?.fullName} disabled/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <TextField type="text" name="email" defaultValue={currentUser?.user?.email} disabled/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Số điện thoại</label>
                                <TextField type="text" name="phone" defaultValue={currentUser?.user?.phone} disabled/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="address">Địa chỉ</label>
                                <TextField type="text" name="address" defaultValue={currentUser?.user?.address} disabled/>
                            </div>
                            <div className="button-group justify-content-end">
                                <button className="btn btn-yellow btn-sm">Lưu thay đổi</button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Stack>
        </Container> 
    );
};
export default PersonalInfoPage;
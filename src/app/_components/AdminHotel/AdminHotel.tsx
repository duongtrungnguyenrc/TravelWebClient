'use client'

import './styles.scss';
import CssBaseline from '@mui/material/CssBaseline';;
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const AdminHotel = () => {
  return (
    <section className="container-admin container-fluid p-0" >
      <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm" sx={{ maxWidth:'100% !important' }}>
            <div className="add-hotel-btn">
                <button className="btn btn-yellow btn-add-hotel">
                    Thêm Khách Sạn
                </button>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 col-xs-12">
                    <div className="card" >
                        <div className="card-body">
                            <Container sx={{ bgcolor: '#f0f2f5', height: '79vh', margin: '10px 0px 0px 0px' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
                                <div className="row h-100" >
                                    <div className="col-sm-5" style={{marginTop: '10px'}}>
                                        <div className="card">
                                            <div className="card-body">
                                                <Typography variant="h2" component="h2" fontSize="28px" className="text-start">
                                                    <b>
                                                        Danh sách khách sạn
                                                    </b>
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 h-100" style={{marginTop: '10px'}}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="table-container">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">ID</th>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Address</th>
                                                                    <th scope="col">Room</th>
                                                                    <th scope="col"></th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row" className="text-center">1</th>
                                                                    <td className="text-center">Mường Thanh</td>
                                                                    <td className="text-center">Nha Trang Khánh Hòa</td>
                                                                    <td className="text-center">
                                                                    <FormControl sx={{ m: 1, width: '100%' }}>
                                                                        <InputLabel id="demo-simple-select-autowidth-label">Room</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-autowidth-label"
                                                                            id="demo-simple-select-autowidth"
                                                                            // autoWidth
                                                                            label="Room"
                                                                        >
                                                                            <MenuItem value="" style={{ width: '100%'}}>
                                                                                <em>none</em>
                                                                            </MenuItem>
                                                                            <MenuItem value={10} style={{ width: '100%' }}>Vip</MenuItem>
                                                                            <MenuItem value={20} style={{ width: '100%' }}>Medium</MenuItem>
                                                                            <MenuItem value={30} style={{ width: '100%' }}>Normal</MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button className="btn-primary btn">Sửa</button>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button className="btn-danger btn">Xóa</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" className="text-center">1</th>
                                                                    <td className="text-center">Mường Thanh</td>
                                                                    <td className="text-center">Nha Trang Khánh Hòa</td>
                                                                    <td className="text-center">
                                                                    <FormControl sx={{ m: 1, width: '100%'}}>
                                                                        <InputLabel sx={{fontSize: '15px'}} id="demo-simple-select-autowidth-label">Room</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-autowidth-label"
                                                                            id="demo-simple-select-autowidth"
                                                                            // autoWidth
                                                                            label="Room"
                                                                        >
                                                                            <MenuItem value="" style={{ width: '100%'}}>
                                                                                <em>none</em>
                                                                            </MenuItem>
                                                                            <MenuItem value={10} style={{ width: '100%'}}>Vip</MenuItem>
                                                                            <MenuItem value={20} style={{ width: '100%' }}>Medium</MenuItem>
                                                                            <MenuItem value={30} style={{ width: '100%' }}>Normal</MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button className="btn-primary btn">Sửa</button>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button className="btn-danger btn">Xóa</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" className="text-center">1</th>
                                                                    <td className="text-center">Mường Thanh</td>
                                                                    <td className="text-center">Nha Trang Khánh Hòa</td>
                                                                    <td className="text-center">
                                                                    <FormControl sx={{ m: 1, width: '100%' }}>
                                                                        <InputLabel id="demo-simple-select-autowidth-label">Room</InputLabel>
                                                                        <Select
                                                                            labelId="demo-simple-select-autowidth-label"
                                                                            id="demo-simple-select-autowidth"
                                                                            // autoWidth
                                                                            label="Room"
                                                                        >
                                                                            <MenuItem value="" style={{ width: '100%'}}>
                                                                                <em>none</em>
                                                                            </MenuItem>
                                                                            <MenuItem value={10} style={{ width: '100%' }}>Vip</MenuItem>
                                                                            <MenuItem value={20} style={{ width: '100%' }}>Medium</MenuItem>
                                                                            <MenuItem value={30} style={{ width: '100%' }}>Normal</MenuItem>
                                                                        </Select>
                                                                    </FormControl>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button className="btn-primary btn" >Sửa</button>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button className="btn-danger btn">Xóa</button>
                                                                    </td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>

                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-xs-12">
                    <div className="card" >
                        <div className="card-body">
                            <Container sx={{ bgcolor: '#f0f2f5', height: '79vh', margin: '10px 0px 0px 0px' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <FormControl sx={{ m: 1, minWidth: '100%', width: '100%' }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Tên Khách Sạn</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                // autoWidth
                                                label="Tên Khách Sạn "
                                            >
                                                <MenuItem value="" style={{ width: '100%'}}>
                                                    <em>none</em>
                                                </MenuItem>
                                                <MenuItem value={10} style={{ width: '100%' }}>Mường Thanh</MenuItem>
                                                <MenuItem value={20} style={{ width: '100%' }}>Hải Triều</MenuItem>
                                                <MenuItem value={30} style={{ width: '100%' }}>Tân Phong</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-sm-12">
                                    <FormControl sx={{ m: 1, width: '100%'  }}>
                                    <InputLabel sx={{fontSize: '15px !important'  }} id="demo-simple-select-autowidth-label">Địa chỉ</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                label="Địa chỉ"
                                                sx={{ minWidth: '100%' }}
                                            >
                                                <MenuItem value="" style={{ width: '100%' }}>
                                                <em>none</em>
                                                </MenuItem>
                                                <MenuItem value={10} style={{ width: '100%' }}>
                                                Nha Trang
                                                </MenuItem>
                                                <MenuItem value={20} style={{ width: '100%' }}>
                                                Sài Gòn
                                                </MenuItem>
                                                <MenuItem value={30} style={{ width: '100%' }}>
                                                Khánh
                                                </MenuItem>
                                            </Select>
                                    </FormControl>
                                    </div>
                                    <div className="col-sm-12">
                                        <FormControl sx={{ m: 1, minWidth: '100%', width: '100%' }}>
                                            <InputLabel id="demo-simple-select-autowidth-label">Room</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                // autoWidth
                                                label="Room"
                                            >
                                                <MenuItem value={10} style={{ width: '100%' }}>Vip</MenuItem>
                                                <MenuItem value={20} style={{ width: '100%' }}>Medium</MenuItem>
                                                <MenuItem value={30} style={{ width: '100%' }}>Normal</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <button className="btn btn-yellow" style={{marginTop: '10px'}}>Bỏ lọc</button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="btn btn-yellow" style={{marginTop: '10px'}}>Lọc</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>

                        </div>
                    </div>
                </div>
            </div>
            
            </Container>
        </React.Fragment>
    </section>
  );
};
export default AdminHotel;

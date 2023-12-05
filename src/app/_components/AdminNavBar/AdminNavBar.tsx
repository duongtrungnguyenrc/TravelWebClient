'use client';

import './styles.scss';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/_context/store';
import Link from 'next/link';
import { initialState, set } from '@/app/_context/userSlice';

const AdminNavBar = () => {
    const currentUser = useSelector((state) => (state as RootState).user);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const dispath = useDispatch();

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        dispath(set(initialState));
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                height: 'max-content',
                backgroundColor: 'var(--light)',
                boxShadow: 'unset',
                padding: '0 1rem',
                borderBottom: '1px solid rgb(228, 227, 227)',
            }}>
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button sx={{ my: 2, color: '#000', display: 'block' }}>
                        <Link href="/">Trang chủ</Link>
                    </Button>
                    <Button sx={{ my: 2, color: '#000', display: 'block' }}>
                        <Link href="/explore">Khám phá</Link>
                    </Button>
                    <Button sx={{ my: 2, color: '#000', display: 'block' }}>
                        <Link href="/blog">Diễn đàn</Link>
                    </Button>
                </Box>

                <Box sx={{ flexGrow: 0, flexDirection: 'row', display: 'flex', gap: '0px' }}>
                    <Stack direction="row" spacing={1}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <EmailOutlinedIcon sx={{ color: 'var(--dark)' }} />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsNoneOutlinedIcon sx={{ color: 'var(--dark)' }} />
                            </Badge>
                        </IconButton>
                        <Tooltip title="Open settings">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                                color="inherit">
                                <Avatar src={currentUser?.user?.avatar} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link href="/setting">
                                    <Typography textAlign="center">Tài khoản</Typography>
                                </Link>
                            </MenuItem>
                            {currentUser ? (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link href="/login" onClick={handleLogOut}>
                                        <Typography textAlign="center">Đăng xuất</Typography>
                                    </Link>
                                </MenuItem>
                            ) : (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link href="/login">
                                        <Typography textAlign="center">Đăng nhập</Typography>
                                    </Link>
                                </MenuItem>
                            )}
                        </Menu>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default AdminNavBar;

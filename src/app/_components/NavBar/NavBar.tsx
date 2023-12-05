// Produced by Duong Trung Nguyen

'use client';

import { RootState } from '@/app/_context/store';
import './styles.scss';
import Link from 'next/link';
import { useState, useEffect, memo, useRef, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Avatar,
    CircularProgress,
    ClickAwayListener,
    Divider,
    Grow,
    IconButton,
    ListItemIcon,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    TextField,
    Tooltip,
} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { set, initialState } from '@/app/_context/userSlice';
import { useRouter } from 'next/navigation';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AllToursResponse } from '@/app/_types';
import { useDebouncedCallback } from 'use-debounce';
import { tourServices } from '@/app/_services';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RestoreIcon from '@mui/icons-material/Restore';

const NavBar = () => {
    const [isShow, setIsShow] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const [searchData, setSearchData] = useState<AllToursResponse | null>(null);
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const currentUser = useSelector((state) => (state as RootState).user);

    console.log(currentUser);

    const dispath = useDispatch();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 70 && scrollY) {
                setScrollY(false);
            } else if (window.scrollY > 70 && !scrollY) {
                setScrollY(true);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            if (window.scrollY > 70) {
                setScrollY(true);
            }

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [scrollY]);

    const handleShow = () => {
        if (isShow) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    };

    const handleLogOut = () => {
        dispath(set(initialState));
        router.push('/login');
    };

    const handleSearchChange = useDebouncedCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (value != '') {
            setSearchLoading(true);
            const response = await tourServices.search(1, 20, value);

            if (response.status) {
                setSearchData(response.data as AllToursResponse);
            }
            setSearchLoading(false);
        } else {
            setSearchData(null);
        }
    }, 300);

    const handleClearSearch = () => {
        setSearchData(null);

        if (searchRef.current != null) {
            searchRef.current.value = '';
        }
    };

    return (
        <header className={'navbar-site' + (scrollY ? ' active' : '')}>
            <nav>
                <div className="brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.4515 30.4271C16.2451 30.8473 17.1498 31.0279 18.0498 30.9456C18.9499 30.8634 19.804 30.522 20.5027 29.9654C21.2014 29.4088 21.7128 28.6623 21.9712 27.8217C22.2297 26.9811 22.2234 26.0847 21.9532 25.2476C21.6108 24.1801 21.4888 23.0576 21.5943 21.9443C21.6997 20.831 22.0306 19.7489 22.5679 18.7599C23.1052 17.771 23.8384 16.8947 24.7253 16.1812C25.6123 15.4678 26.6357 14.9313 27.7368 14.6024C28.5908 14.3428 29.3465 13.8439 29.9089 13.1685C30.4714 12.4931 30.8154 11.6714 30.8977 10.8066C30.98 9.94191 30.7969 9.07287 30.3714 8.30895C29.946 7.54498 29.2971 6.92019 28.5066 6.51325C27.7161 6.1063 26.8192 5.93531 25.9289 6.02188C25.0384 6.1084 24.1943 6.44856 23.5026 6.9996C22.8109 7.55058 22.3027 8.28782 22.0418 9.11848C21.7809 9.94913 21.779 10.8361 22.0364 11.6678C22.712 13.8149 22.4835 16.1344 21.4011 18.1185C20.3185 20.1025 18.4702 21.5896 16.2605 22.2543C15.3881 22.4998 14.6118 22.9937 14.032 23.6721C13.4522 24.3506 13.0957 25.1823 13.0085 26.0596C12.9214 26.937 13.1077 27.8195 13.5432 28.5929C13.9788 29.3664 14.6436 29.9951 15.4515 30.3977V30.4271ZM43.341 35.3132C43.0203 34.8178 42.6011 34.3894 42.1078 34.0531C41.6145 33.7168 41.0571 33.4793 40.4681 33.3544C38.2148 32.8458 36.2605 31.4923 35.0322 29.5898C33.8041 27.6872 33.4019 25.3902 33.9135 23.2008C34.1102 22.3545 34.0449 21.4708 33.7257 20.6604C33.4065 19.8501 32.8477 19.1494 32.1195 18.6463C31.3912 18.1431 30.526 17.8601 29.6324 17.8325C28.739 17.805 27.857 18.0343 27.0974 18.4916C26.3377 18.9489 25.7343 19.6138 25.3627 20.4029C24.9913 21.192 24.8683 22.0699 25.0093 22.9265C25.1503 23.7832 25.5491 24.5803 26.1554 25.2178C26.7617 25.8552 27.5486 26.3046 28.4173 26.5095C29.5411 26.7555 30.6038 27.2143 31.5445 27.8596C32.4852 28.5049 33.2854 29.324 33.8992 30.27C34.5131 31.216 34.9285 32.2703 35.1216 33.3724C35.3148 34.4744 35.2819 35.6027 35.0249 36.6925C34.8727 37.395 34.8998 38.1229 35.104 38.8129C35.3081 39.5029 35.6831 40.1339 36.1961 40.6511C36.7092 41.1682 37.3448 41.5558 38.0476 41.7799C38.7503 42.004 39.4989 42.058 40.228 41.937C40.9573 41.8161 41.6449 41.5239 42.2311 41.0861C42.8172 40.6481 43.2841 40.0778 43.5911 39.4246C43.898 38.7714 44.0357 38.0554 43.9921 37.3388C43.9485 36.6222 43.725 35.9268 43.341 35.3132ZM25.3807 30.1114C25.9285 29.8657 26.5213 29.7286 27.1244 29.708C27.8653 29.6897 28.5995 29.848 29.2629 30.1687C29.9262 30.4895 30.4984 30.9631 30.9295 31.5481C31.3606 32.1331 31.6374 32.8117 31.7357 33.5245C31.834 34.2374 31.7508 34.9627 31.4935 35.6372C31.236 36.3116 30.8123 36.9146 30.2592 37.3934C29.7062 37.8721 29.0407 38.2121 28.3209 38.3835C27.6012 38.5549 26.8491 38.5526 26.1304 38.3767C25.4118 38.2008 24.7486 37.8568 24.1987 37.3746C23.354 36.6136 22.3629 36.0218 21.2822 35.633C20.2014 35.2443 19.0522 35.0663 17.9005 35.1093C16.7488 35.1522 15.6171 35.4152 14.5702 35.8833C13.5234 36.3513 12.582 37.0151 11.8 37.8368C11.2859 38.3538 10.6492 38.7407 9.94553 38.9639C9.24186 39.1872 8.49253 39.2398 7.76303 39.1174C7.03354 38.995 6.34604 38.7012 5.76047 38.2616C5.17491 37.822 4.70917 37.25 4.4038 36.5955C4.09844 35.941 3.96284 35.224 4.00872 34.507C4.05467 33.7899 4.2807 33.0947 4.66723 32.4819C5.0537 31.8692 5.58882 31.3576 6.22599 30.9917C6.86311 30.6258 7.58288 30.4168 8.32238 30.383C8.92316 30.3602 9.52261 30.4535 10.0858 30.6575C10.6491 30.8616 11.165 31.1723 11.6034 31.5715C13.3004 33.0954 15.5502 33.9055 17.8608 33.8243C20.1714 33.7432 22.355 32.7776 23.934 31.1387C24.341 30.7062 24.8328 30.357 25.3807 30.1114Z"
                            fill="#3E334E"
                        />
                    </svg>
                    <Link href="/" className="brand-name">
                        Travel
                    </Link>
                </div>
                <div className={isShow ? 'navbar-colapse active' : 'navbar-colapse'}>
                    <div className="colapse-segment left-segment">
                        <ul className="nav-list list-unstyled">
                            <li className="nav-item">
                                <Link href="/explore">Khám phá</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/term&condition">Điều khoản & chính sách</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog">Diễn đàn</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="colapse-segment right-segment d-flex gap-2">
                        <div className="search-wrapper">
                            <TextField
                                ref={searchRef}
                                onChange={handleSearchChange}
                                className="search-input"
                                size="small"
                                placeholder="Tìm kiếm..."
                                autoComplete="false"
                                InputProps={{
                                    endAdornment: (
                                        <>
                                            {searchLoading ? (
                                                <CircularProgress color="inherit" size={15} />
                                            ) : (
                                                <SearchOutlinedIcon fontSize="small" />
                                            )}
                                        </>
                                    ),
                                }}
                            />
                            {searchData && (
                                <div className="search-result-wrapper">
                                    <ul className="search-result">
                                        {searchData.tours.map((result) => {
                                            return (
                                                <li className="search-item">
                                                    <Link
                                                        onClick={handleClearSearch}
                                                        href={`/explore/tour/${result.id}`}>
                                                        {result.name.substring(0, 31) +
                                                            (result.name.length > 31 ? '...' : '')}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Tooltip title="Account settings">
                            <IconButton
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}>
                                <Avatar src={currentUser?.user?.avatar} />
                            </IconButton>
                        </Tooltip>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            className="mt-2"
                            sx={{ zIndex: 11 }}>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={() => router.push('/setting')}>
                                                    <ListItemIcon>
                                                        <PersonIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    Tài khoản của tôi
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem onClick={() => router.push('/setting/access-history')}>
                                                    <ListItemIcon>
                                                        <LockOpenIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    Lịch sử truy cập
                                                </MenuItem>
                                                <MenuItem onClick={() => router.push('/setting/booking-history')}>
                                                    <ListItemIcon>
                                                        <RestoreIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    Lịch sử giao dịch
                                                </MenuItem>
                                                {currentUser.user ? (
                                                    <MenuItem onClick={handleLogOut}>
                                                        <ListItemIcon>
                                                            <Logout fontSize="small" />
                                                        </ListItemIcon>
                                                        Đăng xuất
                                                    </MenuItem>
                                                ) : (
                                                    <MenuItem onClick={() => router.push('/login')}>
                                                        <ListItemIcon>
                                                            <Login fontSize="small" />
                                                        </ListItemIcon>
                                                        Đăng nhập
                                                    </MenuItem>
                                                )}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>
                <button className="btn btn-yellow btn-normal colapse-btn flex-center" onClick={() => handleShow()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
            </nav>
        </header>
    );
};
export default memo(NavBar);

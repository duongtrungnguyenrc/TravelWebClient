'use client'

import "./styles.scss";
import { AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState, MouseEvent } from "react";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AdminNavBar = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return  <AppBar position="sticky" sx={{ height: "max-content" , backgroundColor: "var(--light)", boxShadow: "unset", padding: "0 1rem", borderBottom: "1px solid rgb(228, 227, 227)"}}>
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                    key={page}
                    sx={{ my: 2, color: '#000', display: 'block' }}
                    >
                    {page}
                    </Button>
                ))}
                
                </Box>

                <Box sx={{ flexGrow: 0, flexDirection: "row", display: "flex", gap: "0px" }}>
                <Stack direction="row" spacing={1}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <EmailOutlinedIcon sx={{color: "var(--dark)"}}/>
                    </Badge>
                    </IconButton>
                    <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    >
                    <Badge badgeContent={17} color="error">
                        <NotificationsNoneOutlinedIcon sx={{color: "var(--dark)"}}/>
                    </Badge>
                    </IconButton>
                    <Tooltip title="Open settings">
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleOpenUserMenu}
                        color="inherit"
                    >
                        <AccountCircleOutlinedIcon sx={{color: "var(--dark)"}}/>
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
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Stack>
                </Box>
            </Toolbar>
        </AppBar>
};
export default AdminNavBar;
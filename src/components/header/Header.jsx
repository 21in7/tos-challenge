import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/tos-challenge/today">오늘의 맵</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/tos-challenge/tomorrow">내일의 맵</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/tos-challenge/jobs">직업</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/tos-challenge/update">업데이트 내용</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/tos-challenge/ichor">은총 아이커</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/tos-challenge/debuff">극의 디버프</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="https://docs.google.com/document/d/1g20dtDQ8P8wI8JiM6wi5NIHXKuYK7r1b6I9_W46G2Sw/edit">뉴비 가이드</MenuItem>
                </Menu>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/tos-challenge" style={{ textDecoration: 'none', color: 'white' }}>홈</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
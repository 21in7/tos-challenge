// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>홈</Link>
                </Typography>
                <Button color="inherit"><Link to="/today" style={{ textDecoration: 'none', color: 'white' }}>오늘의 맵</Link></Button>
                <Button color="inherit"><Link to="/tomorrow" style={{ textDecoration: 'none', color: 'white' }}>내일의 맵</Link></Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
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
                    <Link to="/tos-challenge" style={{ textDecoration: 'none', color: 'white' }}>홈</Link>
                </Typography>
                <Button color="inherit" component={Link} to="/tos-challenge/today" style={{ textDecoration: 'none', color: 'white' }}>
                    오늘의 맵
                </Button>
                <Button color="inherit" component={Link} to="/tos-challenge/tomorrow" style={{ textDecoration: 'none', color: 'white' }}>
                    내일의 맵
                </Button>
                <Button color="inherit" component={Link} to="/tos-challenge/jobs" style={{ textDecoration: 'none', color: 'white' }}>
                    직업
                </Button>
                <Button color='inherit' component={Link} to="/tos-challenge/update" style={{ textDecoration: 'none', color: 'white' }}>
                    업데이트 내용
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
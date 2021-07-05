import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

function Header (props) {
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                {props.title}
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
  
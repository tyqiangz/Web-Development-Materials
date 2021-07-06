import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import DeHaze from '@material-ui/icons/Menu';

function Header (props) {
    return (
        <AppBar position="absolute">
            <Toolbar>
            <IconButton edge="start" color="inherit">
                <DeHaze />
            </IconButton>
            <Typography variant="h6" color="inherit">
                {props.title}
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
  
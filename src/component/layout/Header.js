import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";


export default props =>
    <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h5" color="inherit">
                Would you rather?
            </Typography>
        </Toolbar>
    </AppBar>
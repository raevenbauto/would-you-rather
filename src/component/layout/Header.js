import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import HeaderRightMenu from "./HeaderRightMenu";

const style = {
    RightSide: {
        flex: 2
    }
};

class Header extends Component {


    render(){

        return(
            <AppBar position="static" style={{flex: 1}}>
                <Toolbar
                    variant="regular">
                    <Typography variant="h5" color="inherit" style={style.RightSide}>
                        Would you rather?
                    </Typography>

                    <HeaderRightMenu />
                </Toolbar>
            </AppBar>
        )
    }
}



export default Header;
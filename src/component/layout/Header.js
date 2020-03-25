import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import HeaderRightMenu from "./HeaderRightMenu";
import {LinearProgress} from "@material-ui/core";
import {connect} from "react-redux";

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
                        Would you rather? <LinearProgress hidden={this.props.loading.length === 0} />
                    </Typography>

                    <HeaderRightMenu />
                </Toolbar>
            </AppBar>
        )
    }
}

function mapStateToProps(state){
    return {
        loading: state.loading
    }
}


export default connect(mapStateToProps)(Header);
import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import setAuthedUser from "../../action/authedUser";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";

import avatar from "../../images/avatar_3.png"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


class HeaderRightMenu extends Component {
    state = {
        anchorEl: null,
        menuOpen: false
    };

    onAvatarClick = (e) => {
        const {target} = e;
        this.setState((prevState) => ({
            anchorEl: target,
            menuOpen: !prevState.menuOpen
        }))
    };

    onLogoutClick = (e) => {
        const {dispatch} = this.props;
        dispatch(setAuthedUser(""));
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen
        }));
    };

    render(){
        const {authedUser} = this.props;
        const {menuOpen, anchorEl} = this.state;
        return(
            <Fragment>
                {
                    (authedUser && authedUser.id)
                        ?
                            <Fragment>
                                <Avatar src={avatar} onClick={this.onAvatarClick}/>
                                <Menu
                                    id="settings"
                                    keepMounted
                                    open={menuOpen}
                                    anchorEl={anchorEl}
                                    onClose={this.onAvatarClick}
                                    style={{marginTop: 35}}>

                                    <MenuItem onClick={this.onLogoutClick}>
                                        <ExitToAppIcon /> Logout
                                    </MenuItem>
                                </Menu>

                            </Fragment>
                        :  null
                }
            </Fragment>
        )
    }
}
function mapStateToProps (state) {
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(HeaderRightMenu)
import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {logoutAuthUser} from "../../action/authedUser";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {removeUsers} from "../../action/users";
import {hideLoading, showLoading} from "../../action/loading";
import Typography from "@material-ui/core/Typography";
import {removeQuestions} from "../../action/questions";
import {withRouter} from "react-router-dom";


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

    onLogoutClick = () => {
        const {dispatch} = this.props;
        dispatch(showLoading());

        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen
        }));

        dispatch(removeUsers());
        dispatch(removeQuestions());
        dispatch(hideLoading());

        this.props.history.push({
            pathname: `/`,
        });

        dispatch(logoutAuthUser());
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
                                <Typography
                                    variant="subtitle1">
                                    {authedUser.name}
                                </Typography>
                                <Avatar src={process.env.PUBLIC_URL + authedUser.avatarURL} onClick={this.onAvatarClick}
                                    style={{marginLeft: 10}}/>

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

export default withRouter(connect(mapStateToProps)(HeaderRightMenu));

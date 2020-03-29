import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CenteredGrid from "./layout/CenteredGrid";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {handleLogin} from "../action/authedUser";

class LoginPage extends Component {
    state = {
        username: "",
        userNameError: false,
    };

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value,
            userNameError: false
        });
    };

    loginClicked = () => {
        const {dispatch} = this.props;
        const cb = (hasError) => {
            this.setState({
                userNameError: hasError
            })
        };

        dispatch(handleLogin(this.state.username, cb))
    };

    render(){
        return(
            <Fragment>
                <CenteredGrid xsSize={12}>
                    <Grid container style={{marginBottom: 20}}>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            fullWidth={true}
                            onChange={this.handleUsernameChange}
                            autoFocus={true}
                            error={this.state.userNameError}
                            helperText={"Please use only the following: sarahedo, tylermcginnis, johndoe"}/>
                    </Grid>

                    <Grid container style={{marginBottom: 20}}>
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            fullWidth={true}
                            type="password"
                            helperText={"This can be empty."}/>
                    </Grid>

                    <Grid container>
                        <Button variant="contained" color="primary" fullWidth={true} onClick={this.loginClicked}>
                            Login
                        </Button>
                    </Grid>
                </CenteredGrid>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(LoginPage);
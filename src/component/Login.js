import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CenteredGrid from "./layout/CenteredGrid";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import handleLogin from "../action/authedUser";

class Login extends Component {

    state = {
        username: ""
    };

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value});
    };

    loginClicked = (e) => {
       const {dispatch} = this.props;
       dispatch(handleLogin(this.state.username))
    };

    render(){
        return(
            <Fragment>
                <CenteredGrid>
                    <Grid container style={{marginBottom: 20}}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true} onChange={this.handleUsernameChange}/>
                    </Grid>

                    <Grid container style={{marginBottom: 20}}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} type="password"/>
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

export default connect(mapStateToProps)(Login);
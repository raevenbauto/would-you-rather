import React, {Component, Fragment} from "react";
import BottomNav from "./layout/BottomNav";
import {connect} from "react-redux";
import CenteredGrid from "./layout/CenteredGrid";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {handleAddQuestion} from "../action/questions";
import {withRouter} from "react-router-dom";

class AddPage extends Component{
    state = {
        disableButton: true,
        optionOne: "",
        optionTwo: ""
    };

    handleChange = (event) => {
        const {optionOne, optionTwo} = this.state;

        if (optionOne && optionTwo){
            this.setState({disableButton: false});
        }
        this.setState({[event.target.name]: event.target.value});
    };

    onAddClick = () => {
        const {optionOne, optionTwo} = this.state;
        const {authedUser, dispatch} = this.props;
        const cb = () => {
            this.props.history.push({
                pathname: `/`,
            });
        };

        dispatch(handleAddQuestion({
            author: authedUser.id,
            optionOneText: optionOne,
            optionTwoText: optionTwo}, cb))
    };


    render(){
        const {disableButton, optionOne, optionTwo} = this.state;

        return(
            <Fragment>
                <CenteredGrid
                    withPaper={true}
                    mdSize={4}>

                    <Grid   container
                            style={{marginBottom: 20}}
                            direction={"column"}
                            justify={"center"}
                            spacing={1}>

                        <Grid item>
                            <Typography
                                variant={"h4"}
                                align={"center"}>
                                Add Question
                            </Typography>

                            <br/>

                            <Typography
                                variant={"h5"}>
                                Would you rather
                            </Typography>
                        </Grid>

                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Option 1"
                                variant="outlined"
                                name="optionOne"
                                fullWidth={true}
                                autoFocus={true}
                                value={optionOne}
                                onChange={this.handleChange}/>
                        </Grid>

                        <Grid item>
                            <Typography
                                variant={"h5"}
                                align={"center"}>
                                OR
                            </Typography>
                        </Grid>

                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Option 2"
                                variant="outlined"
                                name="optionTwo"
                                fullWidth={true}
                                value={optionTwo}
                                onChange={this.handleChange}/>
                        </Grid>


                    </Grid>

                    <Grid container justify={"center"}>
                        <Grid item>
                            <Button variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    disabled={disableButton}
                                    onClick={this.onAddClick}>
                                Add Question
                            </Button>
                        </Grid>
                    </Grid>
                </CenteredGrid>
                <BottomNav selectedTab={1}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    const {authedUser} = state;

    return {
        authedUser
    }
}


export default withRouter(connect(mapStateToProps)(AddPage));

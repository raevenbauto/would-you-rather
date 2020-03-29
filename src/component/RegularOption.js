import React, {Component, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {isQuestionAnswered} from "../utilities/helper";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {handleUpdateQuestionAnswer} from "../action/questions";
import Typography from "@material-ui/core/Typography";
const styles = {
    Body: {
        padding: 10,
        margin: 10
    },

    Answered: {
        backgroundColor: "#3f51b5",
        padding: 10,
        margin: 10,
        color: "white"
    },

    AnsweredIcon: {
        color: "white",
        float: "right"
    }
};

class RegularOption extends Component {
    state = {
        currentAnswer: this.props.currentAnswer
    };

    onOptionClick = (optionAnswer) => {
        const {answeringEnabled, question} = this.props;

        if (answeringEnabled){
            this.setState({
                currentAnswer: optionAnswer
            })
        }

        else {
            this.props.history.push({
                pathname: `/questions/${question.id}`,
                qid: question.id,
                defaultAnswer: optionAnswer
            });
        }
    };

    optionRenderer = (option, optionAnswer) => {
        const {currentAnswer} = this.state;
        if (currentAnswer === optionAnswer){
            return (
                <Paper style={styles.Answered} onClick={() => this.onOptionClick(optionAnswer)}>
                    {option.text}
                    <CheckCircleOutlineIcon style={styles.AnsweredIcon}/>
                </Paper>
            )
        }

        else{
            return (
                    <Paper style={styles.Body} onClick={() => this.onOptionClick(optionAnswer)}>
                        {option.text}
                    </Paper>
            )
        }
    };

    onSubmitClick = () => {
        const {answeringEnabled, authedUser, question, dispatch} = this.props;
        const {currentAnswer} = this.state;
        if (answeringEnabled){
            const cb = () => {
                this.props.history.push({
                    pathname: `/questions/${question.id}`,
                    qid: question.id,
                });
            };

            dispatch(handleUpdateQuestionAnswer({
                authedUser: authedUser.id,
                qid: question.id,
                answer: (currentAnswer === 1) ? "optionOne" : "optionTwo"
            }, cb));
        }

        else{
            this.props.history.push({
                pathname: `/questions/${question.id}`,
                qid: question.id,
            });
        }
    };

    render(){
        const {question} = this.props;

        return(
            <Fragment>
                <Grid container justify="center" direction="column" spacing={0}>
                    {this.optionRenderer(question.optionOne, 1)}
                    <Grid item>
                        <Typography
                            variant={"h5"}
                            align={"center"}>
                            OR
                        </Typography>
                    </Grid>
                    {this.optionRenderer(question.optionTwo, 2)}
                </Grid>

                <Grid container justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={this.onSubmitClick}>
                            {
                                (this.props.answeringEnabled)
                                    ? "Submit"
                                    : "See Poll"
                            }
                        </Button>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

RegularOption.defaultProps = {
    answeringEnabled: false
};

function mapStateToProps(state, ownProps){
    const {authedUser, questions} = state;
    const {defaultAnswer} = ownProps;
    const question = questions[ownProps.qid];

    if (question){
        const result = isQuestionAnswered(authedUser.answers, question.id);
        let currentAnswer = 0;

        if (result.answer === "optionOne")
            currentAnswer = 1;

        else if (result.answer === "optionTwo")
            currentAnswer = 2;

        if (defaultAnswer !== 0)
            currentAnswer = defaultAnswer;

        return {
            isQuestionAnswered: result.isAnswered,
            questionAnswer: result.answer,
            currentAnswer,
            authedUser,
            question
        };
    }

    return {
        question
    };


    /*
    *   answeringEnabled
    *       - false - redirect to question page
    *       - true - change the state
    *
    *   answer
    *       - 0 - redirect to question page (RESULT)
    *       - 1 - redirect to question page with this.value
    *       - 2 - redirect to question page with this.value
    *
    * */

}


export default withRouter(connect(mapStateToProps)(RegularOption));
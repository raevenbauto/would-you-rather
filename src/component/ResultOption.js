import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Grid from "@material-ui/core/Grid";
import {isQuestionAnswered} from "../utilities/helper";
import {LinearProgress} from "@material-ui/core";
import {withRouter} from "react-router-dom";

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
        color: "green",
        float: "right"
    },
};

class ResultOption extends Component {

    optionRenderer = (text, optionVotes, showCheck) => {
        const {totalVotes} = this.props;
        return (
            <Fragment>
                <Grid container justify={"center"}>
                    {text}
                    {
                        (showCheck)
                            ? <CheckCircleOutlineIcon style={styles.AnsweredIcon} fontSize={"large"}/>
                            : null
                    }

                </Grid>

                <Grid container spacing={1}>
                    <Grid item md={2}>
                        {`${optionVotes.percentage}%`}
                    </Grid>

                    <Grid item md={7}
                          style={{paddingTop: 10}}>
                        <LinearProgress
                            variant="determinate"
                            color="primary"
                            value={optionVotes.percentage}
                            style={{height: 10}}
                        />
                    </Grid>

                    <Grid item md={3}>
                        {`${optionVotes.count}/${totalVotes} votes`}
                    </Grid>
                </Grid>
            </Fragment>
        )
    };


    render(){
        const {question, optionOneVotes, optionTwoVotes, questionAnswer} = this.props;

        return(
            <Fragment>
                {this.optionRenderer(question.optionOne.text, optionOneVotes, (questionAnswer === "optionOne"))}
                {this.optionRenderer(question.optionTwo.text, optionTwoVotes, (questionAnswer === "optionTwo"))}
            </Fragment>

        )
    }
}

ResultOption.defaultProps = {
    isResult: false
};


function mapStateToProps(state, ownProps){
    const {authedUser, questions} = state;
    const question = questions[ownProps.qid];

    if (question){
        const result = isQuestionAnswered(authedUser.answers, question.id);

            const optionOneVotes = question.optionOne.votes.length;
            const optionTwoVotes = question.optionTwo.votes.length;

            const totalVotes = optionOneVotes + optionTwoVotes;
            const optionOnePercent = optionOneVotes/totalVotes;
            const optionTwoPercent = optionTwoVotes/totalVotes;

            return{
                isQuestionAnswered: result.isAnswered,
                questionAnswer: result.answer,
                totalVotes,
                optionOneVotes: {
                    count: optionOneVotes,
                    percentage: (optionOnePercent === 1) ? 100 : (optionOnePercent * 100).toFixed(2)
                },
                optionTwoVotes: {
                    count: optionTwoVotes,
                    percentage: (optionTwoPercent === 1) ? 100 :  (optionTwoPercent * 100).toFixed(2)
                },
                question
        }
    }

    return {};
}


export default withRouter(connect(mapStateToProps)(ResultOption));
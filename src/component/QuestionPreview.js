import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router-dom";
import QuestionHeader from "./QuestionHeader";
import RegularOption from "./RegularOption";

class QuestionPreview extends Component{
    render() {
        const {question, answeringEnabled, defaultAnswer} = this.props;
        return(
            <QuestionHeader qid={question.id}>
                    <Grid container justify="center" direction="column">
                        <Grid item md>
                            <RegularOption qid={question.id}
                                           answeringEnabled={answeringEnabled}
                                            defaultAnswer={defaultAnswer}/>
                        </Grid>
                    </Grid>
            </QuestionHeader>
        )
    }
}

QuestionPreview.defaultProps = {
    answeringEnabled: false,
    defaultAnswer: 0
};

function mapStateToProps(state, ownProps){
    const {questions} = state;
    const question = questions[ownProps.qid];


    return {
        question
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPreview));
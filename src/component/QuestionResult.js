import React, {Component} from "react";
import QuestionHeader from "./QuestionHeader";
import {isQuestionAnswered} from "../utilities/helper";
import {connect} from "react-redux";
import ResultOption from "./ResultOption";

class QuestionResult extends Component{
    componentDidMount() {
        console.log(this.props);
    }

    render(){
        const {question, questionAnswered} = this.props;

        return (
            <QuestionHeader qid={question.id} questionAnswered={questionAnswered}>
                <ResultOption
                    qid={question.id}/>
            </QuestionHeader>
        )
    }
}


function mapStateToProps(state, ownProps){
    const {authedUser, questions} = state;
    const question = questions[ownProps.qid];

    if (question){
        const result = isQuestionAnswered(authedUser.answers, question.id);

        return{
            questionAnswered: result.isAnswered,
            question
        }
    }

    return {
    }
}

export default connect(mapStateToProps)(QuestionResult);
import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CenteredGrid from "./layout/CenteredGrid";
import BottomNav from "./layout/BottomNav";
import {withRouter} from "react-router-dom";
import QuestionPreview from "./QuestionPreview";
import QuestionResult from "./QuestionResult";
import {isQuestionAnswered} from "../utilities/helper";

class QuestionPage extends Component {
    viewChanger = () => {
        const {defaultAnswer} = this.props.location;
        const {questionAnswered, question} = this.props;

        if (question){
            if (!questionAnswered){
                return <QuestionPreview key={question.id} qid={question.id}
                                        answeringEnabled={true} defaultAnswer={defaultAnswer}/>;
            }

            else {
                return <QuestionResult key={question.id} qid={question.id}/>;
            }
        }

        else{
            this.props.history.push({
                pathname: `/error`,
            });
        }

    };

    render(){
        return(
            <div>
                <CenteredGrid
                    withPaper={true}
                    mdSize={4}>
                    {this.viewChanger()}
                </CenteredGrid>
                <BottomNav selectedTab={0}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    const {authedUser, questions} = state;
    const qid = ownProps.match.params.question_id;
    const question = questions[qid];

    if (question){
        return{
            questionAnswered: isQuestionAnswered(authedUser.answers, question.id).isAnswered,
            question,
            questions
        }
    }

    return {}
}

export default withRouter(connect(mapStateToProps)(QuestionPage));

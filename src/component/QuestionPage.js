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
        const {qid, defaultAnswer} = this.props.location;
        const {questionAnswered, questions} = this.props;

        if (questions){
            const question = questions[qid];

            if (question){
                if (!questionAnswered){
                    if (question)
                        return <QuestionPreview key={question.id} qid={question.id}
                                                answeringEnabled={true} defaultAnswer={defaultAnswer}/>;
                    return null;
                }

                else {
                    if (question)
                        return <QuestionResult key={question.id} qid={question.id}/>;

                    return null;
                }
            }

            else{
                alert("404");
            }
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
    const question = questions[ownProps.location.qid];

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
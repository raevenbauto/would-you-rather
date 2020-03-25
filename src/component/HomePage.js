import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import CenteredGrid from "./layout/CenteredGrid";
import {withRouter} from "react-router-dom";
import BottomNav from "./layout/BottomNav";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import QuestionPreview from "./QuestionPreview";
import handleGetQuestions from "../action/questions";

class HomePage extends Component{
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleGetQuestions());
    }

    state = {
        selectedTab: 0
    };

    handleTabChange = (e, newValue) => {
        this.setState({
            selectedTab: newValue
        })
    };


    render(){
        const {answeredQuestions, unansweredQuestions} = this.props;
        const {selectedTab} = this.state;

        return (
            <Fragment>
                <CenteredGrid
                    withPaper={true}>
                    <Tabs
                        value={selectedTab}
                        onChange={this.handleTabChange}
                        indicatorColor={"primary"}
                        textColor={"primary"}
                        centered>

                        <Tab label="Unanswered Questions"  />
                        <Tab label="Answered Questions" />
                    </Tabs>

                    <div style={{height: 400, overflowY: "auto"}}>
                        {
                            (selectedTab === 0)
                                ?
                                    unansweredQuestions.map(m => {
                                        return <QuestionPreview key={m.id} question={m}/>
                                    })

                                :
                                    answeredQuestions.map(m => {
                                        return <QuestionPreview key={m.id} question={m}/>
                                    })
                        }
                    </div>

                </CenteredGrid>

                <BottomNav selectedTab={0}/>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser, questions}){

    if (authedUser.id){ //Checking if's authenticated.
        const answeredKeys = Object.keys(authedUser.answers);
        const answeredQuestions = Object.values(questions).filter(f => answeredKeys.includes(f.id));
        const unansweredQuestions = Object.values(questions).filter(f => !answeredKeys.includes(f.id));

        return {
            answeredQuestions,
            unansweredQuestions
        };
    }

    return {
        answeredQuestions: [],
        unansweredQuestions: []
    }
}


export default withRouter(connect(mapStateToProps)(HomePage));
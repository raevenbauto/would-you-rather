import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./layout/Header";
import Login from "./LoginPage";
import CenteredGrid from "./layout/CenteredGrid";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import AddPage from "./AddPage";
import LeaderboardPage from "./LeaderboardPage";
import QuestionPage from "./QuestionPage";

class App extends Component {
    render(){
        const {authedUser} = this.props;
        return(
            <Router>
                <Header/>
                {
                    (authedUser && authedUser.id)
                        ? <Redirect to="/home"/>
                        : <Redirect to="/login"/>
                }

                <Switch>
                    <Route exact path="/login">
                        <CenteredGrid
                            withPaper={true}>
                            <Login />
                        </CenteredGrid>
                    </Route>

                    <Route exact path="/home">
                        <HomePage />
                    </Route>

                    <Route exact path="/add">
                        <AddPage />
                    </Route>

                    <Route exact path="/leaderboard">
                        <LeaderboardPage />
                    </Route>

                    <Route exact path="/questions/:question_id">
                        <QuestionPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(App);
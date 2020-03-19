import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Header from "./layout/Header";
import Login from "./Login";
import CenteredGrid from "./layout/CenteredGrid";
import MainPage from "./MainPage";

class App extends Component {
    render(){
        return(
            <Fragment>
                <Header/>
                <CenteredGrid withPaper={true}>
                    {
                        (this.props.authedUser !== "")
                            ? <MainPage />
                            : <Login />

                    }
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

export default connect(mapStateToProps)(App);
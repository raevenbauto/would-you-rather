import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Header from "./layout/Header";
import Login from "./Login";
import CenteredGrid from "./layout/CenteredGrid";
import MainPage from "./MainPage";

class App extends Component {
    render(){
        const {authedUser} = this.props;

        return(
            <Fragment>
                <Header/>
                {
                    (authedUser && authedUser.id)
                        ?   <MainPage />
                        :   <CenteredGrid withPaper={true} >
                                <Login />
                            </CenteredGrid>
                }

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
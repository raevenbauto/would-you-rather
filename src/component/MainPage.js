import React, {Component, Fragment} from "react";
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {connect} from "react-redux";
import CenteredGrid from "./layout/CenteredGrid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

class MainPage extends Component{
    state = {
        selectedTab: 0
    };

    handleTabChange = (e, newValue) => {
        this.setState({selectedTab: newValue})
    };

    currPage = () => {
        const {selectedTab} = this.state;

        switch (selectedTab){
            case 0:
                return "HOME";

            case 1:
                return "NEW QUESTION";

            case 2:
                return "LEADERBOARD";
        }
    };

    render(){
        return (
            <Fragment>
                <CenteredGrid
                    withPaper={true}>
                    {
                        this.currPage()
                    }
                </CenteredGrid>


                <CenteredGrid
                    withPaper={true}
                    xsSize={8}>
                    <BottomNavigation
                        value={this.state.selectedTab}
                        onChange={this.handleTabChange}
                        showLabels={true}>

                        <BottomNavigationAction label="Home" icon={<HomeIcon/>} />
                        <BottomNavigationAction label="New Question" icon={<FiberNewIcon />} />
                        <BottomNavigationAction label="Ranking" icon={<AssessmentIcon />} />

                    </BottomNavigation>
                </CenteredGrid>

            </Fragment>
        )
    }
}

export default connect()(MainPage)
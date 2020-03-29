import React, {Component, Fragment} from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CenteredGrid from "./CenteredGrid";
import withRouter from "react-router-dom/es/withRouter";
import {connect} from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class BottomNav extends Component {
    state = {
        selectedTab: this.props.selectedTab
    };

    handleTabChange = (e, newValue) => {
        switch (newValue){
            case 0:
                this.props.history.push("/home");
                return;

            case 1:
                this.props.history.push("/add");
                return;

            case 2:
                this.props.history.push("/leaderboard");
                return;
        }
    };

    render(){
        return(
            <Fragment>
                <CenteredGrid
                    withPaper={true}>
                    <Tabs
                        value={this.state.selectedTab}
                        onChange={this.handleTabChange}
                        indicatorColor={"primary"}
                        textColor={"primary"}>

                        <Tab label="Home" icon={<HomeIcon/>} wrapped />
                        <Tab label="New Question" icon={<FiberNewIcon />} wrapped />
                        <Tab label="Leaderboard" icon={<AssessmentIcon />} wrapped />
                    </Tabs>
                </CenteredGrid>
            </Fragment>
        )
    }
}

export default withRouter(connect()(BottomNav));
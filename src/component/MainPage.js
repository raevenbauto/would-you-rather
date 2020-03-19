import React, {Component, Fragment} from "react";
import HomeIcon from '@material-ui/icons/Home';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {connect} from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

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
                {
                    this.currPage()
                }
                <Grid container>
                    <Grid item>
                        <Tabs
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            value={this.state.selectedTab}
                            onChange={this.handleTabChange}>

                            <Tab value={0} tabIndex={0} label="Home" icon={<HomeIcon/>} />
                            <Tab value={1} tabIndex={1} label="New Question" icon={<FiberNewIcon/>} />
                            <Tab value={2} tabIndex={2} label="Ranking" icon={<AssessmentIcon />}/>
                        </Tabs>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default connect()(MainPage)
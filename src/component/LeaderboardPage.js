import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import BottomNav from "./layout/BottomNav";
import CenteredGrid from "./layout/CenteredGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LeaderboardItem from "./LeaderboardItem";

class LeaderboardPage extends Component{
    render(){
        return (
            <Fragment>
                <CenteredGrid
                    withPaper={true}
                    mdSize={4}>
                        <Grid   container
                                direction={"column"}
                                justify={"center"}
                                spacing={1}>

                            <Grid item>
                                <Typography
                                    variant={"h4"}
                                    align={"center"}>
                                    Leaderboard
                                </Typography>
                            </Grid>

                            <div style={{height: 400, overflowY: "auto"}}>
                                {
                                    this.props.users.map(m => {
                                        return (
                                            <Grid item key={m.id}>
                                                <LeaderboardItem key={m.id} user={m} />
                                            </Grid>

                                        )
                                    })
                                }
                            </div>
                        </Grid>
                </CenteredGrid>
                <BottomNav selectedTab={2}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    const {users} = state;
    let formattedUsers = Object.values(users).map(user => {
        const answeredPoints = Object.keys(user.answers).length;
        const questionAskedPoints = user.questions.length;

        return {
            ...user,
            answeredPoints,
            questionAskedPoints,
            totalPoints: answeredPoints + questionAskedPoints
        };
    }).sort((a,b) => {return (b.totalPoints - a.totalPoints)});

    return {
        users: formattedUsers
    }
}

export default connect(mapStateToProps)(LeaderboardPage);
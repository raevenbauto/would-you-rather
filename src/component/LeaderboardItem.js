import React, {Component, Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class LeaderboardItem extends Component{

    render(){
        const {user} = this.props;
        return (
            <Fragment>
                <Card
                    variant={"outlined"}
                    style={{margin: 10}}>
                    <CardContent>
                        <Grid
                            container
                            direction={"row"}
                            spacing={1}>

                            <Grid
                                item
                                md={3}>

                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={3}>
                                        <Grid item>
                                            <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + user.avatarURL}
                                                style={{width: 90, height: 90}}/>
                                        </Grid>

                                        <Grid item>
                                            <b>{user.name}</b>
                                        </Grid>
                                    </Grid>
                            </Grid>

                            <Grid
                                item
                                md={6}>
                                <Grid
                                    container
                                    direction={"column"}
                                    spacing={0}
                                    style={{paddingTop: 25}}>

                                    <Grid item>
                                        <Grid container>
                                            <Grid item md={9}>
                                                Answered Questions:
                                            </Grid>

                                            <Grid item md={3}>
                                                {user.answeredPoints}
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item>
                                        <Grid container>
                                            <Grid item md={9}>
                                                Questions Asked:
                                            </Grid>

                                            <Grid item md={3}>
                                                {user.questionAskedPoints}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid
                                item
                                md={3}>
                                <Paper style={{padding: 15}}>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">
                                        <Grid item>
                                            <Typography variant={"h6"}>
                                                Total
                                            </Typography>
                                        </Grid>

                                        <Grid
                                            item>
                                            <Avatar style={{backgroundColor: "#3f51b5"}}>
                                                {user.totalPoints}
                                            </Avatar>
                                        </Grid>

                                    </Grid>
                                </Paper>

                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Fragment>
        )
    }
}

export default LeaderboardItem;
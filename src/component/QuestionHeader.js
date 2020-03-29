import React, {Component, Fragment} from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import {connect} from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {isQuestionAnswered} from "../utilities/helper";

class QuestionHeader extends Component {

    render(){
        const {author, date, questionAnswered} = this.props;
        return(
            <Fragment>
                <Card
                    variant={"outlined"}
                    style={{margin: 10}}>

                    <CardHeader
                        title={(questionAnswered) ? `${author.name} asked` : `${author.name} is asking`}
                        subheader={`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
                        avatar={
                            <Avatar src={process.env.PUBLIC_URL + author.avatarURL}
                                    style={{marginLeft: 10}}/>
                        }>
                    </CardHeader>

                    <CardContent>
                        <Typography
                            variant="h6">
                            <b>Would you rather</b>

                            {this.props.children}
                        </Typography>
                    </CardContent>

                </Card>
            </Fragment>
        )
    }
}

function mapStateToProps(state, ownProps){
    const {questions} = state;
    const question = questions[ownProps.qid];
    const author = state.users[question.author];
    const date = new Date(question.timestamp);
    const {authedUser} = state;

    return {
        author,
        date,
        questionAnswered: isQuestionAnswered(authedUser.answers, question.id).isAnswered
    }
}

export default connect(mapStateToProps)(QuestionHeader)
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, {Component} from "react";


const styles = {
    Body: {
        padding: 30,
        marginTop: 25
    }
};

class CenteredGrid extends Component{
    render(){
        const {withPaper} = this.props;
        return(
            <Grid container justify="center">
                <Grid item >
                    {
                        (withPaper)
                            ? <Paper elevation={3} style={styles.Body}>
                                {this.props.children}
                            </Paper>
                            : this.props.children
                    }
                </Grid>
            </Grid>
        )
    }
}

CenteredGrid.defaultProps = {
    withPaper: false
};

export default CenteredGrid;
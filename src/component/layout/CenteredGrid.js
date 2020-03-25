import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, {Component} from "react";

const styles = {
    Body: {
        padding: 30,
        marginTop: 50
    }
};

class CenteredGrid extends Component{
    render(){
        const {withPaper} = this.props;
        return(
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                >
                <Grid
                    md="auto"
                    item>
                    {
                        (withPaper)
                            ?   <Paper elevation={3} style={styles.Body}>
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
    withPaper: false,
};

export default CenteredGrid;
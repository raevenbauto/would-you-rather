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
        const {withPaper, xsSize} = this.props;
        return(
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                >

                <Grid
                    item
                    xs={xsSize}>
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
    xsSize: 0
};

export default CenteredGrid;
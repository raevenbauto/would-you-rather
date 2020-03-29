import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, {Component, Fragment} from "react";

const styles = {
    Body: {
        padding: 30,
        marginTop: 50
    }
};

class CenteredGrid extends Component{

    paperCreator = () => {
        const {withPaper} = this.props;

        if (withPaper){
            return <Paper elevation={3} style={styles.Body}>
                {this.props.children}
            </Paper>
        }

        return <Fragment>{this.props.children}</Fragment>;
    };

    render(){
        const {mdSize} = this.props;
        return(
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center">

                {
                    (mdSize === 0)
                    ?   <Grid
                            md="auto"
                            item>
                            {this.paperCreator()}
                        </Grid>

                    :   <Grid
                            md={mdSize}
                            item>
                            {this.paperCreator()}
                        </Grid>
                }



            </Grid>
        )
    }
}

CenteredGrid.defaultProps = {
    withPaper: false,
    mdSize: 0
};

export default CenteredGrid;
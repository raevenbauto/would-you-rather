import React, {Component} from "react";
import CenteredGrid from "./layout/CenteredGrid";
import {Link} from "react-router-dom";

class ErrorPage extends Component{
    render(){
        return (
            <CenteredGrid
                withPaper={true}>
                <h6>404 error has occured. Please navigate to <Link to={"/"}>Home</Link>
                </h6>
            </CenteredGrid>
        )
    }
}


export default ErrorPage;

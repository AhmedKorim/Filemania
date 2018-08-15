import React, {Component, Fragment} from 'react';
import './App.css';
import Auth from "./auth/Auth";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";


class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <Auth/>
            </Fragment>
        );
    }
}

export default App;

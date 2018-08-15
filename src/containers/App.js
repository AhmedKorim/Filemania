import React, {Component, Fragment} from 'react';
import './App.css';
import Auth from "./auth/Auth";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./header/Header";

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <Header/>
                    <Route path="/login" component={Auth}/>
            </Fragment>
        );
    }
}

export default App;

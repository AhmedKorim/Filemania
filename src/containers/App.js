import React, {Component, Fragment} from 'react';
import './app.scss';
import Auth from "./auth/Auth";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {Route} from 'react-router-dom';
import Header from "./header/Header";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
import Profile from "./profile/Profile";

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <Header/>
                <main>
                    <Route path="/login" component={Auth}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/profile" component={Profile}/>
                </main>
            </Fragment>
        );
    }
}

export default App;

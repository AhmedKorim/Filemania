import React from 'react';
import SignUp from "../../components/forms/Signup";
import LoginForm from "../../components/forms/Login";
import SwipeableViews from 'react-swipeable-views';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {LOGIN, SIGNUP} from "../../dux/actions/actions";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
})

class Auth extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        rePassowrd: '',
        gender: 'male',
        value: 0
    }
    // handeling  from change events
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    // handel viewed segment by index
    handleChangeValue = (_, value) => {
        this.setState({value});
    };

    //
    handleChangeIndex = index => {
        this.setState({value: index})
    };

    // handling login event raised from login component
    handelLogin = (event) => {
        event.preventDefault();
        console.log(event);
        // TODO : login validation
        const {email, password} = this.state;
        this.props.login({email, password})
    };
    // handling login event raised from signup component

    handelSignup = (event) => {
        event.preventDefault();
        console.log(event);
        // TODO : signin validation
        const {name, email, password, gender} = this.state;
        this.props.signUp({name, email, gender, password})
    };


    render() {
        const {state: {name, email, password, rePassowrd, gender}, handleChange, handelLogin, handelSignup} = this;
        const {classes} = this.props;
        return (

            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChangeValue}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="login"/>
                        <Tab label="sign up"/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <LoginForm
                        email={email}
                        password={password}
                        handleChange={handleChange}
                        handelLogin={handelLogin}
                    />
                    <SignUp
                        name={name}
                        email={email}
                        password={password}
                        rePassowrd={rePassowrd}
                        gender={gender}
                        handleChange={handleChange}
                        handelSigup={handelSignup}
                    />
                </SwipeableViews>
            </div>
        )

    }
}

// const mapStateToProps  = state  => {
//     return{
//
//     }
// }
const mapdispatchToPorps = dispatch => {
    return {
        login: (payload) => {dispatch({type: LOGIN, payload: payload})},
        signUp: (payload) => {dispatch({type: SIGNUP, payload: payload})},
    }
}

export default connect(null, mapdispatchToPorps)(withStyles(styles, {withTheme: true})(Auth));
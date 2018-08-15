import React from 'react';
import SignUp from "../../components/forms/Signup";
import LoginForm from "../../components/forms/Login";
import SwipeableViews from 'react-swipeable-views';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {login, signup} from "../../dux/actions/actions";

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
        // TODO : login validation
        const {email, password} = this.state;
        this.props.login({email, password})
    };
    // handling login event raised from signup component

    handelSignup = (event) => {
        event.preventDefault();
        // TODO : signin validation
        const {name, email, password, gender, rePassowrd} = this.state;
        this.props.signUp({name, email, gender, password, re_password: rePassowrd})
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
                        handelSignup={handelSignup}
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
        login: (payload) => dispatch(login(payload)),
        signUp: (payload) => dispatch(signup(payload))
    }
}

export default connect(null, mapdispatchToPorps)(withStyles(styles, {withTheme: true})(Auth));
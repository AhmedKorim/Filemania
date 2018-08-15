import React from 'react';
import SignUp from "../../components/forms/Signup";
import LoginForm from "../../components/forms/Login";
import SwipeableViews from 'react-swipeable-views';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import {withStyles} from "@material-ui/core";

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
        gender: 'male'
        ,
        current: 'login',
        value: 0
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }
    handleChangeValue = (_, value) => {
        this.setState({value});
    };
    handleChangeIndex = index => {
        this.setState({value: index})
    }
    handelLogin = (event) => {
        event.preventDefault();
        console.log(event);
    }

    handelSignup = (event) => {
        event.preventDefault();
        console.log(event);
    }


    render() {
        const {state: {name, email, password, rePassowrd, gender}, handleChange, handelLogin ,handelSignup} = this;
        const {classes, theme} = this.props;
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

export default withStyles(styles, {withTheme: true})(Auth);
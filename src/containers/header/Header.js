import React, {Fragment} from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import './Header.scss';
import Menu from '@material-ui/icons/Menu';
import Dashbord from '@material-ui/icons/Dashboard';
import CloudUpload from '@material-ui/icons/CloudUpload';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Notifications from '@material-ui/icons/Notifications';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import DropDown from "../../components/dropDown/DropDown";
import {createStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";


const styles = theme => console.log(theme) || createStyles({
    drawer: {
        boxShadow: theme.shadows[5]
    }
})

class Header extends React.Component {
    state = {
        open: true
    }
    toggle = () => {
        this.setState(({open}) => ({open: !open}))
    };


    render() {
        const {state: {open}, toggle} = this;
        const link = props => <Link to='/login' {...props} />;
        const {classes} = this.props;
        return (
            <div className="header">
                <header>
                    <AppBar position="fixed" className='appBar' color="default">
                        <Grid container>
                            <Grid item xs={4}>
                                <IconButton aria-label="Delete" color="inherit" onClick={toggle}>
                                    <Menu/>
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <div className="toolbar">
                                    <DropDown classNames={['DropDown']}>
                                        <CloudUpload/>
                                    </DropDown>
                                    <DropDown classNames={['DropDown']}>
                                        <AccountCircle/>
                                    </DropDown>
                                    <DropDown classNames={['DropDown']}>
                                        <Notifications/>
                                    </DropDown>
                                </div>
                            </Grid>
                        </Grid>
                    </AppBar>
                </header>
                <Drawer open={open}
                        variant="persistent"
                        classes={classes.drawer}
                >
                    <AppBar position="static" color="default">
                        <IconButton aria-label="Delete" color="inherit" onClick={toggle}>
                            <Menu/>
                        </IconButton>
                    </AppBar>
                    <div className='list'>
                        <List>
                            <ListItem>
                                <Grid container className="icon">
                                    <Grid item xs={3}>
                                        <Avatar>PC</Avatar>
                                    </Grid>
                                    <Grid item xs className="description">
                                        <h3>name</h3>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem button component={link}>
                                <Grid container className="icon">
                                    <Grid item xs={3}>
                                        <Dashbord/>
                                    </Grid>
                                    <Grid item xs className="description">
                                        <h3>name</h3>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
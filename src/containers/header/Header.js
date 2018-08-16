import React from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import './Header.scss';
// icons
import Menu from '@material-ui/icons/Menu';
import Dashbord from '@material-ui/icons/Dashboard';
import CloudUpload from '@material-ui/icons/CloudUpload';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Notifications from '@material-ui/icons/Notifications';
import Home from '@material-ui/icons/Home';
import Group from '@material-ui/icons/Group';

// icons

import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "@material-ui/core/Avatar/Avatar";
import DropDown from "../../components/dropDown/DropDown";
import {createStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import SideListItem from "../../components/navigation/sideNavListItems/SideListItem";
import {connect} from "react-redux";
import {SIDE_OPEN} from "../../dux/actions/actions";


const styles = theme => console.log(theme) || createStyles({
    drawer: {
        boxShadow: theme.shadows[5]
    }
})

class Header extends React.Component {
    toggle = () => {
        this.setState(({open}) => ({open: !open}))
    };


    render() {
        const {open, toggle} = this.props;
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
                >
                    <AppBar position="static" color="default">
                        <IconButton aria-label="Delete" color="inherit" onClick={toggle}>
                            <Menu/>
                        </IconButton>
                    </AppBar>
                    <div className='list'>
                        <List>
                            <SideListItem
                                name={'Home'}
                                icon={<Avatar>PC</Avatar>}
                                to={'profile'}
                            />
                            <SideListItem
                                name={'Home'}
                                icon={<Home/>}
                                to={'home'}
                            />
                            <SideListItem
                                name={'Dashboard'}
                                icon={<Dashbord/>}
                                to={'dashboard'}
                            />
                            <SideListItem
                                name={'Groups'}
                                icon={<Group/>}
                                to={'groups'}
                            />
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}
// using redux to change container style based on side nav state
const mapStateToPorps = state => {
    return {
        open: state.side.open
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch({type: SIDE_OPEN})
    }
}


export default connect(mapStateToPorps, mapDispatchToProps)(withStyles(styles)(Header));
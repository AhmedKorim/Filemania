import React, {Fragment} from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import classes from './Header.scss';

class Header extends React.Component {
    state = {
        open: true
    }
    toggle = () => {
        this.setState(({open}) => ({open: !open}))
    };


    render() {
        const {state: {open}, toggle} = this;
        return (
            <Fragment>
                <header>
                    <AppBar position="fixed" className={classes.AppBar}>
                        <IconButton aria-label="Delete" onClick={toggle}>
                            x
                        </IconButton>
                    </AppBar>
                </header>
                <Drawer open={open}
                        variant="persistent"
                >
                    <div
                        tabIndex={0}
                        role="button"
                    >
                        <div className={classes.ListItem}>
                            <List>
                                <ListItem button onClick={() => console.log('click')}>
                                    hi
                                </ListItem>
                                <ListItem button onClick={() => console.log('click')}>
                                    hi
                                </ListItem>
                                <ListItem button onClick={() => console.log('click')}>
                                    hi
                                </ListItem>
                                <ListItem button onClick={() => console.log('click')}>
                                    hi
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </Drawer>
            </Fragment>
        )
    }
}

export default Header;
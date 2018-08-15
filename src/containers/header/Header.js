import React, {Fragment} from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import classes from './Header.scss';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};


class Header extends React.Component {
    state = {
        open: true
    }

    render() {
        const {state: {open}} = this;
        return (
            <Fragment>
                <header>
                    <AppBar>
                        <IconButton aria-label="Delete">
                            {/*<Menu color="inherit"/>*/}
                            <i className="material-icons">menu</i>
                        </IconButton>
                    </AppBar>
                </header>
                <Drawer open={open}>
                    <div
                        tabIndex={0}
                        role="button"
                    >
                        <div>
                            <List>
                                <ListItem button>
                                    hi
                                </ListItem> 
                                <ListItem button>
                                hi
                            </ListItem> 
                            <ListItem button>
                                hi
                            </ListItem> 
                            <ListItem button>
                                hi
                            </ListItem>
                            <p className={classes["red"]}>test</p>
                            </List>
                        </div>
                    </div>
                </Drawer>
            </Fragment>
        )
    }
}

export default Header;
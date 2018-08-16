import React, {Fragment} from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import AppBar from "@material-ui/core/AppBar/AppBar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import  './Header.scss';

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
            <div className="header">
                <header>
                    <AppBar position="fixed" className='appBar'>
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
                        <div className='listItem'>
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
            </div>
        )
    }
}

export default Header;
import React, {Component} from 'react';
import './App.css';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";



class App extends Component {
    render() {
        return (
            <Paper classes={'paper-here'}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consectetur temporibus vel. Accusamus aut cum dolorum eos est illum
                    impedit ipsam maxime numquam quaerat quam quidem, sapiente tempore voluptates!
                </Typography>
            </Paper>
        );
    }
}

export default App;

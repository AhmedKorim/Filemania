import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createStore} from "redux";
import authReducer from "./dux/reducer/authReducer";
import {Provider} from "react-redux";

// editing  material ui theme
const theme = createMuiTheme({
    palette: {
        type: 'light'
    }
})

// create redux store
const store = createStore(authReducer);
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

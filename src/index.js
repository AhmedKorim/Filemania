import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import authReducer from "./dux/reducer/authReducer";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
/* development */
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// editing  material ui theme
const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

// create redux store
const store = createStore(
    combineReducers({
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

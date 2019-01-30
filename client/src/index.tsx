import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './components/App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core"
import primary from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: primary,
        secondary: {
            main: '#f44336'
        },
        background: {
            default: '#eeeeee'
        },
    },
    typography: {
        useNextVariants: true
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import regeneratorRuntime from "regenerator-runtime";
import './content.scss';

import{creatMuiTheme, createMuiTheme} from "@material-ui/core/styles"
import{ThemeProvider} from "@material-ui/styles"
//import Demo from '../demo'
const theme=createMuiTheme({typography:{useNextVariants:true}});
render(
    // <div>
    //     <h1></h1>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    // </div>    
        ,
    document.getElementById('app') 
);
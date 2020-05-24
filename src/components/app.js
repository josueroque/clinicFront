import React,{Component} from 'react';
import GeneralInfo from './GeneralInfo';
import Home from './Home';
import History from './History';
import Patients from './Patients';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientsProvider from '../context/PatientsContext';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});


 class App extends Component{
    
    render(){

    return(
        <Router>
            <Switch>
                <PatientsProvider>
                    <ThemeProvider theme={theme}>
                        <Route exact path='/patients' component={Patients}  />
                        <Route exact path='/general' component={GeneralInfo}  />
                        <Route exact path='/history' component={History}  />
                        <Route exact path='/' component={Home}  />
                    </ThemeProvider>    
                </PatientsProvider>
            </Switch>
          
        </Router>
    )
    }
 }
export default App;


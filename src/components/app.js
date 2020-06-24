import React,{Component} from 'react';
import GeneralInfo from './GeneralInfo';
import Home from './Home';
import History from './History';
import Patients from './Patients';
import Search from './Search';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientsProvider from '../context/PatientsContext';
import UsersProvider from '../context/UsersContext';
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
                <UsersProvider >  
                    <ThemeProvider theme={theme}>
                        <Route exact path='/patients' component={Patients}  />
                        <Route exact path='/history/:id' component={History}  />
                        <Route exact path='/general/:id' component={GeneralInfo}  />
                        <Route exact path='/general' component={GeneralInfo}  />
                        <Route exact path='/search' component={Search}  />
                        <Route exact path='/login' component={Login}  />
                        <Route exact path='/logout' component={Login} logout={true} />
                        <Route exact path='/' component={Home}  />
                    </ThemeProvider>
                </UsersProvider>        
                </PatientsProvider>
            </Switch>
          
        </Router>
    )
    }
 }
export default App;


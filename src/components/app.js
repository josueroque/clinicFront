import React,{Component} from 'react';
import GeneralInfo from './GeneralInfo';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientsProvider from '../context/PatientsContext';
import History from './History';



 class App extends Component{
    
    render(){

    return(
        <Router>
            <Switch>
                <PatientsProvider>
                    <Route exact path='/general' component={GeneralInfo}  />
                    <Route exact path='/history' component={History}  />
                    <Route exact path='/' component={Home}  />
                </PatientsProvider>
            </Switch>
          
        </Router>
    )
    }
 }
export default App;


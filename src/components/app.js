import React,{Component} from 'react';
import GeneralInfo from './GeneralInfo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PatientsProvider from '../context/PatientsContext';


 class App extends Component{
    
    render(){

    return(
        <Router>
            <Switch>
                <PatientsProvider>
                    <Route exact path='/general' component={GeneralInfo}  />
                </PatientsProvider>
                {/* <Route exact path='/' component={Home}  /> */}
            </Switch>
          
        </Router>
    )
    }
 }
export default App;


import React,{Component} from 'react';
import GeneralInfo from './GeneralInfo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

 class App extends Component{
    
    render(){

    return(
        <Router>
            <Switch>
                <Route exact path='/general' component={GeneralInfo}  />
                {/* <Route exact path='/' component={Home}  /> */}
            </Switch>
          
        </Router>
    )
    }
 }
export default App;


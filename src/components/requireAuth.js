import React, { Component } from 'react';
import {UsersContext} from '../context/UsersContext';


export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    static contextType = UsersContext;
    
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() { 
      const {auth} = this.context;

      console.log('desde context');
    
      console.log(auth);
      if (!auth) {
        this.props.history.push('/login');
      }
      if (!auth.token) {
        this.props.history.push('/login');
      }

    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
  // function mapStateToProps(state) {
  //   return { auth: state.auth.authenticated };
  // }

 // return connect(mapStateToProps)(ComposedComponent);
};
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignIn from './components/Form/SignIn/SignIn.js';
import SignUp from './components/Form/SignUp/SignUp.js'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/signIn" component={SignIn}/>
      <Route exact path="/signUp" component={SignUp}/>
    </React.Fragment>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignIn from './components/Form/SignIn/SignIn.js';
import SignUp from './components/Form/SignUp/SignUp.js';
import Upload from './components/Upload/Upload.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import SignOut from './components/signOut/SignOut.js';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/video/:videoTitle" component={VideoPlayer} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/Upload" component={Upload} />
      <Route exact path="/signOut" component={SignOut} />
    </React.Fragment>
    
  );
}

export default App;

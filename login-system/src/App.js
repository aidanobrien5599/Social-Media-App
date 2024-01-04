import './App.css';
//import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Account from "./pages/Account.js";
import Settings from "./pages/Settings.js";
import Signup from "./pages/Signup.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'


function App() {
  const[loggedInUser, setLoggedInUser] = useState(null);
  const[currentAccount, setCurrentAccount] = useState(null);
  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          <Login setLoggedInUser={setLoggedInUser}/>
        </Route>
        <Route path="/login">
          <Login setLoggedInUser={setLoggedInUser}/>
        </Route>
        <Route path="/signup">
        <Signup setLoggedInUser={setLoggedInUser}></Signup>
        </Route>
        <Route path="/settings">
          <Settings loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </Route>
        <Route path="/home">
          <Account setCurrentAccount={setCurrentAccount} currentAccount ={loggedInUser} setLoggedInUser={setLoggedInUser} />
        </Route>
        <Route path="/account/:userId">
          <Account setCurrentAccount={setCurrentAccount} currentAccount ={currentAccount} setLoggedInUser={setLoggedInUser}/>
        </Route>
      </div>
    </Router>
  );
}
export default App;

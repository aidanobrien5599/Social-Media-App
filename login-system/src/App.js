import './App.css';
//import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Account from "./pages/Account.js";
import Signup from "./pages/Signup.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'


function App() {
  const[loggedInUser, setLoggedInUser] = useState(null);
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
        <Route path="/account" setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}>
          <Account loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </Route>
      </div>
    </Router>
  );
}
export default App;

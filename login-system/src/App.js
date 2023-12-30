import './App.css';
//import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Account from "./pages/Account.js";
import Signup from "./pages/Signup.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
        <Signup></Signup>
        </Route>
        <Route path="/account">
          <h1>Account</h1>
        </Route>
      </div>
    </Router>
  );
}
export default App;

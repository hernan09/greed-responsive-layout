import React, { Fragment } from "react";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/index.jsx'
import About from './Pages/About/index.jsx'
import Users from './Pages/Users/index.jsx'
import Navbar from './Components/Navbar/index.jsx';
import Footer from './Components/Footer/index.jsx'


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/users" component={Users}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;

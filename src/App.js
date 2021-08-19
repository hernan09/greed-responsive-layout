import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/index.jsx";
import Footer from "./Components/Footer/index.jsx";

const Home = lazy(() => import("./Pages/Home/index.jsx"));
const About = lazy(() => import("./Pages/About/index.jsx"));
const Users = lazy(() => import("./Pages/Users/index.jsx"));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

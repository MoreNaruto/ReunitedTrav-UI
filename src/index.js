import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import Home from "./pages/home";
import Events from "./pages/events"
import PageNotFound from "./pages/page-not-found"
import serviceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./routes/private";
import NavLink from "./components/NavLink";
import { Provider } from "react-redux";
import Login from "./pages/login";
import Signup from "./pages/sign-up";
import { Nav } from "react-bootstrap";

ReactDOM.render(
  <Provider store={store}>
    <AuthContext.Provider  value={true}>
      <Router>
        <Nav variant="pills" className="justify-content-start" defaultActiveKey="/home">
          <NavLink to="/" href="/home">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/signup" className="navbar-right">Sign up</NavLink>
          <NavLink to="/login" className="navbar-right">Login</NavLink>
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/events" component={Events} />
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </AuthContext.Provider>
  </Provider>,
  document.getElementById("container")
);

serviceWorker();

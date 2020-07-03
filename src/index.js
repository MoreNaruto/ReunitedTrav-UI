import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import store from "./store";
import Form from "./components/form";
import Home from "./components/home";
import Events from "./components/events";
import serviceWorker from "./registerServiceWorker";
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import 'bootstrap/dist/css/bootstrap.min.css';

const inputs = [{
    name: "username",
    placeholder: "username",
    type: "text"
}, {
    name: "password",
    placeholder: "password",
    type: "password"
}, {
    type: "submit",
    value: "Submit",
    className: "btn"
}]

const props = {
    name: 'loginForm',
    method: 'POST',
    action: '/perform_login',
    inputs: inputs
}

const params = new URLSearchParams(window.location.search)

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="*">
                <MainMenu/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById("root")
);

function MainMenu() {
    let location = useLocation();

    return (
        <div className="navFill">
            <ul className="nav">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/events">Events</NavLink>
            </ul>

            <div className="content">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                    >
                        <Switch location={location}>
                            <Route path="/home" children={<Home/>}/>
                            <Route path="/events" children={<Events/>}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    )
}

function NavLink(props) {
    return (
        <li className="navItem">
            <Link {...props} style={{color: "inherit"}}/>
        </li>
    );
}

serviceWorker();
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import store from "./store";
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

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route path="*">
                    <MainMenu/>
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("container")
)

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
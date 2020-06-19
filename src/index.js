import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import store from "./store";
import Form from "./components/form";
import serviceWorker from "./registerServiceWorker";

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
    <Provider store={store}>
        <Form {...props} error={params.get('error')}/>,
    </Provider>,
    document.getElementById("root")
);
serviceWorker();
import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import {Provider} from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import store from "./store"
import "./base.css"

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
 document.getElementById("root"))

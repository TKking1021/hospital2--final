import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './pages/Home'
import More from "./pages/More"
import './App.css'

export default class App extends Component {


    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/more" component={More} />
                </Switch>
            </Router>
        );
    }
}

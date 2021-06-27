import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveryNew = () => <h2>SurveryNew</h2>


class App extends Component {
    componentDidMount() {
        // able to call action creator fetchUser() since connect sent all actions as props to this component
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path = "/" component={Landing} />
                    <Route exact path = "/surveys" component={Dashboard} />
                    <Route path = "/surveys/new" component={SurveryNew} />
                </div>
                </BrowserRouter>
            </div>
        );
    }
};

// by using actions inside this connect ...all actions are assigned as props to the App component
export default connect(null, actions) (App);
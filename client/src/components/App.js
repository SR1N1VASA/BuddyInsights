import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';



class App extends Component {
    componentDidMount() {
        // able to call action creator fetchUser() since connect sent all actions as props to this component
        this.props.fetchUser();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path = "/" component={Landing} />
                    <Route exact path = "/surveys" component={Dashboard} />
                    <Route path = "/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        );
    }
};

// by using actions inside this connect ...all actions are assigned as props to the App component
export default connect(null, actions) (App);
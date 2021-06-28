//class based component - since we are planning to write to helper function for deciding what to render inside this component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    // helper method which checks this.props to check user is authenticated or not and send different blob of jsx which shows inside render()
    renderContent() {
        switch (this.props.auth) {
            case null: 
                return ;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return [
                    <li key="payment"><Payments /></li>,
                    <li key="credits" style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Buddy Insights
                        </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

//this function returns an object which will be passed to Header component as props
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps) (Header);
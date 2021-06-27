//class based component - since we are planning to write to helper function for deciding what to render inside this component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
                return (
                    <li><a href="/api/logout">Logout</a></li>
                );;
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
                        BuddyInsights
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
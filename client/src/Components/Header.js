import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return ([
                    <li><a href = '/auth/google'>Login As User</a></li>,
                    <li><a href = '/auth/google/grader'>Login As Grader </a> </li>
                ]
                )
            default: 
                if(this.props.auth.graderID) {
                    return ([
                        <li key = "2"><a href = '/api/logout'> Logout </a> </li>
                    ])
                } else {
                    return ([
                    <li key = "0" style = {{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key = "1" ><Payments/></li>,
                    <li key = "2"><a href = '/api/logout'> Logout </a> </li>
                    ]);
                }

        }
    }
    render () {
        return (
            <nav>
                <div className = "nav-wrapper"> 
                    <Link 
                    to = {this.props.auth ? '/surveys' : '/'}
                    className = "left brand-logo">
                       NoSkip 
                    </Link>
                    <ul className = "right"> 
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
            
        )
    }
}
function mapStateToProps(state) {
    return {auth: state.auth};
};

export default connect(mapStateToProps) (Header);
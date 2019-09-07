import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SurveyNew from './surveys/SurveyNew';
import GraderDashboard from './GraderDashboard';
import AddClasses from './classes/AddClasses';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
     
    render() {
        return (
            <div> 
                <BrowserRouter>
                    <div className = "container">
                        <Header />
                        <Route exact path = "/" component = {Landing}/>
                        <Route exact path = "/surveys" component = {Dashboard} />
                        <Route path = "/surveys/new" component = {SurveyNew} />
                        <Route path = "/graders" component = {GraderDashboard} />
                        <Route path = "/classes/new" component = {AddClasses} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions) (App);
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SurveyNew from './surveys/SurveyNew';
const GraderDashboard = () => <h2> Grader </h2>;


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
     
    render() {
        return (
            <div className = "container"> 
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path = "/" component = {Landing}/>
                        <Route exact path = "/surveys" component = {Dashboard} />
                        <Route path = "/surveys/new" component = {SurveyNew} />
                        <Route path = "/graders" component = {GraderDashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions) (App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys () {
        return this.props.surveys.reverse().map((survey) => {
            console.log(survey.dateSent);
            return (
                <div key = {survey._id} className = "card darken-1">
                    <div className = "card-content">
                        <span className = "card-title">
                            {survey.title}
                        </span>
                        <p> 
                            {survey.body}
                        </p>
                        <p className = "right">
                            Sent: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                        <div className ="card-action">
                            <a>Yes: {survey.yes} </a>
                            <a>No: {survey.no}</a>
                        </div>
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div> 
        );
    }
}

function mapStateToProps({ surveys }) {
    console.log(surveys);
    return {surveys};
}
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
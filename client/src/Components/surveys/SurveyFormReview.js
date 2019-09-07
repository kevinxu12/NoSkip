import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router'; 
class SurveyFormReview extends Component {
    renderContent() {
        return _.map(formFields, ({label, name}) => {
            return (<div key = {label}> 
                <label> {label}</label>
                <div> {this.props.formValues[name]} </div>
            </div>);
        });
    }
    render() {
        return (
            <div> 
                <h5> Please confirm all data is correct</h5>
                {this.renderContent()}
                <span> </span>
                <button type = "submit" className = "yellow darken-3 btn-flat white-text" onClick = {this.props.onCancel}> 
                    Back
                </button> 
                <button className = "teal btn-flat right white-text" onClick = {() => this.props.submitSurvey(this.props.formValues, this.props.history)}> 
                    Submit 
                    <i className="material-icons right"> email </i>
                </button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
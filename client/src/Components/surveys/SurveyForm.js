import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom'
import _ from 'lodash'; 
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const FIELDS = formFields;

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            //for production
            return <Field key = {name} label = {label} name = {name} type = "text" component = {SurveyField}/>
        })
    }
    render() {
        return (
            <div> 
                <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to= "/graders" className = "red btn-flat left white-text">
                        cancel
                    </Link>
                    <button type = "submit" className = "teal btn-flat right white-text"> 
                    Submit 
                    <i className="material-icons right"> done </i>
                    </button>
                </form>
                
            </div>
        );
    }

}
function validate (values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients|| '' );

    _.each(FIELDS, ({ name }) => {
        if(!values[name]) {
            errors[name] = "You must provide a value";
        }
    })
    

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash'; 

const FIELDS = [
    { label: "Survey Title", name: "title"},
    { label: "Subject Line", name: "subject"},
    { label: "Email Body", name: "body"},
    { label: "Lists", name: "lists"}
]
class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return <Field key = {name} label = {label} name = {name} type = "text" component = {SurveyField}/>
        })
    }
    render() {
        return (
            <div> 
                <form onSubmit = {this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type = "submit"> Submit </button>
                </form>
                
            </div>
        );
    }

}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
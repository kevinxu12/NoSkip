import React, { Component } from 'react';

class SurveyField extends Component {
    
    render() {
        const { input, label, meta }  = this.props;
        const { error, touched } = meta;
        return ( 
            <div> 
                <label>{label} </label>
                <input {...input} style = {{marginBottom: '20px'}}/>
                <div className = "red-text" style = {{ marginBottom : '20px'}}>
                    {touched && error}
                </div>
            </div>
        )
        }
    }
export default SurveyField;
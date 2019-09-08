import React, { Component} from 'react';
import { connect } from 'react-redux';
import { submitClasses } from '../../actions';
import classOptions from './classOptions';
import dateOptions from './dateOptions';
import DropDown from './DropDown';
import timeOptions from './timeOptions';
import { Link } from 'react-router-dom'
class AddClasses extends Component {
    state = {
        department: "",
        number: 121,
        timeStart: "10:30",
        timeEnd: "12:00",
        meetingDays: '',
    }
    render() {
        return (
            <div>
                
                    <DropDown name = "Pick Your Class" options = {classOptions} onClick={(dep) => {
                        this.setState({department: dep.value})
                        }}
                        isMulti = {false}/>
                    <DropDown name = "Pick Your Dates" options = {dateOptions} onClick={(meetingDays) => {
                        this.setState({meetingDays: meetingDays.map((days) => { return days.value})})
                        }}
                        isMulti = {true}/>
                    <DropDown name = "Pick Your Start Times" options = {timeOptions} onClick={(timeStart => {
                        this.setState({timeStart: timeStart.value}, function() {
                            console.log(this.state);
                        })
                        })}
                        isMulti = {false}/>
                    <Link to = "/surveys" className = "teal btn-flat orange left white-text">
                        Cancel
                    </Link>
                    <Link to="/surveys" onClick = {() => {this.props.submitClasses(this.state)}} className = "teal btn-flat right white-text">
                        Submit
                    </Link>
    
            </div> 
        )

    }
}

export default connect(null, { submitClasses })(AddClasses);
import React, { Component } from 'react'
import Select from 'react-select';

class DropDown extends Component {
    handleChange = (selectedOption) => {
        this.props.onClick(selectedOption);
    }
    render() {
        return (
        <div>
            <label> {this.props.name} </label>
            <Select options = {this.props.options} onChange = {this.handleChange} isMulti={this.props.isMulti}/>
        </div>
        
        )
    }

}

export default DropDown;
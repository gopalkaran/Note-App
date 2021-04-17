import React, { Component } from 'react';

export default class NumberInputField extends Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event){
        this.props.multiply(this.props.id, event.target.value);
    }
    
    render() {
        return (
            <div>
                <label>Input{this.props.id}:</label>
                <input onChange={this.changeHandler} />
            </div>
        )
    }
}

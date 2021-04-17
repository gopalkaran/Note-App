import React, { Component } from 'react'

export default class OutputField extends Component {
    render() {
        return (
            <div>
                <label>Product:</label>
                {this.props.product}
            </div>
        )
    }
}

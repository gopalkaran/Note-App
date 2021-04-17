import React, { Component } from 'react';
import NumberInputField from "./NumberInputField";
import OutputField from "./OutputField";

export default class Multiplier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input1 : 0,
            input2 : 0,
            product : 0
        }
        this.multiply = this.multiply.bind(this);
    }
    multiply(id,val){ 
        if(id==='1'){
            this.setState({input1:val , product:val*this.state.input2})
        }
        else if(id==='2'){
            this.setState({input2:val,  product:this.state.input1*val})
        }
    }
    render() {
        return (
            <div>
                <NumberInputField id="1" multiply={this.multiply}/>
                <NumberInputField id="2" multiply={this.multiply}/>
                <OutputField product={this.state.product}/>
            </div>
        )
    }
}

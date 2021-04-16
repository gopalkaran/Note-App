import axios from "axios";
import React, { Component } from 'react';

export default class Post extends Component {

    constructor(){
        super()
        this.state={
            postData : '',
            postResult : ''
        }
    }
    onChangeHandler = (event) =>{
        this.setState({postData : event.target.value});

    }
    onClickHandler = () =>{
        axios.post('http://ss.rabbil.com/test.php',this.state.postData).then(response=>{
            this.setState({postResult : response.data})
        }).catch(error=>{
            alert('Something went wrong')
        })

    }
    render() {
        return (
            <div>
                <p>{this.state.postResult}</p>
                <input onChange={this.onChangeHandler} type='text'/>
                <button onClick={this.onClickHandler}>Submit</button>
            </div>
        )
    }
}

import axios from "axios";
import React, { Component } from 'react';

export default class CountryList extends Component {

    constructor(){
        super()
        this.state = {
            mydata : []
        }
    }


    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
            this.setState({mydata:response.data});
        }).catch(error=>{
            console.log(error);
        });

    }

    render() {
        const myList = this.state.mydata.map((listItem)=>{
            return <li key={listItem.name}>{listItem.name}</li>

        })
        return (
            <div>
                <ul>
                    {myList}
                </ul>
            </div>
        )
    }
}

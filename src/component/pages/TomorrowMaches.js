import React, { Component } from 'react';
import './results.css';
import TomorrowMachesItem from './TomorrowMachesItem';

class Tomorrow extends Component{
    constructor() {  
        super();  
        this.state = {  
            ResulttData: []  
        }
    }
    componentDidMount(){
        fetch('http://worldcup.sfg.io/matches/tomorrow/')
        .then((resp) => resp.json())
        .then((data)=>{
           this.setState({ResulttData:data});
        });
    }
    
    render(){
        return (
            <TomorrowMachesItem items={this.state.ResulttData}/>
        )
    }
}

export default Tomorrow;
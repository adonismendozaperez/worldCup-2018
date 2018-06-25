import React, { Component } from 'react';
import './results.css';
import TodayMachesItem from './TodayMachesItem';

class TodayMaches extends Component{
    constructor() {  
        super();  
        this.state = {  
            ResulttData: []  
        }
    }
    componentDidMount(){
        fetch('http://worldcup.sfg.io/matches/today/')
        .then((resp) => resp.json())
        .then((data)=>{
           this.setState({ResulttData:data});
        });
    }
    
    render(){
        return (
            <TodayMachesItem items={this.state.ResulttData}/> 
        )
    }
}

export default TodayMaches;
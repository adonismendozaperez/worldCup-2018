import React, { Component } from 'react';
import './results.css';
import ResultsItem from './resultsItem';

class Results extends Component{
    constructor() {  
        super();  
        this.state = {  
            ResulttData: []  
        }
    }
    componentDidMount(){
        fetch('http://worldcup.sfg.io/teams/results')
        .then((resp) => resp.json())
        .then((data)=>{
           this.setState({ResulttData:data});
        });
    }
    
    render(){
        return (
             <ResultsItem items={this.state.ResulttData}/> 
        )
    }
}

export default Results;
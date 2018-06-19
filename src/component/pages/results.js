import React, { Component } from 'react';

class Results extends Component{
    constructor() {  
        super();  
        this.state = {  
            ResulttData: []  
        } 
        this.searchResults = this.searchResults.bind(this); 
    }
    searchResults(){
        fetch('http://worldcup.sfg.io/teams/results')
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data);
            this.setState={
                ResulttData: data
            }
        })
    }
    render(){
        return(
            <div>
                    <p>
                        {this.searchResults()}
                        {this.ResulttData && this.ResulttData.map((item,key)=> <li key={key}>{item.country}</li>)}
                    </p>
            </div>
        )
    }
}

export default Results;
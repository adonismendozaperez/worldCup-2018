import React, { Component } from 'react';
import './results.css'
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
            let ResulttData = data.map((dt,i)=>{
                return(
                    <div className="col-sm-3 mb-3 ml-3">
                        <div className="card" key={i}>
                        <div class="card-header">{dt.country}</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Wins: {dt.wins}</li>
                                <li className="list-group-item"> losses: {dt.losses}</li>
                            </ul>
                        </div>
                    </div>
                )
            });

           this.setState({ResulttData:ResulttData});
        });
    }
    render(){
        return (
            <div className="container">
                <div className="row"> { this.state.ResulttData}</div>
            </div>    
        )
    }
}

export default Results;
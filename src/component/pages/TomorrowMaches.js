import React, { Component } from 'react';
import './results.css';


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
            let ResulttData = data.map((dt,i)=>{
                return(
                    <div className="col-sm-4 ">
                        <div className="card" key={i}>
                        
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><small className="text-muted"> {dt.home_team.country} VS {dt.away_team.country}</small></li>
                                <li className="list-group-item">Location: <small className="text-muted">{dt.venue}</small></li>
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
                <p className="h2">Tomorrow Maches</p>
                <div className="row"> { this.state.ResulttData}</div>
            </div>    
        )
    }
}

export default Tomorrow;
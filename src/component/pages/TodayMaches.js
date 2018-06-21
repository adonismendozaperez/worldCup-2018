import React, { Component } from 'react';
import './results.css';


class Page extends Component{
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
            let ResulttData = data.map((dt,i)=>{
                return(
                    <div className="col-sm-4 ">
                        <div className="card" key={i}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Home:<small className="text-muted"> {dt.home_team.country}</small> | Goals: <small className="text-muted">{dt.home_team.goals}</small></li>
                                <li className="list-group-item">Away: <small className="text-muted">{dt.away_team.country}</small> | Goals: <small className="text-muted">{dt.away_team.goals}</small></li>
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
                <div className="row"> { this.state.ResulttData}</div>
            </div>    
        )
    }
}

export default Page;
import React, { Component } from 'react';
import './results.css';

class TomorrowMachesItem extends Component{
    render(){
        const { items } = this.props;
        return (
            <div className="container">
                <p className="h2">Tomorrow Maches.</p>
                <div className="row"> 
                { items.map((dt,i)=>
                    <div className="col-sm-4 ">
                        <div className="card" key={i}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><small className="text-muted"> {dt.home_team.country} VS {dt.away_team.country}</small></li>
                                <li className="list-group-item">Location: <small className="text-muted">{dt.venue}</small></li>
                            </ul>
                        </div>
                    </div>
                )}
                </div>
            </div>    
        )
    }
}

export default TomorrowMachesItem;
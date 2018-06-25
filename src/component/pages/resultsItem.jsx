import React, { Component } from 'react';
import './results.css';

class ResultsItem extends Component{
    render(){
        const { items } = this.props;
        return (
            <div className="container">
                <div className="row"> 
                { items.map((dt,i)=>
                    <div className="col-sm-4 mb-3">
                        <div className="card" key={i}>
                            <div className="card-header">{dt.country}</div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Wins: {dt.wins}</li>
                                    <li className="list-group-item"> losses: {dt.losses}</li>
                                </ul>
                        </div>
                    </div>
                )}
                </div>
            </div>    
        )
    }
}

export default ResultsItem;
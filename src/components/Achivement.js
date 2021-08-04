import React from 'react';
import Title from '../Shared/Title';

class Achivements extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            achivement : [
                {
                    id:1,
                    date:'July 23, 2021',
                    team1: {
                        name: 'Lions cs',
                        score: 125,
                        wickets:2,
                        overs:10
                    },
                    team2: {
                        name: 'Pottuvil CC',
                        score: 126,
                        wickets: 5,
                        overs: 10            
                    },

                    matchSummary: 'Pottuvil CS Won the match by 5 Wickets',
                    matchWinStatus: 'lost'
                },
                {
                    id:2,
                    date:'July 23, 2021',
                    team1: {
                        name: 'Lions cs',
                        score: 99,
                        wickets:2,
                        overs:9.2
                    },
                    team2: {
                        name: 'Pottuvil CC',
                        score: 98,
                        wickets: 8,
                        overs: 10            
                    },

                    matchSummary: 'Lions won the match by 8 Wickets',
                    matchWinStatus: 'win'
                },
                {
                    id:3,
                    date:'July 16, 2021',
                    team1: {
                        name: 'Lions cs',
                        score: 145,
                        wickets:2,
                        overs:10
                    },
                    team2: {
                        name: 'Maither CC',
                        score: 139,
                        wickets: 3,
                        overs: 10            
                    },

                    matchSummary: 'Lions won by 8 wickrets',
                    matchWinStatus: 'win'
                }
            ]
         }
    }
    render() { 
        const {achivement} = this.state
        return (  
            <div>
                <Title  title="Achivements"/>

                {
                    achivement.length > 0 ? 
                      
                    achivement.map( (item,key) => {
                        return(

                     
                
                <div className="achivement row" key={key}>
                    <div className="col-2">
                            {item.date}
                    </div>

                    <div className="col">

                        <div className="row">
                                <div className="col">
                                    <div className="text-uppercase p-1">{item.team1.name}</div>
                                    <div>{ `(  ${item.team1.score}  /  ${item.team1.wickets})`} - {item.team1.overs}</div>
                                    
                                </div> 
                            
                                <div className="col">
                                    <div className="text-uppercase p-1">{item.team2.name}</div>
                                    <div>{ `(  ${item.team2.score}  /  ${item.team2.wickets})`} - {item.team2.overs}</div>
                                    
                            </div> 
                        
                        </div>

                        <div className="row p-2">
                            {item.matchSummary}
                        </div>

                        <div className="d-flex justify-content-end">
                            <button className={`btn btn-sm ${item.matchWinStatus === "win" ? 'btn-success' : 'btn-warning' } text-capitalize`} type="button">{item.matchWinStatus}</button></div>
                    
                    </div>
                
                </div>

                )
            })

                :

                <div className="alert alert-info" role="alert">
                No Matches Found....
              </div>

                }


            </div>
        );
    }
}
 
export default Achivements;
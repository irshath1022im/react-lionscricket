
import axios from 'axios';
import React from 'react'
import { Alert } from 'react-bootstrap';

class PlayersLogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs:[]
          }
    }

componentDidMount = async ()=>{

    const {match_id} = this.props

    try {
        let result = await axios.get(`${process.env.REACT_APP_API_SERVER}/getBattedPlayersLogs/${match_id}`);

        this.setState({
            logs: result.data.data
        })


    } catch (error) {
        
    }
}
    render() { 
        const{logs} = this.state

                return ( 
                    <div>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Player</th>
                                <th scope="col">Status</th>
                                <th scope="col">Runs</th>
                                <th scope="col">Ball</th>
                                <th scope="col">4s</th>
                                <th scope="col">6s</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    logs.length > 0 &&
                                
                                    logs.map( (log,key)=>{
                                        return(
                                            <tr key={key}>
                                                <th scope="row">{log.player}</th>
                                                <td>{log.player_name}</td>
                                                <td>
                                                    {
                                                        
                                                    log.batting_status != 0 ? 'out ' : null }
                                                    
                                                </td>
                                                <td>{log.batting_runs}</td>
                                                <td>
                                                {
                                                
                                                    log.faced_balls.balls
                                                }
                                                </td>
                                                <td>{log.byRuns[4]}</td>
                                                <td>{log.byRuns[6]}</td>
                                               
                                            </tr>
                                        )
                                    })
                                
                            }
                            </tbody>
                            </table>
                        </div>
                        
                </div>
                );
    }
}
 
export default PlayersLogs;
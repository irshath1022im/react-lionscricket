
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import Layouts from '../../components/Layouts'
import PlayersLogs from '../../components/ScoreCard/PlayersLogs'
import PlayersNotBatted from '../../components/ScoreCard/PlayersNotBatted'
import ScoreCardShowSummary from './ScoreCardShowSummary'

class ScoreCardShow extends React.Component {

    constructor(props){
        super(props)

        this.state={
            loading:true,
            scorecard:{},
            activePlayers:[],
            scoreCardRequestError: null,
        }
    }

componentDidMount = async() =>{

    const {params} = this.props.match
    try {
        // http://10.10.106.194:8000/api/scoreCard/4
        
        const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/scoreCard/${params.id}`)

        this.setState({
            scorecard: result.data.data,
        })

        // console.log(result.data.data.match_id)
        
           
        

    } catch (error) {
            console.log(error.request)
            if(error.request.status === 404) {
                this.setState({
                    scoreCardRequestError: error.request.statusText
                })
            }
    }
}

    render() {
       
        const {scorecard,notYetPlayed, scoreCardRequestError } = this.state

            if(!scoreCardRequestError ) {
                return(
                    <Layouts>
                  
                        {
                           Object.keys(scorecard).length > 0 ?

                            <div>
                                <ScoreCardShowSummary scorecard = {scorecard} />
                                {
                                    scorecard.scores_count > 0 ?
                                    <div>
                                        <PlayersLogs match_id={scorecard.match_id}/>
                                        
                                    </div>
                                    :

                                    <Alert variant="info"><h6>Sorr!, No Scores found...</h6></Alert>
                                }

                            </div>
                            :
                            <Spinner animation="border" />
                        }

                    <hr />

                    <div>
                        <h6>Bowling ...</h6>

                        <div className="table-responsive">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Bowler</th>
                            <th scope="col">Runs</th>
                            <th scope="col">Over</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Atharith</td>
                            <td>25</td>
                            <td>15</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>


                    </div>

                </Layouts>

                )

            }

        else {
            return(
                <Layouts>
                    <div className="alert alert-info" role="alert">
                      <h4 className="alert-heading">Sorry!</h4>
                      <p>We Could not found the score Card . </p>
                    </div>                  
                </Layouts>
            )
        }
    }


}

export default ScoreCardShow;

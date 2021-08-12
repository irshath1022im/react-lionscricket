
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import AdminLayouts from '../../../components/AdminLayouts'
// import Layouts from '../../components/Layouts'
// import PlayersNotBatted from '../../components/ScoreCard/PlayersNotBatted'
import ScoreCardShowSummary from './ScoreCardShowSummary'
import PlayerLogs from '../../../components/ScoreCard/PlayersLogs';
import BowlerLogs from './BowlerLogs'

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
                    <AdminLayouts>
                  
                        {
                           Object.keys(scorecard).length > 0 ?

                            <div>
                                <ScoreCardShowSummary scorecard = {scorecard} />
                                {
                                    scorecard.scores_count > 0 ?
                                    <div>
                                        <PlayerLogs score_card_id={scorecard.score_card_id}/>
                                        <BowlerLogs score_card_id={scorecard.score_card_id} />
                                        
                                    </div>
                                    :

                                    <Alert variant="info"><h6>Sorr!, No Scores found...</h6></Alert>
                                }

                            </div>
                            :
                            <Spinner animation="border" />
                        }

                    <hr />

                

                </AdminLayouts>

                )

            }

        else {
            return(
                <AdminLayouts>
                    <div className="alert alert-info" role="alert">
                      <h4 className="alert-heading">Sorry!</h4>
                      <p>We Could not found the score Card . </p>
                    </div>                  
                </AdminLayouts>
            )
        }
    }


}

export default ScoreCardShow;


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layouts from '../../components/Layouts'
import PlayersNotBatted from '../../components/ScoreCard/PlayersNotBatted'
import ScoreCardShowSummary from './ScoreCardShowSummary'

class ScoreCardShow extends React.Component {

    constructor(props){
        super(props)

        this.state={
            loading:true,
            scorecard:{},
            activePlayers:[],
            notYetPlayed:[],
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
                    
                        <ScoreCardShowSummary scorecard = {scorecard} />
                        
                    <div>
                        Scores : 145 / 2 (7.5)
                    </div>

                    <div>
                        <div className="table-responsive">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Player</th>
                            <th scope="col">Runs</th>
                            <th scope="col">Ball</th>
                            <th scope="col">4s</th>
                            <th scope="col">6s</th>
                            <th scope="col">0</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Atharith</td>
                            <td>25</td>
                            <td>15</td>
                            <td>2</td>
                            <td>2</td>
                            <td>3</td>
                            </tr>

                            <tr>
                            <th scope="row">1</th>
                            <td>Atharith</td>
                            <td>25</td>
                            <td>15</td>
                            <td>2</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>

                        <tr>
                        <th scope="row">1</th>
                        <td>Atharith</td>
                        <td>25</td>
                        <td>15</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                        </tr>
                        
                        </tbody>
                        </table>
                        </div>
                            
                    </div>
                        {
                        
                            <PlayersNotBatted  match_id={scorecard.match_id} />
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

                            <tr>
                            <th scope="row">1</th>
                            <td>Atharith</td>
                            <td>25</td>
                            <td>15</td>
                        </tr>

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




// updateNotYetPlayers = () => {

//     useEffect( async () => {
//         try {
            
//             const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/getYetToBatPlayers/${params.id}`)

//             setNotYetPlayed(result.data)
//         } catch (error) {
            
//         }
        
//     }, [])
// }



//     if(params.id) {

//         return(
         
           
//         )
//     } else {
//         <Spinner varient="info" animation="border" />
//     }

    
// }

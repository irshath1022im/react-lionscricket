
import axios from 'axios';
import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Layouts from '../../components/Layouts';
import ScoreCard from '../../components/ScoreCard/ScoreCard';

class ScoreCardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            scoreCards: [],
            requestError: null
         }
    }

componentDidMount = async ()=>{

        // this.setState({
        //     scoreCards:[
        //         {
        //             "score_card_id": 1,
        //             "date": "2021-08-07",
        //             "match_id": 1,
        //             "team_01": "Lions CC",
        //             "opponent_team": "Muaither CC",
        //             "match_status": "closed"
        //         },
        //         {
        //             "score_card_id": 2,
        //             "date": "2021-08-18",
        //             "match_id": 2,
        //             "team_01": "Lions CC",
        //             "opponent_team": "Golden Star",
        //             "match_status": "closed"
        //         },
        //     ]
        // })

        try {
            
            const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/scoreCard`)

            this.setState({
                scoreCards: result.data.data,
            })
        } catch (error) {
            
            this.setState({
                requestError: 'Request Error'
            })

        }

}

    render() { 
        const {scoreCards, requestError} = this.state
        return (
            <Layouts>
                
            {

                requestError == null ?
                
                        scoreCards.length > 0 ? 

                        scoreCards.map( (card, key)=>{
                            return(
                                <ScoreCard card = {card} />
                            )
                        })

                        :

                        <Alert variant="warning">No Data Found !</Alert>
                
                :

                      
                        <Alert variant="warning">{requestError} !</Alert>
            }

            </Layouts>
            
          );
    }
}
 
export default ScoreCardHome;
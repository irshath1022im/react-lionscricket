
import axios from 'axios';
import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import AdminLayouts from '../../../components/AdminLayouts';
// import Layouts from '../../components/Layouts';
import ScoreCard from '../../../components/ScoreCard/ScoreCard';

class ScoreCardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            scoreCards: [],
            requestError: null
         }
    }

componentDidMount = async ()=>{
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
            <AdminLayouts>
                
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

            </AdminLayouts>
            
          );
    }
}
 
export default ScoreCardHome;
import axios from 'axios';
import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc';
import Title from '../Shared/Title';
import PlayerCard from './Players/PlayerCard';
import { Spinner } from 'react-bootstrap';

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            players: [],
            next_page_url: null,
            prev_page_url: null,
            loading: true
             }
    }

async componentDidMount() {

    try {

        this.setState({
            loading: true
        })
    
        const result = await  axios.get(`${process.env.REACT_APP_API_SERVER}/player`)
        // console.log(result)
        this.setState({
            loading: false,
            players: result.data.data,
            next_page_url: result.data.next_page_url,
            prev_page_url: result.data.prev_page_url
        })

    } catch (error) {
        console.log(error)
        this.setState({
            loading: true
        })
    }

 
}

loadMorePlayer = async () =>{
        const {next_page_url} = this.state

        if(next_page_url !== null ) {
            try {
                this.setState({
                    loading: true
                })

                const result = await axios.get(next_page_url)
                // console.log(result)
                if(result.status === 200) {
                    this.setState({
                        players: result.data.data,
                        next_page_url: result.data.next_page_url,
                        prev_page_url: result.data.prev_page_url,
                        loading:false

                    })
                }
            } catch (error) {
                console.log(error)
                this.setState({
                    loading: true
                })
            }
        }

         

}

loadPrevePlayer = async () =>{
    const {prev_page_url} = this.state

    if(prev_page_url !== null ) {
            try {

                this.setState({
                    loading: true
                })
                const result = await axios.get(prev_page_url)
                // console.log(result)
                if(result.status === 200) {
                    this.setState({
                        players: result.data.data,
                        next_page_url: result.data.next_page_url,
                        prev_page_url: result.data.prev_page_url,
                        loading:false

                    })
                }
            } catch (error) {
                console.log(error)
                this.setState({
                    loading: true
                })
            }
        }


}

render() { 
        const {players, loading} = this.state;
        return (
            <div>
                <Title  title="Players" />

                {

                    !loading ?

                    // console.log(players.length)
                    players.length > 0 ?

                        <div className="player-widget">

                                <div className="players-fcPrevious">
                                    <FcPrevious onClick={this.loadPrevePlayer}/>
                                </div>
                            <div className="players" >
                              
                                {
                                    players.map( (player,key)=>{
                                        return(
                                           <PlayerCard  player={player} key={key} />
                                        )
                                    })

                            }
                            
                        </div>

                        <div className="players-fcNext">
                          <FcNext onClick={this.loadMorePlayer}/>
                        </div>

                    </div>

                    : 
                        <div className="alert alert-info" role="alert">
                        No Player Found...
                        </div>

                    :
                
                    <Spinner animation="border" variant="primary" className="text-center" />
                  
                }
              
                 
            </div>
          );
    } // end of render
} // end of class
 
export default Players;
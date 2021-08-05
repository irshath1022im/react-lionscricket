import axios from 'axios';
import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc';
import Title from '../Shared/Title';
import PlayerCard from './Players/PlayerCard';

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            players: [],
            next_page_url: null,
            prev_page_url: null,
             }
    }

async componentDidMount() {

    try {
        const result = await  axios.get(`${process.env.REACT_APP_API_SERVER}/player`)
        // console.log(result)
        this.setState({
            players: result.data.data,
            next_page_url: result.data.next_page_url,
            prev_page_url: result.data.prev_page_url
        })

    } catch (error) {
        console.log(error)
    }

 
}

loadMorePlayer = async () =>{
        const {next_page_url} = this.state
    try {
        const result = await axios.get(next_page_url)
        // console.log(result)
        if(result.status === 200) {
            this.setState({
                players: result.data.data,
                next_page_url: result.data.next_page_url,
                prev_page_url: result.data.prev_page_url

            })
        }
    } catch (error) {
        console.log(error)
    }

         

}

loadPrevePlayer = async () =>{
    const {prev_page_url} = this.state
    try {
        const result = await axios.get(prev_page_url)
        // console.log(result)
        if(result.status === 200) {
            this.setState({
                players: result.data.data,
                next_page_url: result.data.next_page_url,
                prev_page_url: result.data.prev_page_url

            })
        }
    } catch (error) {
        console.log(error)
    }


}

render() { 
        const {players} = this.state;
        return (
            <div>
                <Title  title="Players" />

                {

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

                  
                }
              
                 
            </div>
          );
    } // end of render
} // end of class
 
export default Players;
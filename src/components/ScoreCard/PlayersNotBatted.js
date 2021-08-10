
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'


class PlayersNotBatted extends React.Component {

    constructor(props){
        super(props)

        this.state={
            notPlayedPlayers:[]
        }
    }

componentDidMount = async()=> {
    
    const {match_id} = this.props
    try {
        const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/getYetToBatPlayers/${match_id}`)

        this.setState({
            notPlayedPlayers: result.data
        })
        
    } catch (error) {
        
    }
  
}

render() {
        const {notPlayedPlayers} = this.state
    return (
        <div>
        {
            notPlayedPlayers.length > 0 ?

            <div>
                Yet to Bat: 
                {
                    notPlayedPlayers.map( (item,key) =>{
                        return(
                            <span key={key}> {item.player.name} / </span>
                        )
                    })
                }
            </div>
            :

        <Spinner  animation="border" />
        }

        </div>
    )
    }
}

export default PlayersNotBatted
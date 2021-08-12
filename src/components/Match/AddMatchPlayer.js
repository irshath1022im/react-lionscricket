
import Axios from 'axios'
import React, { Component } from 'react'
import { Alert, Col, Form, Image, ListGroupItem, Row, Spinner } from 'react-bootstrap'
import AdminLayouts from '../AdminLayouts'

export default class AddMatchPlayer extends Component {
        constructor(props){
            super(props)

            this.state={
                activeMatchPlayers:[],
                lionsPlayer:[],
                selected_player: 0,
                requestLoading: false
            }
        }   

componentDidMount = ()=>{

    this.getLionsPlayer()
    this.getActiveMatchPlayer()
}

getLionsPlayer = async ()=>{

    try {
        const lionsPlayer = await Axios.get(`${process.env.REACT_APP_API_SERVER}/getLionsPlayers`)
        
        this.setState({
            lionsPlayer: lionsPlayer.data
        })

    } catch (error) {
        
    }
}

getActiveMatchPlayer = async ()=>{

    try {
        const result = await Axios.get(`${process.env.REACT_APP_API_SERVER}/matchPlayer/${this.props.match.params.id}`)

                this.setState({
                    activeMatchPlayers: result.data.data,
                })

    } catch (error) {
        
    }
}

checkPlayer = async (e)=>{
    // console.log(e)

        let filteredId = this.state.activeMatchPlayers.filter( (item)=>{
           return item.id == e.target.value
        })

        if(filteredId.length == 0) {

              this.setState({
                selected_player: e.target.value
                 })
        } else {
            alert('Alread Added')
            
        }

  
}

addToList = async ()=>{

    let data = {
        match_id: this.props.match.params.id,
        player_id: this.state.selected_player
    }


    this.setState({
        requestLoading: true
    })
      
    
    try {

        const result = await Axios.post(`${process.env.REACT_APP_API_SERVER}/matchPlayer/`, data)

                   
    
                if(result.status === 200) {
                    this.getActiveMatchPlayer()
                    this.setState({
                        requestLoading: false,
                        selected_player: 0
                    })
                }
               
          } catch (error) {
    }
}

    render() {
        const {activeMatchPlayers, lionsPlayer,selected_player, requestLoading} = this.state
        const {params} = this.props.match
        return (
            <AdminLayouts>
            <div className="container">
                <h5>Add MatchPlayer</h5>

                    <form>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Player</label>
                        <select className="custom-select my-1 mr-sm-2" 
                                value={selected_player}
                                onChange={ (e)=>this.checkPlayer(e)}
                        >
                          <option value={0}>Choose...</option>
                          {
                              lionsPlayer.length > 0 &&

                                lionsPlayer.map( (player,key) =>{
                                    return(
                                        <option key={key} value={player.id}>{player.name}</option>
                                    )
                                })
                          }
                        </select>
                      </div>

                        
                        <button className="btn btn-primary" type="button"
                            disabled={ selected_player != 0 ? false : true}
                            onClick={this.addToList}>Add to List</button>

                    </form>

              

                <h6>Currently Registered Players for Match ID:- <span className=" p-2 btn btn-info">{params.id}</span></h6>
                {

                    !requestLoading ?
                        activeMatchPlayers.length > 0 ?

                        activeMatchPlayers.map( (player, key) =>{
                                return(
                                   <ListGroupItem key={key}>
                                       <span>{player.name}</span>
                                   </ListGroupItem>
                                )
                            })
                        :

                        <Alert variant="info">
                            No Players has been Added...
                        </Alert>
                    :

                    <Spinner animation="border"></Spinner>
                }

            </div>
            </AdminLayouts>
        )
    }
}

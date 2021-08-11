
import Axios from 'axios'
import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLayouts from '../../components/AdminLayouts'

export default class PlayersHome extends Component {
    
    constructor(props){
        super(props)
            this.state={
                players:[],
                request_error:[]
            }

    }

async componentDidMount() {
    try {
        const result = await Axios.get(`${process.env.REACT_APP_API_SERVER}/player`)

        this.setState({
            players: result.data.data
        })

    } catch (error) {
        
        if(error.request) {
            // console.log(error.request)
            this.setState({
                request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
            })
        }else if(error.response){
            console.log(error.response.status)
        }
    }

}


render() {
        const{players,request_error} = this.state;

        return (
          <AdminLayouts>

          <Link to="/admin/players/create">
                <button className="btn btn-info btn-sm" type="button">Add New</button>
          </Link>

        
            {
                request_error.length > 0 &&
                    request_error.map( (error,key) =>{
                        return(
                            <div className="alert alert-info" role="alert" key={key}>
                                  <span>{error}</span>       
                            </div>
                        )
                    })
              

            }
        
                {
                    players.length > 0 ?
                    <div className="d-flex flex-column flex-md-row flex-wrap">
                       
                      {  players.map( (player,key)=>{
                            return(
                                <div className="card m-2" key={key}>
                                  <img className="card-img-top" src={player.url} alt={player.name} style={{  width:'40%'}}/>
                                  <div className="card-body ">

                                    <div className="d-flex">
                                        <h5 className="card-title">{player.name}</h5>
                                        <Link to ={`/admin/players/${player.id}/edit`}>
                                            <button className="btn btn-sm btn-secondary" type="button">Edit</button>
                                        </Link>
                                    </div>

                                    <span>DOB: / {player.dob}</span>
                                    <span>Team: / {player.team.name}</span>
                                   
                                  </div>

                                  <div>
                                    
                                    <button className="btn btn-primary btn-sm" type="button">Matches : 25</button>

                                    <button className="btn btn-primary btn-sm" type="button">Scores : 425</button>
                                  </div>
                                </div>
                            )
                        })
                    }
                    </div>
                      
                    :
                    <Spinner animation="border"></Spinner>
                }
          </AdminLayouts>
        )
    }
}

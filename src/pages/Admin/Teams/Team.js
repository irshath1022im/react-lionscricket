
import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminLayouts from '../../../components/AdminLayouts'
import Loading from '../../../components/Loading'

export default class Team extends Component {
    
    constructor(props){
        super(props)
            this.state={
                teams:[],
                request_error:[]
            }

    }

async componentDidMount() {

    // this.setState({
    //     teams: [
    //         {
    //             id:1,
    //             name: 'Lions SC'
    //         },
    //         {
    //             id:2,
    //             name: 'Pottivil SC'
    //         }
    //     ]
    // })

   
    try {
        const result = await Axios.get(`${process.env.REACT_APP_API_SERVER}/team`)

        this.setState({
            teams: result.data
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
        const{teams,request_error} = this.state;

        return (
          <AdminLayouts>

          <Link to="/admin/teams/create">
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
                    teams.length > 0 ?
                    <div className="d-flex flex-column flex-md-row flex-md-wrap container">
                       
                      {  teams.map( (team,key)=>{
                            return(
                                <div className="card m-2" key={key}>
                                  <img className="card-img-top" src={`/images/${team.thumbnail}`} alt={team.name} />
                                  <div className="card-body">
                                    <h5 className="card-title">{team.name}</h5>
                                    <button className="btn btn-outline-info" type="button">Players</button>
                                  </div>
                                </div>
                            )
                        })
                    }
                    </div>
                      
                    :
                    <Loading />
                }
          </AdminLayouts>
        )
    }
}

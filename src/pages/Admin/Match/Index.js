import Axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayouts from '../../../components/AdminLayouts'
import MatchCard from '../../../components/Match/MatchCard'

class MatchesHome extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            matches:[]
        }
    }

componentDidMount () {

    Axios.get(`${process.env.REACT_APP_API_SERVER}/match`)
    .then( res => {
        if(res.status === 200){
            this.setState({
                matches: res.data
            })
        }
    })
    .catch(err => console.log(err))
}

    render(){
        const {matches} = this.state
        return (
            <AdminLayouts>
                <div>
                    <Link to="/admin/matches/create">
                        <button className="btn btn-secondary" type="button">Add New</button>
                    </Link>
                </div>

                {
                    matches.length > 0 ?
                    matches.map( (match, key) =>{
                        return(

                            <MatchCard match={match} key={key}/>
                        )
                    })

                    :

                    <div className="alert alert-info" role="alert">
                      No Matches Registered 
                    </div>
                    
                }
                    
            </AdminLayouts>
        )
    }
}

export default MatchesHome;
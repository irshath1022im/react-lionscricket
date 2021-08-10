import axios from 'axios';
import dateFormat from 'dateformat';
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Title from '../Shared/Title';
import { Link } from 'react-router-dom';

class Achivements extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            achivement : [],
            loading:true,
            links:{}
         }
    }

async componentDidMount (){

        this.setState({
            loading: true
        })

    try {
        const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/matchSummary`)

        // console.log(result)
            this.setState({
                loading:false,
                achivement: result.data.data,
                links:result.data.links
            })

    } catch (error) {
        // console.log(error)
        this.setState({
            achivement: [],
            loading:true
        })
    }


}


loadMore = async(url)=>{
  
    this.setState({
        loading: true
    })

    try {

        const result = await axios.get(url)

        // console.log(result)
        this.setState({
            loading:false,
            achivement: result.data.data,
            links:result.data.links
        })

    } catch (error) {
        
        console.log(error)
        this.setState({
            achivement: [],
            loading:true
        })
    }
}

    render() { 
        const {achivement,loading, links} = this.state
        return (  
            <div>
                <Title  title="Achivements"/>

                
                {
                    !loading ? 

                            
                            achivement.length > 0 ? 
                                
                                <div>
                              {  achivement.map( (item,key) => {
                                    return(
                            
                                    <div className="achivement row" key={key}>

                                        <div className="col-2">
                                              { dateFormat(item.date, 'mmm d, yyyy')}
                                                
                                        </div>

                                        <div className="col">

                                            <div className="row">
                                                    <div className="col">
                                                        <div className="text-uppercase p-1">{item.team1.name}</div>
                                                        <div>{ `(  ${item.team1.score}  /  ${item.team1.wickets})`} - {item.team1.overs}</div>
                                                        
                                                    </div> 
                                                
                                                    <div className="col">
                                                        <div className="text-uppercase p-1">{item.opponent_team.name}</div>
                                                        <div>{ `(  ${item.opponent_team.score}  /  ${item.opponent_team.wickets})`} - {item.opponent_team.overs}</div>
                                                        
                                                </div> 
                                            
                                            </div>

                                            <div className="row p-2">
                                                {item.winning_summary}
                                            </div>

                                            <Link to={`/scorecard/${item.id}`}>
                                                <Button 
                                                size="sm" 
                                                variant="info" 
                                                className=""
                                            >Score Card</Button>
                                            </Link>
                                           



                                            <div className="d-flex justify-content-end">
                                                <button className={`btn btn-sm ${item.lions_win_status === "Win" ? 'btn-success' : 'btn-warning' } text-capitalize`} type="button">{item.lions_win_status}</button></div>
                                        
                                        </div>
                                    
                                        
                                    </div>

                                    )   
                                    
                                 })

                               

                            }


                                    <Button 
                                        size="sm" 
                                        variant="info" 
                                        className="" 
                                        onClick={() => this.loadMore(links.next)} 
                                        disabled= { links.next !== null ? false : true}
                                    >Load More</Button>

                                    <Button 
                                        size="sm" 
                                        variant="info" 
                                        className="" 
                                        onClick={() => this.loadMore(links.prev)} 
                                        disabled= { links.prev !== null ? false : true}
                                    >Prev</Button>
                            </div>

                            :

                            <div className="alert alert-info" role="alert">
                            No Matches Found....
                        </div>

                            
                : 

                    <Spinner animation="border" variant="primary" className="text-center" />

                }


            </div>
        );
    }
}
 
export default Achivements;

import Axios from 'axios';
import React from 'react'

import AdminLayouts from '../../components/AdminLayouts';
import RequestError from '../../components/RequestError';

class CreateMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams:[],
            date:'',
            team_one_id: 1,
            oppenent_team: '',
            remark:'',
            status:'',
            request_error:[]
          }
    }

componentDidMount() {
    const {params} = this.props.match

    Axios.get(`${process.env.REACT_APP_API_SERVER}/team`)
    .then( res => {
        this.setState({
            teams: res.data
        })
    })
    .catch( error => console.log(error))

    // console.log(params.id)

    if(params.id){
        Axios.get(`${process.env.REACT_APP_API_SERVER}/match/${params.id}`)
        .then( res => {
            this.setState({
               ...this.state,
               ...res.data
            })
        })
    }



}




addMatch = ()=>{

    const {params} = this.props.match
    const { date, oppenent_team,team_one_id,remark,status} = this.state

    if(!date || !oppenent_team){
        alert('Please Check the important fields')
    } else {

        let data = {
            date,
            oppenent_team,
            team_one_id,
            remark,
            status
        }

        if(params.id) {


            Axios.put(`${process.env.REACT_APP_API_SERVER}/match/${params.id}`, data )
            .then(res =>{
                if( res.status === 200){
                    this.props.history.push('/admin/matches')
                }
            })
            .catch(error => {
                if(error.request) {
                    // console.log(error.request)
                    this.setState({
                        request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
                    })
                }else if(error.response){
                    console.log(error.response.status)
                }
            })

    // if there is not id in props

        }else {


        Axios.post(`${process.env.REACT_APP_API_SERVER}/match`, data )
        .then(res =>{
            if( res.status === 200){
                this.props.history.push('/admin/matches')
            }
        })
        .catch(error => {
            if(error.request) {
                // console.log(error.request)
                this.setState({
                    request_error: [`Request Error ${error.request.status} - ${error.request.statusText}`]
                })
            }else if(error.response){
                console.log(error.response.status)
            }
        })

        }
    }
    

}

render() { 
        const {teams,date,team_one_id,oppenent_team,remark,request_error,status} = this.state
     
        return (
            <AdminLayouts>

                <RequestError request_error={request_error}/>

                <h4>Add New Match</h4>
                <hr />

                <form>

                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Match Date</label>
                    <input type="date" className="form-control" 
                        onChange={(e)=>this.setState({ date: e.target.value})}
                        value={date}
                        />
                  </div>

                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Team 1</label>
                    <select className="custom-select my-1 mr-sm-2">            
                      <option value={1}>Lions</option>
                    </select>
                  </div>

                  <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Team 2</label>
                  <select className="custom-select my-1 mr-sm-2" 
                        onChange={ (e) => this.setState({ oppenent_team: e.target.value})}

                        value={oppenent_team}
                    >
                    <option>Choose...</option>
                    {
                        teams.length > 0 &&

                        teams.map( (team,key)=>{
                            return(
                                <option value={team.id} key={key}  
                                >{team.name}</option>
                            )
                        })
                    }
           
                  </select>
                </div>


                <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Status</label>
                <select className="custom-select my-1 mr-sm-2" 
                      onChange={ (e) => this.setState({ status: e.target.value})}
                      value={status}
                  >
                  <option value={0}>Choose...</option>
                  <option value="upcoming">Upcoming...</option>
                  <option value="scheduled">Scheduled...</option>
                  <option value="active">Active...</option>
                  <option value="closed">Closed...</option>
                 
                </select>
              </div>


                <label htmlFor="formGroupExampleInput2">Remark</label>
                <textarea className="form-control" rows={3} defaultValue={""} onChange={ (e)=>this.setState({ remark: e.target.value})} value={remark}/>

            
                <button className="btn btn-primary" type="button" onClick={ this.addMatch}>Add</button>


                    

                </form>
                
            </AdminLayouts>
          );
    }
}
 
export default CreateMatch;
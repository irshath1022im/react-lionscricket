
import axios from 'axios'
import React, { Component } from 'react'
import AdminLayouts from '../../../components/AdminLayouts'
import {CgRemoveR} from 'react-icons/cg'

export default class CreateScore extends Component {

        constructor(props){
            super(props)

            this.state={
                lions_players:[],
                notBattedPlayers:[],
                active_players:[],
                selected_palyer:''
            }
        }

async componentDidMount () {

    this.getMatchPlayers(1)

}

getMatchPlayers = async (match_id)=>{

    try {
        let result = await axios.get(`${process.env.REACT_APP_API_SERVER}/matchPlayer/${match_id}`)

        if(result.data.data.length > 0) {
                this.setState({
                    lions_players: result.data.data,
                    notBattedPlayers : result.data.data.filter( player => {
                                            return player.batting_status === 'not yet'
                                        }),
                    active_players: result.data.data.filter( player =>{
                        return player.batting_status === 'active'
                    })

                })
         }

    } catch (error) {
        
    }
}

selectPlayer = async (e)=>{
    const {selected_palyer, notBattedPlayers} = this.state

    this.setState({
        selected_palyer:notBattedPlayers.filter( player => e.target.value == player.line_id)
       })


    try {

        if(e.target.value != 0) {

            // let data = {
            //     match_id:1,  
            //     player_id: 2,          
            //     batting_status: 'active'
            //   }

        const result = await axios.put(`${process.env.REACT_APP_API_SERVER}/matchPlayer/${e.target.value}`, selected_palyer)

            console.log(result)
           
        }
      

    } catch (error) {
        
    }

}

removePlayerFromActiveList = (player_id)=>{
    const {active_players} = this.state
    //  console.log(player_id)

    // alert(player_id)
    this.setState({
        active_players : this.state.active_players.filter( player => {
            return player.id !== player_id
        })
    })
}

    render() {
        const {lions_players,notBattedPlayers, active_players} = this.state
        return (
            <AdminLayouts>
                <div  className="container">

                        <form method="get" action="">
                            <div className="row">

                            <div className="col">

                           
                               

                                { active_players.length > 0 &&

                                        active_players.map( player => {
                                            return(

                                                <div className="form-check" key={player.id}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">

                                                    {player.name}                                                 
                                                    <span> <CgRemoveR onClick={()=>this.removePlayerFromActiveList(player.line_id)}></CgRemoveR></span>
                                                </label>
                                                
                                            </div>  
                                            )
                                        })                                       
                                            
                                          
            
                               
                            }                            

                             </div>
                            
                            

                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="my-select">Players</label>
                                        <select id="my-select" className="form-control" name="" 
                                            onChange={this.selectPlayer}>

                                            <option value="0">Select</option>
                                        {
                                            notBattedPlayers.length > 0 && active_players.length < 2 &&
                                               
                                            
                                            notBattedPlayers.map( player => {
                                                
                                                return(

                                                    <option 
                                                        key={player.line_id} 
                                                        value={player.line_id}
                                                    
                                                    >{player.name}</option>
                                                )
                                            })

                                        }
                                        </select>
                                    </div>

                                </div>

                               

                            </div>
                            
                        </form>

                </div>
            </AdminLayouts>
        )
    }
}

import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc';
import Title from '../Shared/Title';

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            players: [
                {
                    id:1,
                    name: 'Atharith',
                    img: 'atharith.jpeg',
                    battingStyle: 'left hand',
                    status: 'All Rounder'
                },
                {
                    id:2,
                    name: 'Siraj',
                    img: 'Siraj.jpeg',
                    battingStyle: 'Right hand',
                    status: 'All Rounder , Wicket Keeper'
                },
                {
                    id:3,
                    name: 'Sinthu',
                    img: 'sinthu.jpeg',
                    battingStyle: 'Right hand',
                    status: 'All Rounder'
                },
                {
                    id:4,
                    name: 'Fasmir',
                    img: 'fasmir.jpeg',
                    battingStyle: 'left hand',
                    status: 'All Rounder'
                }
            ],
            activeProfile: [0 , 1]
         }
    }


loadMorePlayer = () =>{

    const {activeProfile} = this.state

    let newProfile = [];

        activeProfile.forEach(element => {
            // console.log(element)
            if(element > 2){

                this.setState({
                    activeProfile : [0,1]
                })
            }else{

                newProfile.push(element+1)
                this.setState({
                    activeProfile : newProfile
                })
            }
        });

        // do {
        //     activeProfile.forEach(element => {
        //         newProfile.push(element + 1);
        //     });
        // } while (activeProfile.length + 1);

        // for (let index = 0; index < activeProfile.length + 1; index++) {
        //     newProfile.push(activeProfile[index] + 1);
        // }

         

}

loadPrevePlayer = () =>{

    const {activeProfile} = this.state

    let newProfile = [];

        activeProfile.forEach(element => {
            // console.log(element)
            if(element < 1){

                this.setState({
                    activeProfile : [0,1]
                })
            }else{

                newProfile.push(element-1)
                this.setState({
                    activeProfile : newProfile
                })
            }
        });

        // do {
        //     activeProfile.forEach(element => {
        //         newProfile.push(element + 1);
        //     });
        // } while (activeProfile.length + 1);

        // for (let index = 0; index < activeProfile.length + 1; index++) {
        //     newProfile.push(activeProfile[index] + 1);
        // }

         

}

    render() { 
        const {players,activeProfile} = this.state;
        return (
            <div>
                <Title  title="Players" />

                {
                    players.length > 0 ?

                        
                        
                        
                        <div className="players">
                        <FcPrevious className="preveIcon" onClick={this.loadPrevePlayer}/>
                       
                        {
                            activeProfile.map( (player,key)=> {
                                return (
                                    <div key={key} className="player">

                                        <div className="player-img">
                                            <img src={`/images/players/${players[player].img}` }/>
                                        </div>

                                        <div className="player-title">
                                            <h5>{players[player].name}</h5>
                                            <span>{players[player].battingStyle}, {players[player].status}</span>
                                        </div>

                                        
                                    </div>
                            
                                )
                            })
                        }
                        <FcNext  className="nextIcon" onClick={ this.loadMorePlayer}/>
                        </div>
                    : 
                        <div className="alert alert-info" role="alert">
                        No Player Found...
                        </div>

                  
                }
              
                 
            </div>
          );
    }
}
 
export default Players;
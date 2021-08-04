
import axios from 'axios';
import React from 'react'
import { Button, Carousel, CarouselItem } from 'react-bootstrap';
import Title from '../Shared/Title';

class  Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            matches:[],
            activeMatch:{}
            
         }
    }

async componentDidMount(){

    try {
        
        const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/match`)
        console.log(result.data)
        if(result.status === 200) {
            this.setState({
                matches: result.data,
                activeMatch: result.data[0]
            })
        }

    } catch (error) {
        console.log(error)
    }

}

    render() { 

        const {matches, activeMatch} = this.state

        return ( 
            <div>
                <Title  title="Matches"/>

                
                { 
                    matches.length > 0 ?

                    <Carousel>
                    {
                    matches.map( (match,key)=>{
                        return(
                                   <CarouselItem style={{ height: '350px' , width: '100%'}}>
                                        <img 
                                        src={match.team2.thumbnail}  
                                        alt="image-1"
                                        className="w-100 h-100"
                                        />

                                        <Carousel.Caption style={{ backgroundColor: '#3d2269', borderRadios: '15px'}}>
                                                <h3>{match.team1.name} vs { match.team2.name}</h3>
                                                <p>{match.date}</p>
                                                <Button>
                                                    {match.status}
                                                </Button>
                                        </Carousel.Caption>

                                   </CarouselItem>

                                )
                            })
                        }
                        </Carousel>
                    

                    : 

                    <div className="alert alert-info" role="alert">
                      No Matches Found....
                    </div>
                }
            </div>
                )

        }
    }
        
 
export default Matches;
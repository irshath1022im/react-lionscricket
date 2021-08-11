
import axios from 'axios';
import React from 'react'
import { Button, Carousel, CarouselItem } from 'react-bootstrap';
import Title from '../Shared/Title';

class  We extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            news:[],
            activeMatch:{}
            
         }
    }

componentDidMount(){


    this.setState({
        news: [
                {
                    id:1,
                    thumbnail: 'news/1.jpg',
                    details:'Group Pictures 1'
                },

                {
                    id:2,
                    thumbnail: 'news/2.jpg',
                    details:'Group Pictures 2'
                },
                {
                    id:3,
                    thumbnail: 'logo/lionslogo.jpg',
                    details:'Team Logo'
                },
                {
                    id:4,
                    thumbnail: 'news/event-1.jpeg',
                    details:'Winning Event -1'
                },
                 {
                    id:5,
                    thumbnail: 'news/pitch repair-2.jpeg',
                    details:'Pitch Modification'
                },
                
                
                
            ]
     })
}
  


    render() { 

        const {news, activeMatch} = this.state

        return ( 
            <div>
                <Title  title="We are Lions CC"/>

                
                { 
                    news.length > 0 ?

                    <Carousel>
                    {
                    news.map( (item,key)=>{
                        return(
                                   <CarouselItem style={{ height: '350px' , maxWidth: '100%'}} key={key}>
                                  
                                        <Carousel.Caption style={{ backgroundColor: '#3d2269', borderRadius: '15px'}}>
                                        <Button className="text-uppercase">
                                        {item.details}
                                       </Button>

                                        </Carousel.Caption>

                                        <img src={`images/${item.thumbnail}`}
                                        className="" style={{ maxWidth: '100%', Height: '100%'}} alt={item.id} />

                                      
                                   </CarouselItem>

                                )
                            })
                        }
                        </Carousel>
                    

                    : 

                    <div className="alert alert-info" role="alert">
                      No News Found....
                    </div>
                }
            </div>
                )

        }
    }
        
 
export default We;
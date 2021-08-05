
import React from 'react';
import Achivements from '../../components/Achivement';
import Header from '../../components/Header';

class ScoreCardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
            <Header />
            <Achivements />
            </>
            
          );
    }
}
 
export default ScoreCardHome;

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

export default function ScoreCardShow(props) {
    const {params} = props.match

    const [scorecard, setScoreCard] = useState({})


    useEffect( async ()=>{
        try {
            
            const result = await axios.get(`${process.env.REACT_APP_API_SERVER}/matchSummary`)

            // console.log(result)
            setScoreCard(result.data.data)
        } catch (error) {
                console.log(error)
        }
    })


    if(params.id) {

        return(
            <div>
                {params.id}
            </div>
        )
    } else {
        <Spinner varient="info" animation="border" />
    }

    
}

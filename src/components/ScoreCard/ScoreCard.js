
import React from 'react'
import { ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ScoreCard(props) {
    const {date,  opponent_team, match_id, score_card_id,match_status} = props.card
    return (
        <div>
            <h6>{date}</h6>
            <p>Lions vs {opponent_team}</p>
            <p>Match Id: {match_id}</p>
            <p>Match Status : {match_status}</p>
            <div>
            <Link to={`/scorecard/${score_card_id}` }>
              <ToggleButton variant="info">Score Card</ToggleButton>
            </Link>
            </div>
            <hr />
        </div>
    )
}

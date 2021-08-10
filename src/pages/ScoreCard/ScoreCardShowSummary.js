

import React from 'react'

export default function ScoreCardShowSummary({scorecard}) {
    return (
        <div>
            <h4>Date: {scorecard.date}</h4>
            <h4>Match Id: { scorecard.match_id}</h4>
            <h4>Teams : Lions Vs {scorecard.opponent_team}</h4>
            <h4>Match Status : { scorecard.match_status}</h4>

            <div>
            Lions Win the Toss, elected bat first
            </div>
        </div>

    )
}

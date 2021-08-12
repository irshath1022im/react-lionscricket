

import React from 'react'
import Last10Ball from '../../../components/ScoreCard/Last10Ball'

export default function ScoreCardShowSummary({scorecard}) {
    return (
        <div>

            <div>
                <h4>Date: {scorecard.date}</h4>
                <h4>Score Card : { scorecard.score_card_id}</h4>
                <h4>Match Id: { scorecard.match_id}</h4>
                <h4>Teams : Lions Vs {scorecard.opponent_team}</h4>
                <h4>Match Status : { scorecard.match_status}</h4>
            </div>

           

                 
            {
                // scorecard.over.length return array of object...sometime can return empty object so, 
                // first check the lenght, if it is more then 0 , dispaly the over
            } 


        

              
            {
                scorecard.scores.length > 0 &&
                        <>
                
                            <div>
                            Lions Win the Toss, elected bat first
                            </div>

                            <div>
                            Scores : {scorecard.team_runs + scorecard.batting_runs} / {scorecard.wickets} ({scorecard.over.length > 0 && scorecard.over[0].over})
                            </div>

                            <div>
                            Extras: {scorecard.team_runs}
                            </div>
                            
                            <Last10Ball scores={scorecard.scores} />
                        
                        </>
                        
            }
              

        </div>

    )
}



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

                 
            {
                // scorecard.over.length return array of object...sometime can return empty object so, 
                // first check the lenght, if it is more then 0 , dispaly the over
            } 


            <div>
                <div>
                    Scores : {scorecard.team_runs + scorecard.batting_runs} / {scorecard.wickets} ({scorecard.over.length > 0 && scorecard.over[0].over})
                </div>

                <div>
                Extras: {scorecard.team_runs}
                </div>

                <div className="d-flex">
                    {
                        scorecard.scores.length > 0 &&

                        scorecard.scores.map( (score, key) =>{
                            return(
                                <div key={key} className="border border-info rounded p-2 m-1">

                                    {
                                        score.ball_status === 'ok' ? 
                                            <div>
                                            <div className="border-bottom border-primary">{score.over}</div>
                                                {
                                                    score.batting_status === 'out' &&
                                                    <span className="text-danger">{  'wk' }</span>
                                                }
                                                <br />
                                                <span>{score.batting_runs}</span>
                                            </div>
                                        :
                                        
                                        <div className="">

                                           { 
                                               score.ball_status === 'nb' &&
                                                
                                                    <div>
                                                    <div className="border-bottom border-primary">{score.over}</div>
                                                        {
                                                            score.batting_status === 'out' &&
                                                            <span className="text-danger">{  'wk' }</span>
                                                        }
                                                        <div>{score.ball_status}</div>
                                                        <div>{score.team_runs + score.batting_runs}</div>
                                                    </div>

                                            }                                        

                                            { 
                                                score.ball_status === 'wd' &&
                                                 
                                                     <div>
                                                        <div className="border-bottom border-primary">{score.over}</div>
                                                         {
                                                             score.batting_status === 'out' &&
                                                             <span className="text-danger">{  'wk' }</span>
                                                         }
                                                         <div>{score.ball_status}</div>
                                                         <div>{score.team_runs}</div>
                                                     </div>
 
                                             }      
                                    
                                         
                                            
                                        </div>
                                       

                                    }
                                   
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

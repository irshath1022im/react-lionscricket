
import React from 'react'

export default function Last10Ball({scores}) {
    return (
        <div className="d-flex">
            {
                                scores.map( (score, key) =>{
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
    )
}

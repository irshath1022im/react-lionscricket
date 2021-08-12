

import React, { Component } from 'react'

export default class BowlerLogs extends Component {
    render() {
        return (
            <div>
                        <h6>Bowling ...</h6>

                        <div className="table-responsive">
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Bowler</th>
                            <th scope="col">Runs</th>
                            <th scope="col">Over</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Atharith</td>
                            <td>25</td>
                            <td>15</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>


            </div>
        )
    }
}


import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MatchCard({match}) {
    return (
        <div className="card" style={{width: '18rem'}}>

         
            <Button
                type="button"
                size='sm'
                variant={match.status === 'scheduled' ? 'success' : 'info'}
            >
                {match.status}
            </Button>
            <div className="card-body">
                <h5 className="card-title">{match.date}</h5>
                    <Row>
                        <Col md={6} sm={4} xs={3}>
                            <img src={match.team1.thumbnail} className="img-fluid" />
                            <span>{match.team1.name}</span>
                        </Col>

                        <Col md={6} sm={4} xs={3}>
                            <img src={match.team2.thumbnail}  className="img-fluid"/>
                            <span>{match.team2.name}</span>
                        </Col>
                    </Row>
                <Link to={`/admin/matches/${match.id}/edit`}>
                    <button className="btn btn-secondary" type="button">Edit</button>
                </Link>

                <Link to={`/admin/matches/${match.id}/addPlayers`}>
                    <button className="btn btn-info" type="button">Add Players</button>
                </Link>
            </div>
    </div>
    )
}

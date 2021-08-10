import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function PlayerCard( {player}) {
    return (
         <Card className="player-card">
            <Card.Img 
                variant="top" 
                src={  player.url ? `images/players/${player.url}`: '/images/logo/lionslogo.jpg'}
                className="rounded-3"
            ></Card.Img>

            <Card.Title className="text-center player-title "><Button variant="info" size="sm" >{player.name}</Button></Card.Title>
            <Card.Text className="text-center"></Card.Text>
        </Card>
    )
}

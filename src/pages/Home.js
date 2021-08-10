import React from 'react'
import Achivements from '../components/Achivement'
import Header from '../components/Header'
import Matches from '../components/Matches'
import Players from '../components/Players'
import Location from '../components/Location'
import We from '../components/We'

export default function Home() {
    return (
        <div>
           <Header />
           <We />
           <Matches />
           <Achivements />
           <Players />
           <Location />
        </div>
    )
}

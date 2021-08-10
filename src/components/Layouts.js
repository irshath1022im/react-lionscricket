
import React from 'react'
import Header from './Header';

export default function Layouts({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

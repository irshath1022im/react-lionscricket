

import React from 'react'

export default function Header() {
    return (
        <div className="d-flex justify-content-between header">
            <div className="header-brand">
                <img src="/images/logo/lionslogo.jpg" />
            </div>

            <div className="header-info">
                <span className="header-info-text1">Lions Cricket Club</span>
                <span className="header-info-text2">Since 2009 in Qatar</span>
            </div>
        </div>
    )
}

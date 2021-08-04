
import React from 'react'
import Title from '../Shared/Title'

export default function Location() {
    return (
        <div>
            <Title title="Location" />

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active location">
                    <img src="/images/locations/location1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item location">
                    <img src="/images/locations/location2.png" className="d-block w-100" alt="..." />
                    </div>
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

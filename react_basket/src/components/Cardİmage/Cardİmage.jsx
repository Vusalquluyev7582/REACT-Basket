import React from 'react'
import "./Cardİmage.css"

function Cardİmage({ image }) {

    return (
        <div className="card-image">
            <img src={image} alt="" />
        </div>
    )

}

export default Cardİmage
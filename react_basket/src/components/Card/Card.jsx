import React from 'react'
import CardTitle from '../CardTitle/CardTitle'
import Cardİmage from '../Cardİmage/Cardİmage'
import Cardİnfo from '../Cardİnfo/Cardİnfo'
import "./Card.css"

function Card({ title, image, info, onClick }) {

    return (
        <div className="card" onClick={onClick}>
            <div className="card-body">
                <CardTitle title={title} />
                <Cardİmage image={image} />
                <Cardİnfo info={info} />
            </div>
        </div>
    )

}

export default Card
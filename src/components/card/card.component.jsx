import React from "react";
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="cake" src={`https://www.random-art.org/img/small/${props.cake.id}.jpg?size=180x180`}></img>
        <h1>
            {props.cake.name}
        </h1>
        <h2>
            Flavour: {props.cake.flavour}
        </h2>
    </div>
)
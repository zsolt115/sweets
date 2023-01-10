import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = (props) => (
    <div className='card-list'>
        { props.cakes.map(cake => (
            <Card key={cake.id} cake={cake} />
        )) }
    </div>
)

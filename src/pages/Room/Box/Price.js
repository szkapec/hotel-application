import React, { useState } from 'react'
import Payment from './Payment'

const Price = ({ room, night }) => {
    const [card, setCard] = useState(true)
    const [cash, setCash] = useState(true)

    const handleCard = (e) => {
        e.preventDefault()
        setCash(false)
        setCard(false);
    }
    return (
        <div className="container-price">
            {card && <Payment night={night} room={room} />}
            {cash ? <div  style={{width:'30%'}}  className="btn" onClick={(e) => handleCard(e)}>Zapłać gotówką</div> : !cash && <div>Płatność gotówkowa w recepcji</div>}
        </div>
    )
}

export default Price

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { oneRoom, reserveRoom } from '../../actions/room.actions';
import Reserved from './Box/Reserved';
import DescriptionRoom from './Box/DescriptionRoom';
import Slide from './Slide/Slide.js';
const Room = ({ room, match }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="container-room">
            <img className="main-photo" src={room.images[0].image} alt="room" />
            <div className="grid-room">
                <div><Reserved room={room} match={match} /></div>
                <DescriptionRoom room={room} />
            </div>
            <div className="room-image">
                {room.images.map(room => {
                    return <img key={room._id} src={room.image} alt="room image" />
                })}
            </div>
            <Slide title="POZOSTAŁE POKOJE"/>
        </section>
    )
}
const mapDispatchToProps = ({
    oneRoom,
    reserveRoom
})

export default connect(null, mapDispatchToProps)(Room);
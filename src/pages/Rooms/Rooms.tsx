import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import '../../sass/style/Rooms/rooms.css';
import OptionOfRooms from './OptionOfRooms';
import FilterRooms from './FilterRooms';

const Rooms = ({ room }) => {
    const [optionValueNumberOfPeople, setOptionValueNumberOfPeople] = useState('-')
    const [optionValueRoom, setOptionValueRoom] = useState('all')
    const [rooms, setRooms] = useState([]);
    const [price, setPrice] = useState(2000);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setRooms(room)
    }, [room])

    let priceValue = (e) => {
        setPrice(e.target.value)
    }

    let changeValueNumberPeople = (e) => {
        setOptionValueNumberOfPeople(e.target.value)
    }

    let typeRoom = (e) => {
        setOptionValueRoom(e.target.value)
    }
    return (
        <>
            <OptionOfRooms changeValueNumberPeople={changeValueNumberPeople}
             price={price} priceValue={priceValue} optionValueRoom={optionValueRoom} typeRoom={typeRoom} />

            <FilterRooms optionValueNumberOfPeople={optionValueNumberOfPeople} optionValueRoom={optionValueRoom}
             rooms={rooms} room={room} price={price} setRooms={setRooms}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    room: state.room.allRoom,
});

export default connect(mapStateToProps, {})(Rooms)

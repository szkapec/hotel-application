import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { oneRoom } from '../actions/room.actions';
import { showAllUserFromRoom } from '../actions/user.actions';
import RoomWrapper from './Room/RoomWrapper';
import '../sass/style/RoomPage/_roomPage.css';
const RoomPage = ({ oneRoom, room, match, showAllUserFromRoom }) => {


    useEffect(() => {
        oneRoom(match.params.room_id) //informacje o pokoju
        showAllUserFromRoom(match.params.room_id) //wszystkie rezerwacje dla danego pokoju
    }, [])

    return (
        <div>
            <RoomWrapper room={room} key={room} match={match} />
        </div>
    )
}
const mapStateToProps = state => ({
    room: state.room.oneRoom
})
export default connect(mapStateToProps, { oneRoom, showAllUserFromRoom })(RoomPage)


import React from 'react'
import Room from './Room';
import {RoomType, RoomMatchType} from './TypeRoom';

type RoomTypeWrapper = {
    room: RoomType,
    match: RoomMatchType
}

const RoomWrapper = ({room, match}: RoomTypeWrapper) => room && <Room room={room} match={match} key={room._id}/>

export default (RoomWrapper);
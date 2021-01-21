import React from 'react'
import Room from './Room';
 
const RoomWrapper = ({room, match}) => room && <Room room={room} match={match} key={room._id}/>

export default (RoomWrapper);
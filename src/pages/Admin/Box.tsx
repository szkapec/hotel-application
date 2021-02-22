import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { OneRoomUsers } from '../../actions/user.actions';
import {RoomType} from './Types';

type PropsType = {
    room: RoomType
    endOfBooking: Array<string>,
    OneRoomUsers: Function
}

const Box = ({ room, endOfBooking, OneRoomUsers }: PropsType) => {


    const valueColor = (id: any) => {
        let values = endOfBooking.filter(item => item === id)
        if (values.length !== 0) {
            return true;
        } else return false;
    }
    const ShowWhoBooked = (idRoom) => {
        OneRoomUsers(idRoom)
    }
    return (
        <StyledContainerBox>
            
            <div>Ze względu na fakt że jest to aplikacja testowa to nie robiłem autoryzacji dlatego zapraszam do testowania ;)</div>
            <h4>Pokoje do przeglądania dla personelu</h4>
            <div className="landing-container">
                {room && room.map(item => {
                    return <span key={item._id}>
                        <StyledButton onClick={() => ShowWhoBooked(item._id)} reserved={valueColor(item._id)} className="number" >{item.roomNumber}</StyledButton>
                    </span>
                })}
            </div>
            <div>
                <div>Agenda</div>
                <div> <span style={{ backgroundColor: 'red', width: '10px', height: '10px', display: 'inline-block' }}></span> to pokoje które są dzisiaj zajęte</div>
                <div><span style={{ backgroundColor: 'green', width: '10px', height: '10px', display: 'inline-block' }}></span> Pokoje wolne i posprzatane</div>
            </div>

        </StyledContainerBox>
    )
}

export default connect(null, { OneRoomUsers })(Box)


interface BaseButtonProps {
    reserved: any
  }

const StyledButton = styled.button<BaseButtonProps>`
        border: 1px solid black;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ reserved }) => !reserved ? "green" : "red"};
`
const StyledContainerBox = styled.div`
    margin: 10px 30px;

    h4 {
        padding: 10px 0;
    }
`
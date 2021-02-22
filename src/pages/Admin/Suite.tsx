import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ArchiveRooms from './ArchiveRooms';
import {UserType} from './Types';

type Users = {
    user: UserType
    today: string,
}

const Suite = ({ user, today}: Users) => {

    let [money, setMoney] = useState([])
    useEffect(() => {
        setMoney([])
            user.allUsers.map(item => {
            let value = item.startDate.length * item.capacity
            setMoney(prevState => [...prevState, value])
        })
    }, [])

    return (
        <StyledIndicator>
             <h3>Wskaźnik sprzedaży</h3>
             <div>
            <ArchiveRooms user={user} today={today}/>
                <p>Użytkownicy którzy u nas zarezerowali wizyte: <b>{user.allUsers.length}</b></p>
                <p>rezerwacje</p>
                <p>średnia wartość</p>
                <p>srednio na ile uzytkownik przyjeżdza</p>
                <p>Ile kupuje, w ile osob przyjezda</p>
            </div>
        </StyledIndicator>
    )
}

export default Suite;

const StyledIndicator = styled.div`
    width: 80%;
    margin: 20px auto;
    text-align: center;
    h3 {
        border: 1px solid #ececec;
        padding: 10px;
        margin: 0px;
    }
    div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;  
        @media(min-width: 800px){
            grid-template-columns: repeat(3, 1fr);
        }
    }
    p {
        border: 1px solid #ececec;
        margin: 0px;
    }
`
import React, { useState, useEffect } from 'react'
import { allUser } from '../../actions/user.actions';
import { connect } from 'react-redux';
import '../../sass/style/Admin/Admin.css';
import Box from './Box';
import AllUsers from './AllUsers';
import Suite from './Suite';
import {UserType, RoomType} from './Types';

type Users = {
    user: UserType,
    today: string,
    allUser: Function,
    room: RoomType
}

const Admin = ({ room, user, allUser }: Users) => {

    let [endOfBooking, setEndOfBooking] = useState<Array<string>>([]);
    let [today, setToDay] = useState<any>();

    useEffect(() => {
        setEndOfBooking([])
        allUser();
        let todays = formatDate(new Date())
        setToDay(todays)
        //user.allUsers.length !== 0 && 
        user.allUsers?.map(item => item.startDate.map(day => {
            day === today && setEndOfBooking(prevState => [...prevState, item.idRoom])
        }))
    }, [user.isloadingAllUsers])

    const formatDate = (date:any) => {
        var today = new Date(date),
            month = '' + (today.getMonth() + 1),
            day = '' + today.getDate(),
            year = today.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }

    return (
        <section className="admin-container">
            <Box room={room} endOfBooking={endOfBooking} />
            <AllUsers user={user} today={today} />
            <Suite user={user} today={today}/>
        </section>
    )
}
type StateTypeRedux = {
    room: any,
    user: UserType,
}
const mapStateToProps = (state: StateTypeRedux) => ({
    room: state.room.allRoom,
    user: state.user,
});

export default connect(mapStateToProps, { allUser })(Admin)




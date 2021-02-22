import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { RemoveReservedUser, ChangePaid, ChangeUnpaid } from '../../actions/user.actions';
import {UserType} from './Types';

type CartProps = {
  user: UserType,
  RemoveReservedUser: Function,
  ChangePaid: Function,
  ChangeUnpaid: Function,
  today: string
}

type CurrentType = Array<null> | Array<object> | [object]

type CurrentType2 = {
  _id: string;
  name: string;
  lastName: string;
  idRoom: string;
}

const AllUsers = ({ user, RemoveReservedUser, ChangePaid, ChangeUnpaid, today }: CartProps) => {

  let [current, setCurrent] = useState<any>([]);
  let [archives, setArchives] = useState([]);

  useEffect(() => {
    setCurrent([])
    setArchives([])
    user.oneRoomUsers.map(item => {
      let last = item.startDate.length;
      if (days(item.startDate[last-1])) {
        // setCurrent(prevState => [...prevState, item])
      } else {
        // setArchives(prevState => [...prevState, item])
      }
    })
  }, [user])

  const removeReservedUser = (id:string, idRoom: string) => {
    RemoveReservedUser(id, idRoom)

  }

  const paidUser = (id:string, idRoom:string) => ChangePaid(id, idRoom)
  const unpaidUser = (id:string, idRoom:string) => ChangeUnpaid(id, idRoom)

  const days = (day:string) => {
    if (Number(day.slice(5, 7)) > Number(today && today.slice(5, 7))) {
      return true;
    }
    if (Number(day.slice(5, 7)) < Number(today && today.slice(5, 7))) {
      return false;
    }
    if (Number(day.slice(5, 7)) === Number(today && today.slice(5, 7))) {
      if (Number(day.slice(8, 10)) < Number(today && today.slice(8, 10))) {
        return false;
      } else return true;
    }
  }


  console.log(current)

  return (
    <>
      <h3>Pokoje zarezerwowane</h3>
      <div className="box-user">{current.length !== 0 ? current.map((item:any) => <ul key={item._id}>
        <li className="remove">Usuń <button onClick={() => removeReservedUser(item._id, item.idRoom)}><i className="far fa-trash-alt"></i></button></li>
        <li><span>Imię:</span> {item.name}</li>
        <li><span>Nazwisko:</span> {item.lastName}</li>
        <li><span>Czy załacono:</span> {item.paid ? <span style={{ color: 'green' }}>Zapłacone</span> : <span style={{ color: 'red' }}>Niezapłacono</span>}
          <span style={{ display: "block" }}>
            <button onClick={() => paidUser(item._id, item.idRoom)}>Zapłacił</button>
            <button onClick={() => unpaidUser(item._id, item.idRoom)}>Nie zapłacił</button>
          </span>
        </li>
        <li><span>Cena:</span> {item.price * item.startDate.length}zł</li>
        <li><span>Telefon:</span> {item.phone}</li>
        {item.startDate.map((day:string) => <li key={day}><span>Dni: </span>{day}</li>)}
      </ul>) : <div style={{ margin: '20px', fontWeight: 700 }}>Nie ma jeszcze rezerwacji dla tego pokoju</div>}</div>


        {archives.length !== 0 && <h3 style={{padding:'30px'}}>Archiwalne dla danego pokoju </h3>}
        <div className="box-user">{archives.length !== 0 ? archives.map(item => <ul key={(item._id)}>
        <li className="remove">Usuń <button onClick={() => removeReservedUser(item._id, item.idRoom)}><i className="far fa-trash-alt"></i></button></li>
        <li><span>Imię:</span> {item.name}</li>
        <li><span>Nazwisko:</span> {item.lastName}</li>
        <li><span>Czy załacono:</span> {item.paid ? <span style={{ color: 'green' }}>Zapłacone</span> : <span style={{ color: 'red' }}>Niezapłacono</span>}
          <span style={{ display: "block" }}>
            <button onClick={() => paidUser(item._id, item.idRoom)}>Zapłacił</button>
            <button onClick={() => unpaidUser(item._id, item.idRoom)}>Nie zapłacił</button>
          </span>
        </li>
        <li><span>Cena:</span> {item.price * item.startDate.length}zł</li>
        <li><span>Telefon:</span> {item.phone}</li>
        {item.startDate.map(day => <li key={day}><span>Dni: </span>{day}</li>)}
      </ul>) : <div style={{ margin: '20px', fontWeight: 700 }}>Nie ma jeszcze archiwalnych rezerwacji</div>}</div>
    </>
  )
}

export default connect(null, { RemoveReservedUser, ChangePaid, ChangeUnpaid })(AllUsers)
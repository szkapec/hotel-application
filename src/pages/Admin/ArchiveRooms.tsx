import React, {useEffect, useState} from 'react'
import {UserType} from './Types';

type Users = {
  user: UserType,
  today: string,
}


const ArchiveRooms = ({user,today}:Users) => {

    let [archive, setArchive] = useState<Array<object>>([])
    let [current, setCurrent] = useState<Array<object>>([])
    let [money, setMoney] = useState<Array<number>>([])
    let [moneyArchive, setMoneyArchive] = useState<Array<number>>([])
    let [moneyFuture, setMoneyFuture] = useState<Array<number>>([])
    let [averageNumberOfDays, setAverangeNumberOfDays] = useState<Array<number>>([])
    
    let clear = () => {
        setCurrent([]);
        setArchive([]);
        setMoney([]);
        setMoneyArchive([]);
        setMoneyFuture([]);
        setAverangeNumberOfDays([]);
    }

    useEffect(() => {
        clear();
       
        user.allUsers.map(item => {
            let last = item.startDate.length;
            let value = item.startDate.length * item.price;
            
            setAverangeNumberOfDays(prevState => [...prevState, last])
            setMoney(prevState => [...prevState, value])
         
            if (days(item.startDate[last-1])) {
                setCurrent(prevState => [...prevState, item])
                setMoneyFuture(prevState => [...prevState, value])
              } else {
                setArchive(prevState => [...prevState, item])
                setMoneyArchive(prevState => [...prevState, item.price])
              }
        })
    }, [user])

    const days = (day) => {
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
    
    return (
        <>
            <p>Ilość rezerwacji archiwalnych: <b>{archive.length}</b></p>
            <p>Ilość przyszłych rezerwacji: <b>{moneyFuture.length}</b></p>
            <p>Koszt wszystkich rezerwacji: <b>{money.length!==0 && money.reduce((a,b) => a+b)}zł</b></p>
            <p>Koszt archiwalnych rezerwacji: <b> {moneyArchive.length!==0 && moneyArchive.reduce((a,b) => a+b)}zł</b></p>
            <p>Koszt przyszłych rezerwacji:  <b> {moneyFuture.length!==0 && moneyFuture.reduce((a,b) => a+b)}zł</b></p>
            <p>Średnia ilość dni na ktore przyjezdza klient:  <b> {averageNumberOfDays.length!==0 && (averageNumberOfDays.reduce((a,b) => a+b)/averageNumberOfDays.length )} dnia</b></p>
            <p>Średnio użytkownik zostawia: <b>{money.length!==0 && (money.reduce((a,b) => a+b)/money.length)}zł</b></p>
        </>
    )
}

export default ArchiveRooms;

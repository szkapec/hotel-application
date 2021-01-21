import React from 'react'
import {Link} from 'react-router-dom';

const FilterRoom = ({optionValueNumberOfPeople,optionValueRoom, rooms, room, price, setRooms }) => {


    let filterRooms = (numberOfPeople="-") => {

        let tempRooms = [...room]
        if(optionValueRoom==="all"){
            tempRooms = [...room]
        }
        switch(optionValueNumberOfPeople){
            case numberOfPeople: tempRooms = tempRooms.filter(item => item.capacity === Number(numberOfPeople))
        }
        if(optionValueNumberOfPeople==="-"){
            tempRooms = [...room]
        }
        if(optionValueRoom==="standard") {
            tempRooms = tempRooms.filter(item => item.type === optionValueRoom)
        }
        if(optionValueRoom==="single") {
            tempRooms = tempRooms.filter(item => item.type === optionValueRoom)
        }
        if(optionValueRoom==="double") {
            tempRooms = tempRooms.filter(item => item.type === optionValueRoom)
        }
        if(optionValueRoom==="family") {
            tempRooms = tempRooms.filter(item => item.type === optionValueRoom)
        }
        if(optionValueRoom==="apartment") {
            tempRooms = tempRooms.filter(item => item.type === optionValueRoom)
        }
            tempRooms = tempRooms.filter(room => room.price <= price)
        setRooms(tempRooms)
    }
    return (
        <>
            <div className="filter-rooms"><button onClick={()=> filterRooms(optionValueNumberOfPeople)}>Wyszukaj</button></div>
            <section className="rooms-container">
                {rooms && rooms.map(item => {
                    return <div key={item._id} className="container">
                        <Link to={`/room/${item._id}`}><img src={item.images[0].image} alt="room" /></Link>
                        <div className="box">
                            <span className="capacity">{item.capacity} osobowe</span>
                            <Link to={`/room/${item._id}`}>
                                {item.reserved ? <button style={{ textDecoration: 'line-through' }} className="button-reserved">Zarezerwowany</button>
                                    : <button className="button-reserved">Zobacz oferte</button>}</Link>
                            <span className="price">{item.price} zł zł pokój/noc</span>
                        </div>
                    </div>
                })}
                { rooms && rooms.length===0 && <div className="cond">Niestety nasz algorytm nie może znaleźć takiego pokoju</div>}
            </section>
        </>
    )
}

export default FilterRoom

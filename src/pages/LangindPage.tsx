import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../sass/style/LangindPage/_landingPage.css';
import Slide from './Room/Slide/Slide';
import DescriptionRooms from './DescriptionRooms';

const LangindPage = ({ room }) => {

    return (
        <>
            <section className="image">
                <div className="hotel">Pokoje i apartamenty</div>
                <div className="hotel-desc">Kameralna atmosfera w centrum Warszawy</div>
            </section>
            <section className="btn">
                <button><Link to="/rooms">Sprawdz wolne pokoje</Link></button>
            </section>
            <section className="advantage">
                <div>
                    <ul>
                        <li><i className="fas fa-globe-americas"></i> E-Rezerwacja</li>
                        <li><i className="fas fa-utensils"></i> E-Restauracja</li>
                        <li><i className="fas fa-wifi"></i> Bezpłatne Wi-Fi</li>
                        <li><i className="fas fa-spa"></i> Usługi spa</li>
                        <li><i className="fas fa-heartbeat"></i>Centrum fitness</li>
                    </ul>
                </div>
            </section>
            <DescriptionRooms/>
            <Slide title="Nasze pokoje & apartamenty"/>
            <section className="room-container">
                {room && room.map((item, index) => {
                    return index>3&&index<8 && <div key={item._id} className="container">
                        <Link to={`/room/${item._id}`}><img src={item.images[0].image} alt="room" /></Link>
                        <div className="box">
                            <span className="capacity">{item.capacity} osobowe</span>
                            <Link to={`/room/${item._id}`}>
                                {item.reserved ? <button style={{ textDecoration: 'line-through' }} className="button-reserved">Zarezerwowany</button>
                                    : <button className="button-reserved">Zobacz oferte</button>}</Link>
                            <span className="price">{item.price}zł pokój/noc</span>
                        </div>
                    </div>
                })}
            </section>
            
        </>
    )
}

const mapStateToProps = (state) => ({
    room: state.room.allRoom,
});

export default connect(mapStateToProps, { })(LangindPage)

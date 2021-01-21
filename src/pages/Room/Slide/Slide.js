import React, { useState, useRef } from 'react'
// import Swiper from 'react-id-swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { connect } from 'react-redux'
import '../../../sass/style/Slide/slide.css';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
const Slide = ({ room, title }) => {
    const params = {
        slidesPerGroup: 1,
        slidesPerView: 1,
        
        pagination: {
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            800: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },
            1200: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
            1500: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            },
        },
        
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        spaceBetween: 10
    }
 
    return (
        <div className="swiper">
            <h3>{title}</h3>
            <div className="swiper_container">
                <Swiper  {...params}>
                    {room&&room.map(item => {
                        return <div key={item._id} className="description-room">
                            <Link target="_blank" to={`/room/${item._id}`}><img className="image_room" src={item.images[0].image} alt="room image"/></Link>
                        <div className="title">{item.title}</div>
                        <div className="box_info">
                            <span><i className="fas fa-money-check-alt"></i>Cena {item.price}</span>
                            <span><i className="fas fa-user-friends"></i>Maks. Osób {item.capacity}</span>
                        </div>
                    </div>
                    })}
               
                </Swiper>
            </div>
            <div className="btn">
                <button><Link to="/rooms">Zobacz wszystkie pokoje</Link></button>
            </div>
        </div>

    );
};

const mapStateToProps = (state) => ({
    room: state.room.allRoom,
});

export default connect(mapStateToProps, {})(Slide)

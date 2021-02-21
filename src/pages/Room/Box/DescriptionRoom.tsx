import React from 'react'

const DescriptionRoom = ({room}) => {

 
    let {additionally, capacity, extras, images, info, price, roomNumber} = room;

    const roomNumberInfo = () => {
        console.log(roomNumber)
        if (roomNumber > 0 && roomNumber <= 5) return "parterze"
        else if (roomNumber > 5 && roomNumber <= 10) return "1 piętrze"
        else if (roomNumber > 10 && roomNumber <= 15) return "2 piętrze"
        else if (roomNumber > 15 && roomNumber <= 20) return "3 piętrze"
        else if (roomNumber > 20 && roomNumber <= 25) return "4 piętrze"
    }

    return (
          <div className="description-room">
                    <h2>{info}</h2>
                    <hr />
                    <span className="info">Podstawowe informacje</span>
                    <ul className="info-priv">
                        <li><i className="fas fa-user"></i>Maks. osób {capacity}</li>
                        <li><i className="fas fa-money-check-alt"></i>Cena: {price}</li>
                        <li><i className="fas fa-utensils"></i>Restauracja</li>
                        <li><i className="fas fa-sink"></i>Prywatna łazienka</li>
                        <li><i className="fas fa-wifi"></i>Bezpłatny parking & WiFi</li>
                        <li><i className="fas fa-concierge-bell"></i>całodobowa recepcja & bar</li>
                    </ul>
                    <div className="capacity">Pokój przeznaczony dla {capacity} {capacity === 1 ? "osoby" : "osób"}, przystosowany dla potrzeb osób niepełnosprawnych, położony na {roomNumberInfo()}</div>

                    <div className="amenities">
                        <ul className="extras">
                            <span className="info">Główne udogodnienia</span>
                            {extras.split(',').map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                        <ul className="additionally">
                            <span className="info">Dla rodzin</span>
                            {additionally.split(',').map(item => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </div>
                    
                </div>
                
    )
}

export default DescriptionRoom

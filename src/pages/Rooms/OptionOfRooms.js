import React from 'react'

const OptionOfRoom = ({ changeValueNumberPeople, price, priceValue, optionValueRoom, typeRoom }) => {

    return (
        <div className="option-rooms" style={{backgroundColor:'#322e2b'}}>
            <h3>Wyszukiwarka pokoi</h3>
            <section className="filter-container">

                <div className="people">
                    <span>Ilość osób:</span>
                    <select onChange={(e) => changeValueNumberPeople(e)}>
                        <option>-</option><option>1</option>
                        <option>2</option><option>3</option>
                        <option>4</option><option>5</option>
                        <option>6</option><option>7</option>
                        <option>8</option>
                    </select>
                </div>
                <div className="price">
                    <div>Cena pokoju {price} zł</div>
                    <span>0zł</span>
                    <input id="price" type="range" name="price" min="0" max="2000" value={price} onChange={e => priceValue(e)}></input>
                    <span><b>2000zł</b></span>
                </div>
                <div className="type">
                    <span>Typ pokoju: </span>
                    <select onChange={(e) => typeRoom(e)} >
                        <option value="all">Wszystkie</option>
                        <option value="single">Pojedyńcze</option>
                        <option value="double">Podwójne</option>
                        <option value="standard">Typ Standard</option>
                        <option value="family">Typ Family</option>
                        <option value="apartment">Apartament</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default OptionOfRoom

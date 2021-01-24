import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { oneRoom, reserveRoom, sendEmail } from '../../../actions/room.actions';
import { addUser, showUser } from '../../../actions/user.actions';
import Price from './Price';
import Code from './Code';
import "react-datepicker/dist/react-datepicker.css";
import 'react-day-picker/lib/style.css';
import { DatePicker, theme } from 'react-trip-date';
import { ThemeProvider } from 'styled-components';
import '../../../sass/style/RoomPage/_roomPage.css';
import styled from 'styled-components';


const Reserved = ({ reserveRoom, oneRoom, sendEmail, match, room, addUser, user, showUser }) => {
    const [startDate, setStartDate] = useState([]);
    let [active, setActive] = useState(false)
    let [codeInfo, setCodeInfo] = useState(true)
    let [submitInput, setSubmitInput] = useState(false)
    let [value, setValue] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        data: new Date(),
        night: 1,
    })

    let { reserved, code } = room;
    const handleChange = days => {
        setStartDate(days)
        return true;
    };


    const activeForm = (e) => {
        e.preventDefault();
        setActive(!active);
    }
    const [errorName, setErrorName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)
    const [errorDate, setErrorDate] = useState(false)

    const validation = () => {
        setErrorName(false);
        setErrorLastName(false);
        setErrorEmail(false);
        setErrorPhone(false);
        setErrorDate(false)
        if (startDate.length === 0) setErrorDate(true);
        if (value.name.length <= 3) setErrorName(true);
        if (value.lastName.length <= 3) setErrorLastName(true);
        if (value.email.length <= 4) setErrorEmail(true);
        if (value.phone.length <= 8) setErrorPhone(true);
        if (value.name.length < 3 || value.lastName.length < 3 || value.email.length < 4 || value.phone.length < 8 || startDate.length === 0) return false;
        if (value.name.length > 3 && value.lastName.length > 3 && value.email.length > 4 && value.phone.length > 8 && startDate.length !== 0) return true;
    }
    const submitRoomReserved = (e) => {
        e.preventDefault();
        let code = Math.floor(Math.random() * 10000);
        let valid = validation()
        try {
            if (valid) {
                addUser(value.name, value.lastName, value.email, value.phone, value.data, match.params.room_id, room.price, room.capacity, value.night, startDate, code)
                sendEmail(value.email, code, startDate)
                oneRoom(match.params.room_id)
                setSubmitInput(true)
                showUser(value.email)
            }
        } catch (error) {
            setSubmitInput(false)
        }
    }

    const onChangeInput = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const generateCode = (e) => {
        e.preventDefault();
        setCodeInfo(false)
        oneRoom(match.params.room_id)
        showUser(value.email)
    }

    const disabledDays = [
        user.allUserFromRoom && user.allUserFromRoom.map(item => item.startDate.map(item => item)),
        '2019-12-02',
        '2019-11-12',
        '2019-10-22',
        '2019-11-04',
        '2020-01-04',
        '2020-02-14',
        '2020-03-24',
        '2021-01-24',
    ];

    return (
        <>
            <div className="reserved">
                {reserved || submitInput ? <button className="btn">Pokój zarezerwowany</button> : <button className="btn" onClick={(e) => activeForm(e)} >
                    {active ? "Zrezygnuj" : "Rezerwuj online"}
                </button>}
                {active && (
                    <form onSubmit={(e) => submitRoomReserved(e)}>
                        <div className="container-form">
                            <label htmlFor="name">Imię:</label>
                            <InputError placeholder="imię" item={errorName} type="text" id="name" name="name" onChange={(e) => onChangeInput(e)} />
                        </div>
                        {errorName && <StyledError>Popraw imię</StyledError>}
                        <div className="container-form">
                            <label htmlFor="lastName">Nazwisko:</label>
                            <InputError placeholder="nazwisko" item={errorLastName} type="text" id="lastName" name="lastName" onChange={(e) => onChangeInput(e)} />
                        </div>
                        {errorLastName && <StyledError>Wprowadz nazwisko</StyledError>}
                        <div className="container-form">
                            <label htmlFor="email">Email</label>
                            <InputError placeholder="email" item={errorEmail} type="email" id="email" name="email" onChange={(e) => onChangeInput(e)} />
                        </div>
                        {errorEmail && <StyledError>Wprowadz email</StyledError>}
                        <div className="container-form">
                            <label htmlFor="phone">Numer telefonu:</label>
                            <InputError placeholder="661 366 211" item={errorPhone} type="number" id="phone" name="phone" onChange={(e) => onChangeInput(e)} />
                        </div>
                        {errorPhone && <StyledError>Podaj telefon</StyledError>}
                        {errorDate && <StyledError style={{ margin: '20px 0' }} >Wybierz date</StyledError>}
                        <div style={{ marginTop: '30px' }}>

                            <ThemeProvider theme={theme}>
                                <DatePicker
                                    handleChange={handleChange}
                                    jalali={false}
                                    disabledDays={disabledDays.flat(2)}
                                    disabledBeforToday={true}
                                    disabled={false} // disable calendar 
                                />
                            </ThemeProvider>
                        </div>
                        {submitInput && <>
                            <Code setCodeInfo={setCodeInfo} codeInfo={codeInfo} generateCode={generateCode} code={user.idRoom.length >= 1 ? user.idRoom[0].code : 0} match={match} />
                            <Price night={startDate.length} room={room} />
                        </>}
                        {!submitInput && <button className="btn" type="submit">Wyślij</button>}
                    </form>
                )}
            </div>
            <div className="reserved-info">
                <span className="reserved-info__important">Ważne informacje</span>
                <ul>
                    <li><span><i className="fas fa-clock"></i>Przyjazd od:</span> <span>15:00</span></li>
                    <li><span><i className="far fa-clock"></i>Wyjazd do:</span> <span>11:00</span></li>
                </ul>
                <span className="politics">Polityka względem dzieci</span>
                <span className="politics-text">Dzieci w wieku od 0 do lat 8 nocują bezpłatnie na łóżku z rodzicami </span>
                <span className="politics">Polityka względem zwierząt</span>
                <span className="politics-text">Przyjmujemy zwięrzęta na określonych zasadach</span>
            </div>
        </>
    )
}

const mapDispatchToProps = ({
    oneRoom,
    reserveRoom,
    sendEmail,
    addUser,
    showUser
})
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, mapDispatchToProps)(Reserved);



const StyledError = styled.div`
    color: #ff1b1b;
    display: block;
    text-align: right;
`

const InputError = styled.input`
    border: ${({ item }) => item && '2px solid #ff1b1b'}
`
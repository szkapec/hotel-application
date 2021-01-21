import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export default function Canceled() {
    return (
        <StyledSection>
            <h2><b>Błąd podczas wprowadzania danych</b></h2>
            <div>Wróć do strony głównej</div>
            <button color="red"><NavLink to="/"> Wróć </NavLink></button>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    margin-top: 40px;
    text-align:center;
    padding: 30px 0;
    min-height: 100vh;
    font-size: 18px;
    background-color: #322e2b;
    color: white;
    div {
        padding: 10px 0;
    }
    button {
        background-color: #f9e8c7;
        border: 1px solid white;
        padding: 10px 20px;
        font-size: 20px;
        margin-top: 20px;
        color: black;
        cursor: pointer;
        a {
            text-decoration: none;
            color: black;
        }
    }
`



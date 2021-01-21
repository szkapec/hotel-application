import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export default function Success() {
    localStorage.removeItem("items");


    return (
        <StyledSecrion>
            <h2><b>Dziękujemy za zakupy w naszym sklepie</b></h2>
            <div>Administrator niedługo skontaktuje się z Tobą na mail</div>
            <button color="green"> <a href="/">Idź do strony głównej</a></button>
        </StyledSecrion>
    )
}

const StyledSecrion = styled.section`
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



import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Container>
            <nav>
                <NavLink exact to="/" activeStyle={{fontWeight: "bold", textDecoration:'underline'}}>Hotel</NavLink>
                <NavLink exact to="/rooms" activeStyle={{fontWeight: "bold", textDecoration:'underline'}}>Pokoje</NavLink>
                {/* <NavLink exact to="/" activeStyle={{fontWeight: "bold", textDecoration:'underline'}}>Przypomnij kod</NavLink> */}
                <NavLink exact to="/bar" activeStyle={{fontWeight: "bold", textDecoration:'underline'}}>Bar</NavLink>
                <NavLink exact to="/restaurant" activeStyle={{fontWeight: "bold", textDecoration:'underline'}}>Restauracja</NavLink>
                <NavLink exact to="/admin" activeStyle={{fontWeight: "bold", textDecoration:'underline'}}>dla Admina</NavLink>
            </nav>
        </Container>
    )
}

export default Navbar;

const Container = styled.header`
 
    position: fixed;
    top: 0;
    z-index: 99999;
    background-color: white;
    width: 100%;
    height: 40px;
    box-shadow: rgb(30, 31, 35) 0px -3px 11px 0px;
    
    nav {
        display: flex;
        max-width: 1200px;
        justify-content: space-around;
        align-items: center;
        margin: 10px auto 0;
        
    }
    a {
        text-decoration:none;
        color: black;
        &:hover {
            text-decoration: underline
        }
    }
`

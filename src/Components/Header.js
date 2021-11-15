import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div 
`   display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5% 1%;
    background-color: green;
`

const StyledMainLogo = styled.p 
`   font-weight: bold;
    font-size: 1.5rem;
    line-height: 0;
    color: white;
`

const StyledNavbar = styled.div 
`   display: flex;
justify-content: flex-end;
width: 100%;
`

const Header = () => {
    return (
        <Router>
        <StyledHeader>   
            <StyledMainLogo id="mainLogo">PotluckPlanner</StyledMainLogo>
            <StyledNavbar id="navbar">
                <Link to="/" class="headernav">HOME</Link>
                <Link to="/login" class="headernav">LOGIN</Link>
                <Link to="/signup" class="headernav">SIGN UP</Link>
                <Link to="/events" class="headernav">EVENTS</Link>
            </StyledNavbar>
        </StyledHeader>
        </Router>
    )
}

export default Header;

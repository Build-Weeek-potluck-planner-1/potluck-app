import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    background-color: green;
    margin: 0px;
    height: 10vh;

`

const StyledLink = styled.li`
    margin: 0 2%;
`


const Footer = () => {
    return (
        <Router>
            <footer>
                <StyledList>
                    <StyledLink>
                        <Link to="/">Home</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/user-login">User Login</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/signup-page">Signup Page</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/events">Events</Link>
                    </StyledLink>
                </StyledList>
            </footer>
                <Routes>
                    <Route path ="/user-login">
                        {/* User Login */}
                    </Route>
                    <Route path ="/signup-page">
                        {/* Signup-Page */}
                    </Route>
                    <Route path ="/events">
                        {/* Events */}
                    </Route>
                    <Route exact path ="/">
                        {/* Home */}
                    </Route>
                </Routes>
        </Router>
       
    )
}

export default Footer
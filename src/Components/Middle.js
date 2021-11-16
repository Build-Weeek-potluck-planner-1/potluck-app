import React from "react";
import styled from "styled-components";


const Middle = () => {
  
  const StyledBody = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;

  .left {
    display:flex;
    flex-direction: column;
    width: 45%; 
    justify-content: center;
    align-items: center;
  }
  .left h3 {
    text-decoration: none;
    font-size: 15px;
  }
  .right {
    width: 50%;
  }
  .right img {
    width: 40vw;
  }
  .button-homepage {
    margin-top: 7%;
    width: 20%;
    padding: 1%;
    border-radius: 10px;
  }
  .button-homepage:hover {
    opacity: 80%;
    border:2px black solid;
    color: green;
  }
  `

  
  return (
    <div className='whole-body'>
      <StyledBody>
      <div className='left'>
        <h1>Big Pot of Luck</h1>
        <h3>This years annual potluck This years annual potluck This years annual potluck This years annual potluck This years annual potluck</h3>
        <h3>Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut Lorem wont shortcut</h3>
        <button className='button-homepage'>Get Started!</button>
      </div>
      <div className='right'>

        <img src='https://images.unsplash.com/photo-1556910146-6121b9613959?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvdCUyMGx1Y2slMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' alt='Pot Lucky' />
      </div>
      </StyledBody>
    </div>
  );
};

export default Middle;

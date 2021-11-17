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
    width: 50%; 
    justify-content: center;
    align-items: center;
    margin-left:2%;
  }
  .left h1 {
    font-size: 48px;
  }
  .left h3 {
    text-decoration: none;
    font-size: 28px;
  }
  .right {
    width: 50%;
  }
  .right img {
    width: 90%;
  }
  .button-homepage {
    margin-top: 50%;
    font-size: 26px;
    width: 135%;
    height: 60%;
    padding: 5%;
    border-radius: 6px;
    background-color: green;
    color:white;
  }
  .button-homepage:hover {
    /* opacity: 80%; */
    border:2px black solid;
    background-color:white;
    color:green;
  }
  `

  
  return (
    <div className='whole-body'>
      <StyledBody>
      <div className='left'>
        <h1>Big Pot of Luck</h1>
        <h3>By using our potluck planner, we guarantee simplistic accessability for our hosts to be able to create various events for friends and family to attend. Guests are able to attend events and import different items that they would be arriving with. </h3>
        <h3>This allows individuals to have a log of attendees and contents that will be brought to a specific event. Do not hesitate to click the sign up button below to get started on your first event!</h3>
        
        <form action='/signup'>
          <button className='button-homepage'>SIGN UP</button>
        </form>

      </div>
      <div className='right'>

        <img src='https://images.unsplash.com/photo-1556910146-6121b9613959?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvdCUyMGx1Y2slMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' alt='Pot Lucky' />
      </div>
      </StyledBody>
    </div>
  );
};

export default Middle;

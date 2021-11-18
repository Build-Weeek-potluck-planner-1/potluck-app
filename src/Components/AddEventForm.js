import { React, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { v4 as uuidv4 } from 'uuid';
import image from '../Images/addEventFormImg.jpeg';

const initialEventData = { // formerly "initialFormValues"
    "event_name": "",
    "event_date": "",
    "event_time": "",
    "event_location": ""
};

const AddEventForm = (props) => {
    const { eventsList, setEventsList } = props; 
    const [eventData, setEventData] = useState(initialEventData); 
    const history = useHistory();

    const addEvent = () => { 
        axiosWithAuth()
            .post('/events', eventData)
            .then(res => { 
                const newEvent = res.data;
                setEventsList([...eventsList, newEvent]);
                history.push('/events');
            })
            .catch(err => console.error(err.response))
    };

    const onSubmit = event => { // now does job of onSubmit and formSubmit
        event.preventDefault();

        addEvent(eventData);
    };

    const onChange = e => {
        setEventData({
            ...eventData,
            [e.target.name]: e.target.value
        });
        console.log(eventData)
    };

    // Food List
    const [foodList, setFoodList] = useState([]);
    const [foodName, setFoodName] = useState('');

    const handleChangeFood = (event) => {
        //track input field's state
        setFoodName(event.target.value);
    }

    const handleAddFood = () => {
        //add item
        const newFoodList = foodList.concat({ foodName, id: uuidv4() });

        setFoodList(newFoodList);

        setFoodName('');
    }

    // Guest List
    const [guestList, setGuestList] = useState([]);
    const [guestName, setGuestName] = useState('');

    const handleChangeGuest = (event) => {
        //track input field's state
        setGuestName(event.target.value);
    }

    const handleAddGuest = () => {
        //add item
        // const newGuestList = guestList.concat([{ guestName, id: uuidv4() }]);
        setGuestList([
            ...guestList,
            {
                guestName: guestName,
                id: uuidv4()
            }
        ]);

        setGuestName('');
    }

    return (
        <div>
            <StyledHeader className="headerBanner">
                <h2>Create Event</h2>
            </StyledHeader>
            <h3 id="createTagline">Create an event by filling in each of the fields below!</h3>
            <form onSubmit={onSubmit} id="eventForm">
                <div id="formContent">
                    <StyledDTL className="DTL">
                        <h4>Event Details</h4>
                        <label>Event Name&nbsp;
                            <input
                                type="text"
                                id="eventName"
                                name="event_name"
                                value={eventData.event_name}
                                required
                                onChange={onChange}
                                placeholder="Event Name"
                            />
                        </label>
                        <label>Date&nbsp;
                            <input
                                type="text"
                                id="date"
                                name="event_date"
                                value={eventData.event_date}
                                required
                                onChange={onChange}
                            />
                        </label>
                        <label>Time&nbsp;
                            <input
                                type="text"
                                id="time"
                                name="event_time"
                                value={eventData.event_time}
                                onChange={onChange}
                            />
                        </label>
                        <label>Location&nbsp;
                            <input
                                type="text"
                                id="location"
                                name="event_location"
                                value={eventData.event_location}
                                onChange={onChange}
                                placeholder="Location"
                            />
                        </label>
                    </StyledDTL>
                    <div id="listContainer">
                        <StyledDiv id="itemList">
                            <div>
                                <h4>Item List</h4>
                                <p>Enter an item that you would like a guest to bring, then click the button to add it to the list.</p>
                                <input type="text" value={foodName} onChange={handleChangeFood} placeholder="Item" />
                                <button type="button" onClick={handleAddFood}>
                                    Add item
                                </button>
                            </div>
                            <div>
                                {foodList.map((item) => (
                                    <li key={item.id}>{item.foodName}</li>
                                ))}
                            </div>
                        </StyledDiv>

                        <StyledDiv id="guestList">
                            <div>
                                <h4>Guest List</h4>
                                <p>Enter a guest's PotluckPlanner username, then click the button to add them to the guest list.</p>
                                <p id="note"><i>NOTE: </i>You must enter their username correctly, otherwise they will not receive their invitation.</p>
                                <input type="text" value={guestName} onChange={handleChangeGuest} placeholder="Username" />

                                <button type="button" onClick={handleAddGuest}>
                                    Add guest
                                </button>
                            </div>
                            <div>
                                {guestList.map((item) => (
                                    <li key={item.id}>{item.guestName}</li>
                                ))}
                            </div>
                        </StyledDiv>
                    </div>
                </div>

                <input type="submit" value="CREATE EVENT" id="eventSubmit" />

            </form>
        </div>
    )
};

export default AddEventForm;

const StyledHeader = styled.div`
	background-image: url(${image});
	background-size: cover;
	background-position: center;
`;

const StyledDTL = styled.div`
	display: flex;
    flex-direction: column;
    margin: 3%;
`;

const StyledFood = styled.ul`
    list-style-type: none;
    border: solid black 1px;
    width: 50%;
    height: 20vh;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
height: 100%;
align-items: center;
`;

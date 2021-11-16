import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import axios from "axios";
import formSchema from './validation/formSchema';
import * as yup from 'yup';
import LoginForm from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import SignUpForm from './Components/SignUp';
import EventsDashboard from './Components/EventsDashboard';
import CreateEvent from './Components/CreateEvent';


// SignUpForm Value Setup
const initialFormValues = {
  name: '',
  email: '',
  password: ''
}
const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  // Const values for SignUpForm vv
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState(initialUsers);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([ ...users, res.data]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email,
      password: formValues.password
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid));
  }, [formValues])
  // ^^ Values and functions for SignUpForm



  return (
    <div className="App">
      <div className='content'> {/* this div pushes the footer down*/}
        <Header />

        <Switch>
          <Route path='/create-event' component={CreateEvent}></Route>
          
          <Route path='/events' component={EventsDashboard}></Route>
          
          <Route path='/signup'>
            <SignUpForm 
              formValues={formValues}
              inputChange={inputChange}
              formSubmit={formSubmit}
              disabled={disabled}
              formErrors={formErrors}
            />
          </Route>
          
          <Route path='/login'>
            <LoginForm 
              formValues={formValues}
              inputChange={inputChange}
              formSubmit={formSubmit}
              disabled={disabled}
              formErrors={formErrors}
            />
          </Route>
          <Route exact path='/'>
            <Middle />
          </Route>
        </Switch>
      </div>     
      <Footer />
    </div>
  );
}

export default App;

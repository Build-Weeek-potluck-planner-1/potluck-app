import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Events from './Components/Events';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/events' component={Events}></Route>
        
        <Route path='/signup' component={Signup}></Route>
        
        <Route path='/login' component={Login}></Route>

        <Route exact path='/'>
          <Middle />
        </Route>
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;

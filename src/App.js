import React, { useEffect, useState } from 'react'
import LangindPage from './pages/LangindPage';
import store from './store'
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AllRoom } from './actions/room.actions';
import { allUser } from './actions/user.actions';
import RoomWrapper from './pages/Room/RoomWrapper';
import RoomPage from './pages/RoomPage';
import './sass/style.css';
import Navbar from './components/Navbar/Navbar';
import Canceled from './pages/Room/Promis/Canceled';
import Success from './pages/Room/Promis/Success';
import Admin from './pages/Admin/Admin';
import Bar from './pages/Bar/Bar';
import Rooms from './pages/Rooms/Rooms';
import Footer from './pages/Footer/Footer';
import Restaurant from './pages/Restaurant/Restaurant'
const App = () => {

  useEffect(() => {
    store.dispatch(AllRoom())
    store.dispatch(allUser())
  }, []);


  return (
    <div>
      <Router>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LangindPage}></Route>
            <Route exact path="/room/:room_id" component={RoomPage}></Route>
            <Route exact path="/canceled" component={Canceled} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/bar" component={Bar}/>
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/restaurant" component={Restaurant}/>
          </Switch>
          <Footer/>
        </Provider>
      </Router>

    </div>
  )
}

export default App

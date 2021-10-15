import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Style from './App.module.css'
import Home from './pages/Home/Home';
import Header from '../Components/Header/Header'
import Detailed from './pages/Detailed/Detailed'
import Footer from '../Components/Footer/Footer'

function App() {

  // ROUTES HERE


  return (
    <div className={Style.PrimaryDiv}>
        <Route path='/'>
            <Header/>
        </Route>
          <Switch>
              <Route path='/'>
                  <Home/>
              </Route>
              <Route path='/newdoggy'>
                  <Detailed/>
              </Route>
          </Switch>
      <Footer/>
    </div>
  )
}

export default App


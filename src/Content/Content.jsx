import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Store} from '../Pages/Store'
import {Cart} from '../Pages/Cart'
import { Header } from '../components/Header'
//import { Login } from '../Pages/Login'


function Content() {
  return (
    <>
      <Header/>
      <Switch>
      { /* <Route exact path='/login' component={Login}/> */}
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/' component={Store}/>
        
        
        
      </Switch>
    </>
  )
}

export default Content

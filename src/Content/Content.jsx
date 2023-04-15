import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Store} from '../Pages/Store'
import {Cart} from '../Pages/Cart'

function Content() {
  return (
    <Switch>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/' component={Store}/>
    </Switch>
  )
}

export default Content

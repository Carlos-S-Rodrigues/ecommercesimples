import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Store} from '../Pages/Store'

function Content() {
  return (
    <Switch>
      <Route exact path='/' component={Store}/>
    </Switch>
  )
}

export default Content

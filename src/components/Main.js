import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, About, Contact } from './index'

const Main = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
    </Switch>
  )
}

export { Main }

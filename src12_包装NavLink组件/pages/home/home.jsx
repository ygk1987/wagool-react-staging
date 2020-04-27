import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Message from '../home_messages/home_messages'
import News from '../home_news/home_news'
import MyNavLink from '../../components/MyNavLink/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
              {/* <NavLink activeClassName="demo" className="list-group-item" to="/home/news">News</NavLink> */}
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink> 
              {/* <NavLink activeClassName="demo" className="list-group-item active" to="/home/message">Message</NavLink> */}
            </li>
          </ul>
          {/* message */}
          {/* news */}
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
    </div>
    )
  }
}
